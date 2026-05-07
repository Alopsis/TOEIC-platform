import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { prepExercises } from '../../data/exercises'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Zap, Trophy, RotateCcw } from 'lucide-react'
import clsx from 'clsx'

function ProgressHeader({ current, total, score, xpEarned }) {
  const pct = (current / total) * 100
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-400">{current} / {total} questions</span>
        <div className="flex items-center gap-3">
          <span className="text-green-400 font-medium">✓ {score.correct}</span>
          <span className="text-red-400 font-medium">✗ {score.incorrect}</span>
          <span className="flex items-center gap-1 text-primary-400 font-bold">
            <Zap size={14} /> +{xpEarned} XP
          </span>
        </div>
      </div>
      <div className="progress-bar h-2.5">
        <div className="progress-fill xp-bar" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

function QuestionCard({ question, onAnswer, answered }) {
  const [selected, setSelected] = useState(null)

  function choose(opt) {
    if (answered) return
    setSelected(opt)
    onAnswer(opt === question.answer, question.category)
  }

  const optionLabels = ['A', 'B', 'C', 'D']
  const showResult = selected !== null

  // Split question into before/after the blank
  const parts = question.question.split('___')

  return (
    <div className="card p-6 space-y-5 animate-fade-in">
      {/* Badges */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="badge bg-teal-500/20 text-teal-400 border border-teal-500/20">Part {question.toeicPart}</span>
        <span className="badge bg-gray-800 text-gray-400 border border-gray-700">Verb + Preposition</span>
        <span className={clsx('badge border',
          question.difficulty === 1 ? 'bg-green-500/15 text-green-400 border-green-500/20' :
          question.difficulty === 2 ? 'bg-yellow-500/15 text-yellow-400 border-yellow-500/20' :
          'bg-red-500/15 text-red-400 border-red-500/20'
        )}>
          {'★'.repeat(question.difficulty)}
        </span>
      </div>

      {/* Question with blank highlighted */}
      <div className="bg-gray-800/50 rounded-xl p-4">
        <p className="text-white font-medium leading-relaxed text-base">
          {parts[0]}
          <span className={clsx(
            'inline-block min-w-[3rem] mx-1 px-2 rounded-lg border-b-2 text-center font-bold transition-all',
            !showResult && 'border-primary-500 text-primary-400 bg-primary-500/10',
            showResult && selected === question.answer && 'border-green-500 text-green-300 bg-green-500/15',
            showResult && selected !== question.answer && 'border-red-500 text-red-300 bg-red-500/15',
          )}>
            {showResult ? selected : '___'}
          </span>
          {parts[1]}
        </p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-2.5">
        {question.options.map((opt, i) => {
          const isCorrect = opt === question.answer
          const isSelected = opt === selected
          return (
            <button
              key={opt}
              onClick={() => choose(opt)}
              className={clsx(
                'text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3',
                !showResult && 'border-gray-700 bg-gray-800/50 hover:border-teal-500 hover:bg-teal-500/10',
                showResult && isCorrect && 'border-green-500 bg-green-500/10',
                showResult && isSelected && !isCorrect && 'border-red-500 bg-red-500/10',
                showResult && !isSelected && !isCorrect && 'border-gray-800 bg-gray-800/20 opacity-40',
              )}
              disabled={showResult}
            >
              <span className={clsx(
                'w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0',
                !showResult && 'bg-gray-700 text-gray-300',
                showResult && isCorrect && 'bg-green-500 text-white',
                showResult && isSelected && !isCorrect && 'bg-red-500 text-white',
                showResult && !isSelected && !isCorrect && 'bg-gray-700 text-gray-600',
              )}>
                {optionLabels[i]}
              </span>
              <span className={clsx(
                'font-semibold text-base',
                !showResult && 'text-gray-200',
                showResult && isCorrect && 'text-green-300',
                showResult && isSelected && !isCorrect && 'text-red-300',
                showResult && !isSelected && !isCorrect && 'text-gray-500',
              )}>
                {opt}
              </span>
              {showResult && isCorrect && <CheckCircle size={16} className="text-green-400 ml-auto flex-shrink-0" />}
              {showResult && isSelected && !isCorrect && <XCircle size={16} className="text-red-400 ml-auto flex-shrink-0" />}
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {showResult && (
        <div className={clsx(
          'p-4 rounded-xl border animate-fade-in',
          selected === question.answer
            ? 'bg-green-500/10 border-green-500/20'
            : 'bg-orange-500/10 border-orange-500/20'
        )}>
          <div className="flex items-center gap-2 mb-1.5">
            {selected === question.answer ? (
              <><CheckCircle size={16} className="text-green-400" /><span className="text-green-400 font-semibold text-sm">Correct !</span></>
            ) : (
              <><XCircle size={16} className="text-orange-400" /><span className="text-orange-400 font-semibold text-sm">Incorrect — Réponse : <strong>{question.answer}</strong></span></>
            )}
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">{question.explanation}</p>
        </div>
      )}
    </div>
  )
}

function Results({ score, total, xpEarned, onRetry, onBack }) {
  const pct = Math.round((score.correct / total) * 100)
  const grade = pct >= 90 ? 'Excellent !' : pct >= 75 ? 'Bien joué !' : pct >= 60 ? 'À retravailler' : 'Continue !'
  const emoji = pct >= 90 ? '🏆' : pct >= 75 ? '⭐' : pct >= 60 ? '📚' : '💪'

  return (
    <div className="card p-8 text-center space-y-6 animate-bounce-in">
      <div className="text-6xl">{emoji}</div>
      <div>
        <h2 className="text-2xl font-bold text-white">{grade}</h2>
        <p className="text-gray-400 mt-1">Verbs + Prepositions — Test terminé</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="text-3xl font-bold text-white">{pct}%</div>
          <div className="text-xs text-gray-400 mt-1">Score</div>
        </div>
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="text-3xl font-bold text-green-400">{score.correct}</div>
          <div className="text-xs text-gray-400 mt-1">Correct</div>
        </div>
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="text-3xl font-bold text-red-400">{score.incorrect}</div>
          <div className="text-xs text-gray-400 mt-1">Incorrect</div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-xl px-6 py-3">
        <Zap className="text-primary-400" size={20} />
        <span className="text-primary-300 font-bold text-xl">+{xpEarned} XP gagnés !</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button onClick={onRetry} className="btn-secondary flex items-center justify-center gap-2">
          <RotateCcw size={16} /> Recommencer
        </button>
        <button onClick={onBack} className="btn-primary flex items-center justify-center gap-2">
          <Trophy size={16} /> Voir les stats
        </button>
      </div>
    </div>
  )
}

export default function PrepDrill() {
  const navigate = useNavigate()
  const { completeExercise, addXP, addStudyTime } = useApp()

  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState({ correct: 0, incorrect: 0 })
  const [answered, setAnswered] = useState(false)
  const [done, setDone] = useState(false)
  const [xpEarned, setXpEarned] = useState(0)
  const [startTime] = useState(Date.now())

  useEffect(() => {
    const shuffled = [...prepExercises].sort(() => Math.random() - 0.5).slice(0, 10)
    setQuestions(shuffled)
  }, [])

  function handleAnswer(correct, category) {
    const xpGain = correct ? 10 : 2
    setXpEarned(p => p + xpGain)
    setScore(s => ({
      correct: s.correct + (correct ? 1 : 0),
      incorrect: s.incorrect + (correct ? 0 : 1),
    }))
    completeExercise({ exerciseId: questions[current]?.id, correct, category })
    if (correct) addXP(xpGain)
    setAnswered(true)
  }

  function next() {
    if (current < questions.length - 1) {
      setCurrent(c => c + 1)
      setAnswered(false)
    } else {
      const mins = Math.round((Date.now() - startTime) / 60000)
      addStudyTime(Math.max(mins, 3))
      setDone(true)
    }
  }

  function retry() {
    const shuffled = [...prepExercises].sort(() => Math.random() - 0.5).slice(0, 10)
    setQuestions(shuffled)
    setCurrent(0)
    setScore({ correct: 0, incorrect: 0 })
    setAnswered(false)
    setDone(false)
    setXpEarned(0)
  }

  if (!questions.length) {
    return <div className="flex items-center justify-center h-64"><div className="text-gray-400">Chargement...</div></div>
  }

  return (
    <div className="space-y-5 max-w-2xl mx-auto">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/exercises')} className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors">
          <ArrowLeft size={16} /> Exercises
        </button>
        <span className="text-gray-700">/</span>
        <span className="text-gray-400 text-sm">Verbs + Prepositions</span>
      </div>

      {!done ? (
        <>
          <ProgressHeader
            current={current + (answered ? 1 : 0)}
            total={questions.length}
            score={score}
            xpEarned={xpEarned}
          />
          <QuestionCard
            key={current}
            question={questions[current]}
            onAnswer={handleAnswer}
            answered={answered}
          />
          {answered && (
            <button onClick={next} className="btn-primary w-full flex items-center justify-center gap-2 animate-fade-in">
              {current < questions.length - 1 ? (<>Question suivante <ArrowRight size={18} /></>) : (<>Voir les résultats <Trophy size={18} /></>)}
            </button>
          )}
        </>
      ) : (
        <Results
          score={score}
          total={questions.length}
          xpEarned={xpEarned}
          onRetry={retry}
          onBack={() => navigate('/stats')}
        />
      )}
    </div>
  )
}
