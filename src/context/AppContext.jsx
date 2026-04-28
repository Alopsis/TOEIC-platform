import { createContext, useContext, useReducer, useEffect, useCallback } from 'react'
import { loadState, saveState, checkAndUpdateStreak, getTodayKey } from '../utils/storage'
import { getLevelFromXP, estimateScore, checkBadgeEarned } from '../utils/adaptive'
import { badges, dailyMissions } from '../data/badges'

const AppContext = createContext(null)

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: { ...state.user, ...action.payload, setupComplete: true, createdAt: new Date().toISOString() } }

    case 'ADD_XP': {
      const newXP = state.progress.xp + action.payload
      const newLevel = getLevelFromXP(newXP)
      const progress = checkAndUpdateStreak(state)
      return {
        ...state,
        progress: { ...state.progress, ...progress, xp: newXP, level: newLevel },
      }
    }

    case 'COMPLETE_LESSON': {
      const completedLessons = state.progress.completedLessons.includes(action.payload)
        ? state.progress.completedLessons
        : [...state.progress.completedLessons, action.payload]
      return { ...state, progress: { ...state.progress, completedLessons } }
    }

    case 'COMPLETE_EXERCISE': {
      const { exerciseId, correct, category } = action.payload
      const completedExercises = state.progress.completedExercises.includes(exerciseId)
        ? state.progress.completedExercises
        : [...state.progress.completedExercises, exerciseId]

      const exercisesTotal = state.stats.exercisesTotal + 1
      const exercisesCorrect = state.stats.exercisesCorrect + (correct ? 1 : 0)

      let grammarErrors = { ...state.stats.grammarErrors }
      if (!correct && category) {
        grammarErrors[category] = (grammarErrors[category] || 0) + 1
      }

      const newEstimate = estimateScore({ ...state.stats, exercisesCorrect, exercisesTotal }, state.scores.currentEstimate)
      const today = getTodayKey()
      const dailyActivity = {
        ...state.stats.dailyActivity,
        [today]: (state.stats.dailyActivity[today] || 0) + 1,
      }

      // Update mission progress
      const missionProgress = { ...state.stats.missions.progress }
      missionProgress['daily-exercise'] = (missionProgress['daily-exercise'] || 0) + 1

      return {
        ...state,
        progress: { ...state.progress, completedExercises },
        stats: {
          ...state.stats,
          exercisesTotal,
          exercisesCorrect,
          grammarErrors,
          dailyActivity,
          missions: { ...state.stats.missions, progress: missionProgress },
        },
        scores: { ...state.scores, currentEstimate: newEstimate },
      }
    }

    case 'COMPLETE_TEST': {
      const { testId, score, partScores } = action.payload
      const completedTests = [...state.progress.completedTests, { testId, score, date: new Date().toISOString() }]

      const updatedHistory = [
        ...state.scores.history,
        { date: new Date().toISOString(), score },
      ].slice(-30)

      const missionProgress = { ...state.stats.missions.progress }
      missionProgress['daily-test'] = (missionProgress['daily-test'] || 0) + 1

      return {
        ...state,
        progress: { ...state.progress, completedTests },
        scores: {
          ...state.scores,
          currentEstimate: Math.max(state.scores.currentEstimate, score),
          history: updatedHistory,
          ...(partScores && { partAccuracy: { ...state.scores.partAccuracy, ...partScores } }),
        },
        stats: { ...state.stats, missions: { ...state.stats.missions, progress: missionProgress } },
      }
    }

    case 'LEARN_VOCAB': {
      const { wordKey } = action.payload
      const vocabLearned = state.progress.vocabLearned.includes(wordKey)
        ? state.progress.vocabLearned
        : [...state.progress.vocabLearned, wordKey]

      const missionProgress = { ...state.stats.missions.progress }
      missionProgress['daily-vocab'] = (missionProgress['daily-vocab'] || 0) + 1

      return {
        ...state,
        progress: { ...state.progress, vocabLearned },
        stats: { ...state.stats, missions: { ...state.stats.missions, progress: missionProgress } },
      }
    }

    case 'MASTER_VOCAB': {
      const { wordKey } = action.payload
      const vocabMastered = state.progress.vocabMastered.includes(wordKey)
        ? state.progress.vocabMastered
        : [...state.progress.vocabMastered, wordKey]
      return { ...state, progress: { ...state.progress, vocabMastered } }
    }

    case 'ADD_STUDY_TIME': {
      const studyTimeMinutes = state.progress.studyTimeMinutes + action.payload
      return { ...state, progress: { ...state.progress, studyTimeMinutes } }
    }

    case 'EARN_BADGE': {
      if (state.stats.earnedBadges.includes(action.payload)) return state
      return { ...state, stats: { ...state.stats, earnedBadges: [...state.stats.earnedBadges, action.payload] } }
    }

    case 'COMPLETE_MISSION': {
      const completed = state.stats.missions.completed.includes(action.payload)
        ? state.stats.missions.completed
        : [...state.stats.missions.completed, action.payload]
      return { ...state, stats: { ...state.stats, missions: { ...state.stats.missions, completed } } }
    }

    case 'UPDATE_SETTINGS':
      return { ...state, settings: { ...state.settings, ...action.payload } }

    case 'RESET':
      return loadState()

    case 'ADD_SCORE_HISTORY': {
      const history = [...state.scores.history, { date: new Date().toISOString(), score: action.payload }].slice(-30)
      return { ...state, scores: { ...state.scores, history } }
    }

    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, null, loadState)

  useEffect(() => {
    saveState(state)
  }, [state])

  // Check badges after state changes
  useEffect(() => {
    badges.forEach(badge => {
      if (!state.stats.earnedBadges.includes(badge.id) && checkBadgeEarned(badge, state)) {
        dispatch({ type: 'EARN_BADGE', payload: badge.id })
        if (badge.xp > 0) dispatch({ type: 'ADD_XP', payload: badge.xp })
      }
    })
  }, [state.progress.xp, state.progress.streak, state.progress.completedLessons.length, state.progress.vocabLearned.length])

  // Reset daily missions if it's a new day
  useEffect(() => {
    const today = getTodayKey()
    if (state.stats.missions.lastReset !== today) {
      dispatch({
        type: 'UPDATE_SETTINGS',
        payload: {},
      })
      // Reset missions
      state.stats.missions.lastReset = today
      state.stats.missions.completed = []
      state.stats.missions.progress = {}
    }
  }, [])

  const addXP = useCallback((amount) => dispatch({ type: 'ADD_XP', payload: amount }), [])
  const completeLesson = useCallback((id) => {
    dispatch({ type: 'COMPLETE_LESSON', payload: id })
    dispatch({ type: 'COMPLETE_MISSION_PROGRESS', payload: 'daily-lesson' })
  }, [])
  const completeExercise = useCallback((data) => dispatch({ type: 'COMPLETE_EXERCISE', payload: data }), [])
  const completeTest = useCallback((data) => dispatch({ type: 'COMPLETE_TEST', payload: data }), [])
  const learnVocab = useCallback((wordKey) => dispatch({ type: 'LEARN_VOCAB', payload: { wordKey } }), [])
  const masterVocab = useCallback((wordKey) => dispatch({ type: 'MASTER_VOCAB', payload: { wordKey } }), [])
  const addStudyTime = useCallback((mins) => dispatch({ type: 'ADD_STUDY_TIME', payload: mins }), [])
  const updateSettings = useCallback((settings) => dispatch({ type: 'UPDATE_SETTINGS', payload: settings }), [])
  const setUser = useCallback((user) => dispatch({ type: 'SET_USER', payload: user }), [])

  const getMissionStatus = useCallback(() => {
    const { missions } = state.stats
    return dailyMissions.map(mission => {
      const progress = missions.progress[mission.id] || 0
      const target = mission.target || 1
      const completed = missions.completed.includes(mission.id) || progress >= target
      return { ...mission, progress, target, completed }
    })
  }, [state.stats])

  return (
    <AppContext.Provider value={{
      state,
      dispatch,
      addXP,
      completeLesson,
      completeExercise,
      completeTest,
      learnVocab,
      masterVocab,
      addStudyTime,
      updateSettings,
      setUser,
      getMissionStatus,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
