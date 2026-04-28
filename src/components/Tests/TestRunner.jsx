import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { practiceTests } from '../../data/tests'
import { readingPassages } from '../../data/exercises'
import { Clock, ArrowRight, CheckCircle, XCircle, Zap, RotateCcw, ArrowLeft } from 'lucide-react'
import clsx from 'clsx'

function Timer({ minutes, onTimeUp }) {
  const [seconds, setSeconds] = useState(minutes * 60)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds(s => {
        if (s <= 1) { clearInterval(intervalRef.current); onTimeUp?.(); return 0 }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [])

  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  const urgent = seconds < 60

  return (
    <div className={clsx(
      'flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono font-bold text-sm',
      urgent ? 'bg-red-500/20 text-red-400 animate-pulse' : 'bg-gray-800 text-white'
    )}>
      <Clock size={14} />
      {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
    </div>
  )
}

function TestQuestion({ question, qNum, total, onAnswer, answered }) {
  const [selected, setSelected] = useState(null)
  const [showExp, setShowExp] = useState(false)

  // Get passage for reading questions
  const passage = question.type === 'reading' && question.passageRef
    ? null
    : question.passage

  function choose(opt) {
    if (answered) return
    setSelected(opt)
    setShowExp(true)
    onAnswer(opt === question.answer, question.part)
  }

  return (
    <div className="card p-6 space-y-5 animate-fade-in">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="badge bg-primary-500/20 text-primary-400 border border-primary-500/20">
          Question {qNum}
        </span>
        <span className="badge bg-gray-800 text-gray-400 border border-gray-700">Part {question.part}</span>
      </div>

      {passage && (
        <div className="bg-gray-800/50 rounded-xl p-4 text-sm text-gray-300 font-mono whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
          {passage}
        </div>
      )}

      <p className="text-white font-medium leading-relaxed">{question.question}</p>

      <div className="space-y-2.5">
        {question.options.map((opt, i) => {
          const isCorrect = opt === question.answer
          const isSelected = opt === selected
          const letter = ['A', 'B', 'C', 'D'][i]
          return (
            <button
              key={opt}
              onClick={() => choose(opt)}
              className={clsx(
                'w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3',
                !showExp && 'border-gray-700 bg-gray-800/50 hover:border-primary-500 hover:bg-primary-500/10',
                showExp && isCorrect && 'border-green-500 bg-green-500/10',
                showExp && isSelected && !isCorrect && 'border-red-500 bg-red-500/10',
                showExp && !isSelected && !isCorrect && 'border-gray-800 bg-gray-800/20 opacity-40',
              )}
              disabled={showExp}
            >
              <span className={clsx(
                'w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0',
                !showExp && 'bg-gray-700 text-gray-300',
                showExp && isCorrect && 'bg-green-500 text-white',
                showExp && isSelected && !isCorrect && 'bg-red-500 text-white',
                showExp && !isSelected && !isCorrect && 'bg-gray-800 text-gray-600',
              )}>{letter}</span>
              <span className={clsx(
                'text-sm font-medium flex-1',
                !showExp && 'text-gray-200',
                showExp && isCorrect && 'text-green-300',
                showExp && isSelected && !isCorrect && 'text-red-300',
                showExp && !isSelected && !isCorrect && 'text-gray-500',
              )}>{opt}</span>
              {showExp && isCorrect && <CheckCircle size={16} className="text-green-400 flex-shrink-0" />}
              {showExp && isSelected && !isCorrect && <XCircle size={16} className="text-red-400 flex-shrink-0" />}
            </button>
          )
        })}
      </div>

      {showExp && question.explanation && (
        <div className={clsx(
          'p-4 rounded-xl border text-sm animate-fade-in',
          selected === question.answer
            ? 'bg-green-500/10 border-green-500/20 text-green-300'
            : 'bg-orange-500/10 border-orange-500/20 text-orange-300'
        )}>
          💡 {question.explanation}
        </div>
      )}
    </div>
  )
}

function TestResults({ test, answers, partScores, onRestart, onBack }) {
  const { completeTest, addXP } = useApp()
  const [saved, setSaved] = useState(false)

  const total = test.questions.length
  const correct = Object.values(answers).filter(Boolean).length
  const pct = Math.round((correct / total) * 100)

  // Rough TOEIC score estimation for mini test (extrapolation)
  const estimatedScore = Math.round((pct / 100) * 990 / 10) * 10

  useEffect(() => {
    if (!saved) {
      completeTest({ testId: test.id, score: estimatedScore, partScores })
      addXP(test.xpReward + (pct >= 90 ? 50 : pct >= 75 ? 25 : 0))
      setSaved(true)
    }
  }, [])

  const grade = pct >= 90 ? 'Excellent' : pct >= 75 ? 'Good' : pct >= 60 ? 'Fair' : 'Keep Practicing'
  const emoji = pct >= 90 ? '🏆' : pct >= 75 ? '⭐' : pct >= 60 ? '📚' : '💪'

  return (
    <div className="card p-8 text-center space-y-6 animate-bounce-in">
      <div className="text-6xl">{emoji}</div>
      <div>
        <h2 className="text-2xl font-bold text-white">{grade}!</h2>
        <p className="text-gray-400 mt-1">{test.title} Complete</p>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="text-2xl font-bold text-white">{pct}%</div>
          <div className="text-xs text-gray-400 mt-1">Accuracy</div>
        </div>
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="text-2xl font-bold text-green-400">{correct}</div>
          <div className="text-xs text-gray-400 mt-1">Correct</div>
        </div>
        <div className="bg-gray-800 rounded-xl p-4">
          <div className="text-2xl font-bold text-primary-400">{estimatedScore}</div>
          <div className="text-xs text-gray-400 mt-1">Est. Score</div>
        </div>
      </div>

      <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl px-5 py-3 flex items-center justify-center gap-2">
        <Zap className="text-primary-400" size={18} />
        <span className="text-primary-300 font-bold">+{test.xpReward + (pct >= 90 ? 50 : pct >= 75 ? 25 : 0)} XP earned!</span>
      </div>

      {pct < 75 && (
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 text-sm text-yellow-300 text-left">
          💡 <strong>Tip:</strong> Review the grammar courses covering the questions you missed, then try again!
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <button onClick={onRestart} className="btn-secondary flex items-center justify-center gap-2">
          <RotateCcw size={15} /> Try Again
        </button>
        <button onClick={onBack} className="btn-primary flex items-center justify-center gap-2">
          <Trophy size={15} /> View Progress
        </button>
      </div>
    </div>
  )
}

export default function TestRunner() {
  const { testId } = useParams()
  const navigate = useNavigate()

  const test = practiceTests.find(t => t.id === testId)
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [partScores, setPartScores] = useState({})
  const [answered, setAnswered] = useState(false)
  const [done, setDone] = useState(false)
  const [xpEarned, setXpEarned] = useState(0)
  const [started, setStarted] = useState(false)
  const [passages, setPassages] = useState({})

  // Build passage lookup for reading questions
  useEffect(() => {
    if (!test) return
    const p = {}
    test.questions.forEach(q => {
      if (q.passage) p[q.id] = q.passage
      if (q.passageRef) {
        const refQ = test.questions.find(rq => rq.id === q.passageRef)
        if (refQ?.passage) p[q.id] = refQ.passage
      }
    })
    setPassages(p)
  }, [test])

  if (!test) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-bold text-white mb-4">Test not found</h2>
        <button onClick={() => navigate('/tests')} className="btn-primary">Back to Tests</button>
      </div>
    )
  }

  const questions = test.questions.map(q => {
    if (q.passageRef && passages[q.id]) return { ...q, passage: passages[q.id] }
    return q
  })

  if (!started) {
    return (
      <div className="max-w-lg mx-auto space-y-5">
        <button onClick={() => navigate('/tests')} className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm">
          <ArrowLeft size={16} /> Tests
        </button>
        <div className="card p-8 text-center space-y-5">
          <div className="text-5xl">📋</div>
          <h1 className="text-2xl font-bold text-white">{test.title}</h1>
          <p className="text-gray-400">{test.subtitle}</p>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-800 rounded-xl p-3">
              <div className="text-lg font-bold text-white">{questions.length}</div>
              <div className="text-xs text-gray-400">Questions</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-3">
              <div className="text-lg font-bold text-white">{test.duration}</div>
              <div className="text-xs text-gray-400">Minutes</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-3">
              <div className="text-lg font-bold text-primary-400">+{test.xpReward}</div>
              <div className="text-xs text-gray-400">XP Reward</div>
            </div>
          </div>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 text-sm text-yellow-300 text-left">
            💡 This test simulates real TOEIC Part 5 conditions. Read each sentence carefully and identify the grammatical function of the blank before choosing your answer.
          </div>
          <button onClick={() => setStarted(true)} className="btn-primary w-full py-4 text-base">
            Start Test →
          </button>
        </div>
      </div>
    )
  }

  function handleAnswer(correct, part) {
    setAnswers(a => ({ ...a, [current]: correct }))
    setPartScores(p => {
      const existing = p[part] || { correct: 0, total: 0 }
      return { ...p, [part]: { correct: existing.correct + (correct ? 1 : 0), total: existing.total + 1 } }
    })
    setAnswered(true)
  }

  function next() {
    if (current < questions.length - 1) {
      setCurrent(c => c + 1)
      setAnswered(false)
    } else {
      setDone(true)
    }
  }

  const pctScores = {}
  Object.entries(partScores).forEach(([part, s]) => {
    pctScores[part] = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0
  })

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      {!done ? (
        <>
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-bold text-white">{test.title}</h1>
              <p className="text-xs text-gray-400">
                Question {current + 1} of {questions.length}
              </p>
            </div>
            <Timer minutes={test.duration} onTimeUp={() => setDone(true)} />
          </div>

          {/* Progress */}
          <div className="progress-bar h-2">
            <div className="progress-fill xp-bar" style={{ width: `${((current + (answered ? 1 : 0)) / questions.length) * 100}%` }} />
          </div>

          <TestQuestion
            key={current}
            question={questions[current]}
            qNum={current + 1}
            total={questions.length}
            onAnswer={handleAnswer}
            answered={answered}
          />

          {answered && (
            <button onClick={next} className="btn-primary w-full flex items-center justify-center gap-2 animate-fade-in py-4">
              {current < questions.length - 1 ? (<>Next Question <ArrowRight size={18} /></>) : (<>See Results <Trophy size={18} /></>)}
            </button>
          )}
        </>
      ) : (
        <TestResults
          test={test}
          answers={answers}
          partScores={pctScores}
          onRestart={() => { setCurrent(0); setAnswers({}); setPartScores({}); setAnswered(false); setDone(false); setStarted(true) }}
          onBack={() => navigate('/stats')}
        />
      )}
    </div>
  )
}
