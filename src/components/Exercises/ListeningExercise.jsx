import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { listeningScripts } from '../../data/exercises'
import { ArrowLeft, Volume2, Play, Square, CheckCircle, XCircle, Zap } from 'lucide-react'
import clsx from 'clsx'

function SpeakButton({ text, accent = 'US', rate = 0.85 }) {
  const [playing, setPlaying] = useState(false)
  const [supported] = useState(() => 'speechSynthesis' in window)

  function speak() {
    if (!supported || playing) return
    window.speechSynthesis.cancel()
    const utt = new SpeechSynthesisUtterance(text)
    utt.rate = rate
    utt.lang = 'en-US'
    // Try to find an appropriate voice
    const voices = window.speechSynthesis.getVoices()
    const preferred = voices.find(v => accent === 'UK' ? v.lang === 'en-GB' : v.lang.startsWith('en'))
    if (preferred) utt.voice = preferred
    utt.onstart = () => setPlaying(true)
    utt.onend = () => setPlaying(false)
    utt.onerror = () => setPlaying(false)
    window.speechSynthesis.speak(utt)
  }

  function stop() {
    window.speechSynthesis.cancel()
    setPlaying(false)
  }

  if (!supported) return (
    <div className="text-xs text-gray-500 italic">Speech synthesis not available in this browser</div>
  )

  return (
    <button
      onClick={playing ? stop : speak}
      className={clsx(
        'flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all',
        playing
          ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30'
          : 'bg-primary-500/20 text-primary-400 border border-primary-500/30 hover:bg-primary-500/30'
      )}
    >
      {playing ? <><Square size={15} /> Stop</> : <><Play size={15} /> Play Audio</>}
      <span className="text-xs opacity-70">({accent})</span>
    </button>
  )
}

function Part2Exercise({ set }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const { completeExercise, addXP } = useApp()

  function select(qIdx, opt) {
    if (submitted) return
    setAnswers(a => ({ ...a, [qIdx]: opt }))
  }

  function submit() {
    let correct = 0
    set.pairs.forEach((pair, i) => {
      if (answers[i] === pair.answer) correct++
    })
    setScore(correct)
    setSubmitted(true)
    const xp = correct * 8 + 5
    addXP(xp)
    set.pairs.forEach((pair, i) => {
      completeExercise({ exerciseId: `listening-${set.id}-${i}`, correct: answers[i] === pair.answer, category: 'Listening' })
    })
  }

  return (
    <div className="space-y-4">
      {/* Tip */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 text-sm text-yellow-300">
        💡 <strong>Strategy:</strong> Listen to the first word carefully — it tells you what type of answer to expect (Who/What/When/Where/Why/How).
      </div>

      {set.pairs.map((pair, i) => (
        <div key={i} className="card p-5 space-y-4">
          {/* Question audio */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Question {i + 1}</h4>
            <SpeakButton text={pair.question} accent={set.accent} />
          </div>

          {/* Reveal question after listening */}
          <div className="bg-gray-800 rounded-xl p-3">
            <p className="text-white font-medium">{pair.question}</p>
          </div>

          {/* Response options */}
          <div className="space-y-2">
            {pair.options.map((opt) => {
              const isCorrect = opt === pair.answer
              const isSelected = answers[i] === opt
              return (
                <button
                  key={opt}
                  onClick={() => select(i, opt)}
                  className={clsx(
                    'w-full text-left p-3 rounded-xl border text-sm transition-all',
                    !submitted && !isSelected && 'border-gray-700 bg-gray-800/50 hover:border-primary-500 hover:bg-primary-500/5',
                    !submitted && isSelected && 'border-primary-500 bg-primary-500/10',
                    submitted && isCorrect && 'border-green-500 bg-green-500/10 text-green-300',
                    submitted && isSelected && !isCorrect && 'border-red-500 bg-red-500/10 text-red-300',
                    submitted && !isSelected && !isCorrect && 'border-gray-800 opacity-40',
                  )}
                  disabled={submitted}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-200">{opt}</span>
                    {submitted && isCorrect && <CheckCircle size={14} className="text-green-400" />}
                    {submitted && isSelected && !isCorrect && <XCircle size={14} className="text-red-400" />}
                  </div>
                </button>
              )
            })}
          </div>

          {submitted && (
            <div className={clsx(
              'p-3 rounded-xl text-xs animate-fade-in',
              answers[i] === pair.answer ? 'bg-green-500/10 text-green-300' : 'bg-orange-500/10 text-orange-300'
            )}>
              💡 {pair.explanation}
            </div>
          )}
        </div>
      ))}

      {!submitted && (
        <button
          onClick={submit}
          disabled={Object.keys(answers).length < set.pairs.length}
          className="btn-primary w-full py-4"
        >
          {Object.keys(answers).length < set.pairs.length
            ? `Answer ${set.pairs.length - Object.keys(answers).length} more...`
            : 'Submit Answers'}
        </button>
      )}

      {submitted && (
        <div className="card p-5 text-center">
          <div className="text-3xl mb-2">{score === set.pairs.length ? '🏆' : score >= set.pairs.length * 0.75 ? '⭐' : '📚'}</div>
          <div className="text-xl font-bold text-white">{score}/{set.pairs.length} correct</div>
          <div className="flex items-center justify-center gap-1 text-primary-400 mt-1">
            <Zap size={14} /> +{score * 8 + 5} XP
          </div>
        </div>
      )}
    </div>
  )
}

function Part3Exercise({ script }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const { completeExercise, addXP } = useApp()

  function select(qId, opt) {
    if (submitted) return
    setAnswers(a => ({ ...a, [qId]: opt }))
  }

  function submit() {
    let correct = 0
    script.questions.forEach(q => {
      if (answers[q.id] === q.answer) correct++
    })
    setScore(correct)
    setSubmitted(true)
    addXP(correct * 12 + 10)
    script.questions.forEach(q => {
      completeExercise({ exerciseId: `listen-conv-${q.id}`, correct: answers[q.id] === q.answer, category: 'Listening' })
    })
  }

  return (
    <div className="space-y-5">
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-sm text-blue-300">
        💡 <strong>Part 3 Strategy:</strong> Read the questions FIRST, then listen. Focus on who, what, and what happens next.
      </div>

      {/* Conversation */}
      <div className="card p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-white">Conversation</h4>
          <SpeakButton text={script.script} accent={script.accent} rate={0.8} />
        </div>
        <div className="bg-gray-800 rounded-xl p-4 space-y-2 font-mono text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
          {script.script}
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {script.questions.map((q, i) => (
          <div key={q.id} className="card p-4 space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-xs font-bold bg-primary-500/20 text-primary-400 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
              <p className="text-white font-medium text-sm">{q.question}</p>
            </div>
            <div className="space-y-2 pl-7">
              {q.options.map(opt => {
                const isCorrect = opt === q.answer
                const isSelected = answers[q.id] === opt
                return (
                  <button
                    key={opt}
                    onClick={() => select(q.id, opt)}
                    className={clsx(
                      'w-full text-left p-3 rounded-xl border text-sm transition-all',
                      !submitted && !isSelected && 'border-gray-700 bg-gray-800/50 hover:border-primary-500 hover:bg-primary-500/5',
                      !submitted && isSelected && 'border-primary-500 bg-primary-500/10',
                      submitted && isCorrect && 'border-green-500 bg-green-500/10 text-green-300',
                      submitted && isSelected && !isCorrect && 'border-red-500 bg-red-500/10 text-red-300',
                      submitted && !isSelected && !isCorrect && 'border-gray-800 opacity-40',
                    )}
                    disabled={submitted}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
            {submitted && (
              <p className={clsx('pl-7 text-xs animate-fade-in', answers[q.id] === q.answer ? 'text-green-400' : 'text-orange-400')}>
                💡 {q.explanation}
              </p>
            )}
          </div>
        ))}
      </div>

      {!submitted && (
        <button onClick={submit} disabled={Object.keys(answers).length < script.questions.length} className="btn-primary w-full py-4">
          Submit Answers
        </button>
      )}
      {submitted && (
        <div className="card p-4 text-center">
          <div className="text-2xl font-bold text-white">{score}/{script.questions.length} correct</div>
          <div className="text-primary-400 text-sm mt-1 flex items-center justify-center gap-1"><Zap size={13} /> +{score * 12 + 10} XP</div>
        </div>
      )}
    </div>
  )
}

export default function ListeningExercise() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('part2')

  const part2 = listeningScripts.find(s => s.type === 'part2')
  const part3 = listeningScripts.find(s => s.type === 'part3')

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/exercises')} className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm">
          <ArrowLeft size={16} /> Exercises
        </button>
        <span className="text-gray-700">/</span>
        <span className="text-gray-400 text-sm">Listening Practice</span>
      </div>

      <div>
        <h1 className="text-xl font-bold text-white mb-1">Listening Practice</h1>
        <p className="text-gray-400 text-sm flex items-center gap-1.5">
          <Volume2 size={14} /> Text-to-speech powered • Click Play to hear each question
        </p>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-1 bg-gray-900 p-1 rounded-xl border border-gray-800">
        {[
          { id: 'part2', label: 'Part 2: Q-Response', icon: '💬' },
          { id: 'part3', label: 'Part 3: Conversations', icon: '🎙️' },
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={clsx(
              'flex-1 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-1.5',
              tab === t.id ? 'bg-primary-600 text-white' : 'text-gray-400 hover:text-white'
            )}
          >
            <span>{t.icon}</span> {t.label}
          </button>
        ))}
      </div>

      {tab === 'part2' && part2 && <Part2Exercise set={part2} />}
      {tab === 'part3' && part3 && <Part3Exercise script={part3} />}
    </div>
  )
}
