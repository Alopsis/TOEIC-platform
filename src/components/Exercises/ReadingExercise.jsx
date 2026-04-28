import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { readingPassages } from '../../data/exercises'
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Zap, RotateCcw } from 'lucide-react'
import clsx from 'clsx'

function PassageView({ passage, onComplete }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(null)

  function selectAnswer(qId, opt) {
    if (submitted) return
    setAnswers(a => ({ ...a, [qId]: opt }))
  }

  function submit() {
    let correct = 0
    passage.questions.forEach(q => {
      if (answers[q.id] === q.answer) correct++
    })
    setScore({ correct, total: passage.questions.length })
    setSubmitted(true)
  }

  function canSubmit() {
    return passage.questions.every(q => answers[q.id])
  }

  const typeLabels = { email: '📧 Email/Memo', advertisement: '📢 Advertisement', article: '📰 Article' }

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Passage type & score */}
      <div className="flex items-center justify-between">
        <span className="badge bg-gray-800 text-gray-400 border border-gray-700">{typeLabels[passage.type] || passage.type}</span>
        {score && (
          <div className={clsx(
            'badge font-bold',
            score.correct / score.total >= 0.75 ? 'bg-green-500/20 text-green-400 border border-green-500/20' : 'bg-orange-500/20 text-orange-400 border border-orange-500/20'
          )}>
            {score.correct}/{score.total} correct
          </div>
        )}
      </div>

      {/* Passage text */}
      <div className="card p-5">
        <h3 className="font-bold text-primary-400 text-sm uppercase tracking-wide mb-3">{passage.title}</h3>
        <pre className="text-gray-300 font-sans whitespace-pre-wrap leading-relaxed text-sm">{passage.text}</pre>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {passage.questions.map((q, qi) => (
          <div key={q.id} className="card p-5 space-y-3">
            <div className="flex items-start gap-2">
              <span className="w-6 h-6 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                {qi + 1}
              </span>
              <p className="text-white font-medium text-sm leading-relaxed">{q.question}</p>
            </div>
            <div className="space-y-2 pl-8">
              {q.options.map(opt => {
                const isCorrect = opt === q.answer
                const isSelected = answers[q.id] === opt
                return (
                  <button
                    key={opt}
                    onClick={() => selectAnswer(q.id, opt)}
                    className={clsx(
                      'w-full text-left p-3 rounded-xl border transition-all duration-200 text-sm',
                      !submitted && !isSelected && 'border-gray-700 bg-gray-800/50 hover:border-primary-500 hover:bg-primary-500/5',
                      !submitted && isSelected && 'border-primary-500 bg-primary-500/10 text-primary-200',
                      submitted && isCorrect && 'border-green-500 bg-green-500/10 text-green-300',
                      submitted && isSelected && !isCorrect && 'border-red-500 bg-red-500/10 text-red-300',
                      submitted && !isSelected && !isCorrect && 'border-gray-800 text-gray-500 opacity-50',
                    )}
                    disabled={submitted}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span>{opt}</span>
                      {submitted && isCorrect && <CheckCircle size={15} className="text-green-400 flex-shrink-0" />}
                      {submitted && isSelected && !isCorrect && <XCircle size={15} className="text-red-400 flex-shrink-0" />}
                    </div>
                  </button>
                )
              })}
            </div>
            {submitted && (
              <div className={clsx(
                'pl-8 p-3 rounded-xl text-sm animate-fade-in',
                answers[q.id] === q.answer ? 'bg-green-500/10 text-green-300' : 'bg-orange-500/10 text-orange-300'
              )}>
                💡 {q.explanation}
              </div>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={submit}
          disabled={!canSubmit()}
          className="btn-primary w-full text-base py-4"
        >
          {canSubmit() ? 'Submit Answers' : `Answer all questions (${Object.keys(answers).length}/${passage.questions.length})`}
        </button>
      ) : (
        <div className="card p-5 text-center space-y-3">
          <div className="text-4xl">{score.correct === score.total ? '🏆' : score.correct >= score.total * 0.75 ? '⭐' : '📚'}</div>
          <div className="text-xl font-bold text-white">{score.correct}/{score.total} correct</div>
          <div className="text-gray-400 text-sm">
            {score.correct === score.total ? 'Perfect score! Excellent reading comprehension.' :
            score.correct >= score.total * 0.75 ? 'Great job! Review the explanations above.' :
            'Keep practicing! Focus on scanning for key information.'}
          </div>
          <button onClick={onComplete} className="btn-primary flex items-center justify-center gap-2 mx-auto">
            <ArrowRight size={16} /> Next Passage
          </button>
        </div>
      )}
    </div>
  )
}

export default function ReadingExercise() {
  const navigate = useNavigate()
  const { completeExercise, addXP, addStudyTime } = useApp()
  const [passageIndex, setPassageIndex] = useState(0)
  const [allDone, setAllDone] = useState(false)
  const [totalXP, setTotalXP] = useState(0)

  function handlePassageComplete() {
    const xp = 50
    addXP(xp)
    setTotalXP(t => t + xp)
    completeExercise({ exerciseId: `reading-${passageIndex}`, correct: true, category: 'Reading' })

    if (passageIndex < readingPassages.length - 1) {
      setPassageIndex(p => p + 1)
      window.scrollTo(0, 0)
    } else {
      const mins = Math.max(Math.round(readingPassages.reduce((sum, p) => sum + p.questions.length, 0) * 1.5), 10)
      addStudyTime(mins)
      setAllDone(true)
    }
  }

  if (allDone) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="card p-8 text-center space-y-5 animate-bounce-in">
          <div className="text-6xl">🎉</div>
          <h2 className="text-2xl font-bold text-white">All Passages Complete!</h2>
          <p className="text-gray-400">Excellent reading comprehension practice!</p>
          <div className="flex items-center justify-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-xl px-6 py-3">
            <Zap className="text-primary-400" size={20} />
            <span className="text-primary-300 font-bold text-xl">+{totalXP} XP earned!</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => { setPassageIndex(0); setAllDone(false); setTotalXP(0) }} className="btn-secondary flex items-center justify-center gap-2">
              <RotateCcw size={16} /> Restart
            </button>
            <button onClick={() => navigate('/exercises')} className="btn-primary">Back to Exercises</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/exercises')} className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm">
          <ArrowLeft size={16} /> Exercises
        </button>
        <span className="text-gray-700">/</span>
        <span className="text-gray-400 text-sm">Reading Comprehension</span>
      </div>

      {/* Progress */}
      <div className="card p-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-gray-400">Passage {passageIndex + 1} of {readingPassages.length}</span>
          <span className="text-primary-400 font-bold flex items-center gap-1"><Zap size={13} /> +{totalXP} XP</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill xp-bar" style={{ width: `${((passageIndex) / readingPassages.length) * 100}%` }} />
        </div>
      </div>

      <PassageView
        key={passageIndex}
        passage={readingPassages[passageIndex]}
        onComplete={handlePassageComplete}
      />
    </div>
  )
}
