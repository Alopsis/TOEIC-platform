const STORAGE_KEY = 'toeic_master_v2'

const defaultState = {
  user: {
    name: '',
    targetScore: 850,
    setupComplete: false,
    createdAt: null,
  },
  progress: {
    xp: 0,
    level: 1,
    streak: 0,
    lastStudyDate: null,
    studyTimeMinutes: 0,
    completedLessons: [],
    completedExercises: [],
    completedTests: [],
    vocabLearned: [],
    vocabMastered: [],
  },
  scores: {
    currentEstimate: 350,
    listeningScore: 175,
    readingScore: 175,
    history: [],
    partAccuracy: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 },
  },
  stats: {
    exercisesCorrect: 0,
    exercisesTotal: 0,
    grammarErrors: {},
    vocabErrors: {},
    dailyActivity: {},
    sessionHistory: [],
    weeklyXP: [],
    earnedBadges: [],
    missions: {
      lastReset: null,
      completed: [],
      progress: {},
    },
  },
  settings: {
    darkMode: true,
    notifications: true,
    dailyGoalMinutes: 20,
    speechRate: 0.9,
    accent: 'US',
  },
}

export function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return defaultState
    const parsed = JSON.parse(stored)
    return deepMerge(defaultState, parsed)
  } catch {
    return defaultState
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (e) {
    console.warn('Failed to save state:', e)
  }
}

export function resetState() {
  localStorage.removeItem(STORAGE_KEY)
  return defaultState
}

function deepMerge(base, override) {
  const result = { ...base }
  for (const key in override) {
    if (override[key] && typeof override[key] === 'object' && !Array.isArray(override[key])) {
      result[key] = deepMerge(base[key] || {}, override[key])
    } else {
      result[key] = override[key]
    }
  }
  return result
}

export function getTodayKey() {
  return new Date().toISOString().split('T')[0]
}

export function checkAndUpdateStreak(state) {
  const today = getTodayKey()
  const last = state.progress.lastStudyDate

  if (!last) {
    return { ...state.progress, streak: 1, lastStudyDate: today }
  }

  const lastDate = new Date(last)
  const todayDate = new Date(today)
  const diffDays = Math.round((todayDate - lastDate) / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return state.progress
  if (diffDays === 1) return { ...state.progress, streak: state.progress.streak + 1, lastStudyDate: today }
  return { ...state.progress, streak: 1, lastStudyDate: today }
}
