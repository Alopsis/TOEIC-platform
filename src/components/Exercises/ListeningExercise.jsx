import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { listeningScripts } from '../../data/exercises'
import {
  ArrowLeft, Volume2, Play, Square, CheckCircle, XCircle,
  Zap, RotateCcw, Eye, EyeOff, Headphones
} from 'lucide-react'
import clsx from 'clsx'

// ─── Audio player with animated waveform ─────────────────────────────────────
function AudioPlayer({ text, accent = 'US', rate = 0.85, label = 'Play Audio', onPlayStart }) {
  const [state, setState] = useState('idle') // idle | playing | done
  const uttRef = useRef(null)
  const supported = 'speechSynthesis' in window

  const speak = useCallback(() => {
    if (!supported || state === 'playing') return
    window.speechSynthesis.cancel()
    const utt = new SpeechSynthesisUtterance(text)
    utt.rate = rate
    utt.lang = accent === 'AU' ? 'en-AU' : accent === 'UK' ? 'en-GB' : 'en-US'
    const voices = window.speechSynthesis.getVoices()
    const preferred = voices.find(v =>
      accent === 'AU' ? v.lang === 'en-AU' :
      accent === 'UK' ? v.lang === 'en-GB' :
      v.lang.startsWith('en-US') || v.lang.startsWith('en')
    )
    if (preferred) utt.voice = preferred
    utt.onstart = () => { setState('playing'); onPlayStart?.() }
    utt.onend = () => setState('done')
    utt.onerror = () => setState('idle')
    uttRef.current = utt
    window.speechSynthesis.speak(utt)
  }, [text, accent, rate, state, supported, onPlayStart])

  const stop = useCallback(() => {
    window.speechSynthesis.cancel()
    setState('idle')
  }, [])

  useEffect(() => () => window.speechSynthesis.cancel(), [])

  if (!supported) return (
    <div className="text-xs text-gray-500 italic flex items-center gap-1">
      <Volume2 size={12} /> Speech synthesis not available in this browser
    </div>
  )

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Animated waveform bars */}
      <div className={clsx('flex items-center gap-1 h-8', state !== 'playing' && 'opacity-30')}>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={clsx(
              'w-1 rounded-full bg-primary-400 transition-all',
              state === 'playing' ? 'animate-pulse' : 'h-1'
            )}
            style={state === 'playing' ? {
              height: `${Math.round(8 + Math.random() * 24)}px`,
              animationDelay: `${i * 80}ms`,
              animationDuration: `${400 + i * 60}ms`,
            } : { height: '4px' }}
          />
        ))}
      </div>

      {/* Play / Stop button */}
      <button
        onClick={state === 'playing' ? stop : speak}
        className={clsx(
          'flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all active:scale-95',
          state === 'playing'
            ? 'bg-red-500/20 text-red-300 border-2 border-red-500/40 hover:bg-red-500/30'
            : state === 'done'
            ? 'bg-green-500/15 text-green-300 border-2 border-green-500/30 hover:bg-primary-500/20 hover:text-primary-300 hover:border-primary-500/30'
            : 'bg-primary-500/20 text-primary-300 border-2 border-primary-500/30 hover:bg-primary-500/30'
        )}
      >
        {state === 'playing' ? (
          <><Square size={16} /> Stop</>
        ) : state === 'done' ? (
          <><RotateCcw size={16} /> Play again</>
        ) : (
          <><Play size={16} fill="currentColor" /> {label}</>
        )}
        <span className="text-xs opacity-60">({accent})</span>
      </button>

      {state === 'done' && (
        <p className="text-xs text-gray-500 animate-fade-in">Audio finished — choose your answer below</p>
      )}
    </div>
  )
}

// ─── Part 2: Question-Response ────────────────────────────────────────────────
function Part2Exercise({ set }) {
  const { completeExercise, addXP } = useApp()
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [revealedQuestions, setRevealedQuestions] = useState({})

  function select(i, opt) {
    if (submitted) return
    setAnswers(a => ({ ...a, [i]: opt }))
  }

  function submit() {
    let correct = 0
    set.pairs.forEach((pair, i) => { if (answers[i] === pair.answer) correct++ })
    setScore(correct)
    setSubmitted(true)
    const xp = correct * 8 + 5
    addXP(xp)
    set.pairs.forEach((pair, i) => {
      completeExercise({ exerciseId: `l-p2-${set.id}-${i}`, correct: answers[i] === pair.answer, category: 'Listening' })
    })
  }

  function toggleReveal(i) {
    setRevealedQuestions(r => ({ ...r, [i]: !r[i] }))
  }

  const allAnswered = Object.keys(answers).length >= set.pairs.length

  return (
    <div className="space-y-4">
      {/* Strategy tip */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 text-sm text-yellow-200 space-y-1">
        <div className="font-semibold flex items-center gap-1.5">💡 TOEIC Part 2 Strategy</div>
        <ul className="text-yellow-300/80 space-y-0.5 pl-2">
          <li>→ Focus on the <strong>first word</strong> of the question (Who/What/When/Where/Why/How)</li>
          <li>→ Beware of <strong>indirect answers</strong> — the correct response may not directly answer</li>
          <li>→ Eliminate answers that mention similar-sounding words but make no sense</li>
        </ul>
      </div>

      {/* Questions */}
      {set.pairs.map((pair, i) => (
        <div key={i} className="card p-5 space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Question {i + 1}</span>
            {submitted && (
              <button
                onClick={() => toggleReveal(i)}
                className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-200 transition-colors"
              >
                {revealedQuestions[i] ? <><EyeOff size={12} /> Hide text</> : <><Eye size={12} /> Show text</>}
              </button>
            )}
          </div>

          {/* Audio player — text is HIDDEN */}
          <div className="bg-gray-800/60 rounded-xl py-5 flex flex-col items-center gap-2">
            <Headphones size={20} className="text-gray-500 mb-1" />
            <p className="text-xs text-gray-500 mb-1">Listen carefully, then choose the best response</p>
            <AudioPlayer text={pair.question} accent={set.accent} label={`Play Question ${i + 1}`} />
          </div>

          {/* Transcript revealed only after submitting */}
          {submitted && revealedQuestions[i] && (
            <div className="bg-gray-800 rounded-xl px-4 py-3 border border-gray-700 animate-fade-in">
              <p className="text-xs text-gray-500 mb-1 uppercase tracking-wide">Question transcript</p>
              <p className="text-white font-medium text-sm">"{pair.question}"</p>
            </div>
          )}

          {/* Answer options — visible as text (as in real TOEIC prep) */}
          <div className="space-y-2">
            {pair.options.map((opt, j) => {
              const letter = ['A', 'B', 'C'][j]
              const isCorrect = opt === pair.answer
              const isSelected = answers[i] === opt
              return (
                <button
                  key={opt}
                  onClick={() => select(i, opt)}
                  disabled={submitted}
                  className={clsx(
                    'w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center gap-3',
                    !submitted && !isSelected && 'border-gray-700 bg-gray-800/40 hover:border-primary-500 hover:bg-primary-500/8',
                    !submitted && isSelected && 'border-primary-500 bg-primary-500/15',
                    submitted && isCorrect && 'border-green-500 bg-green-500/10',
                    submitted && isSelected && !isCorrect && 'border-red-500 bg-red-500/10',
                    submitted && !isSelected && !isCorrect && 'border-gray-800 bg-gray-800/10 opacity-40',
                  )}
                >
                  <span className={clsx(
                    'w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0',
                    !submitted && !isSelected && 'bg-gray-700 text-gray-300',
                    !submitted && isSelected && 'bg-primary-600 text-white',
                    submitted && isCorrect && 'bg-green-500 text-white',
                    submitted && isSelected && !isCorrect && 'bg-red-500 text-white',
                    submitted && !isSelected && !isCorrect && 'bg-gray-700/50 text-gray-600',
                  )}>{letter}</span>
                  <span className={clsx(
                    'text-sm font-medium flex-1',
                    !submitted && 'text-gray-200',
                    submitted && isCorrect && 'text-green-300',
                    submitted && isSelected && !isCorrect && 'text-red-300',
                    submitted && !isSelected && !isCorrect && 'text-gray-600',
                  )}>{opt}</span>
                  {submitted && isCorrect && <CheckCircle size={16} className="text-green-400 flex-shrink-0" />}
                  {submitted && isSelected && !isCorrect && <XCircle size={16} className="text-red-400 flex-shrink-0" />}
                </button>
              )
            })}
          </div>

          {/* Explanation */}
          {submitted && (
            <div className={clsx(
              'p-3 rounded-xl text-xs animate-fade-in leading-relaxed',
              answers[i] === pair.answer ? 'bg-green-500/10 border border-green-500/20 text-green-300' : 'bg-orange-500/10 border border-orange-500/20 text-orange-300'
            )}>
              {answers[i] === pair.answer ? '✅' : '❌'} {pair.explanation}
            </div>
          )}
        </div>
      ))}

      {/* Submit / Score */}
      {!submitted ? (
        <button
          onClick={submit}
          disabled={!allAnswered}
          className="btn-primary w-full py-4 text-base"
        >
          {allAnswered
            ? `Submit All Answers`
            : `Answer ${set.pairs.length - Object.keys(answers).length} more question${set.pairs.length - Object.keys(answers).length > 1 ? 's' : ''}...`}
        </button>
      ) : (
        <div className="card p-6 text-center space-y-2">
          <div className="text-4xl">{score === set.pairs.length ? '🏆' : score >= set.pairs.length * 0.7 ? '⭐' : '📚'}</div>
          <div className="text-2xl font-bold text-white">{score} / {set.pairs.length}</div>
          <div className="text-gray-400 text-sm">
            {score === set.pairs.length ? 'Perfect! Excellent listening skills!' : 'Review the explanations above and try again.'}
          </div>
          <div className="flex items-center justify-center gap-1 text-primary-400 font-bold">
            <Zap size={14} /> +{score * 8 + 5} XP earned
          </div>
          <p className="text-xs text-gray-500 mt-2">💡 Click "Show text" on each question to read the transcript</p>
        </div>
      )}
    </div>
  )
}

// ─── Part 3/4: Conversation / Monologue ───────────────────────────────────────
function ConversationExercise({ script }) {
  const { completeExercise, addXP } = useApp()
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [transcriptVisible, setTranscriptVisible] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)

  const isMonologue = script.type === 'part4'
  const xpPerQ = isMonologue ? 15 : 12

  function select(qId, opt) {
    if (submitted) return
    setAnswers(a => ({ ...a, [qId]: opt }))
  }

  function submit() {
    let correct = 0
    script.questions.forEach(q => { if (answers[q.id] === q.answer) correct++ })
    setScore(correct)
    setSubmitted(true)
    addXP(correct * xpPerQ + 10)
    script.questions.forEach(q => {
      completeExercise({ exerciseId: `l-p34-${q.id}`, correct: answers[q.id] === q.answer, category: 'Listening' })
    })
  }

  const allAnswered = Object.keys(answers).length >= script.questions.length

  return (
    <div className="space-y-5">
      {/* Strategy */}
      <div className={clsx(
        'border rounded-xl p-4 text-sm space-y-1',
        isMonologue
          ? 'bg-purple-500/10 border-purple-500/20 text-purple-200'
          : 'bg-blue-500/10 border-blue-500/20 text-blue-200'
      )}>
        <div className="font-semibold flex items-center gap-1.5">
          {isMonologue ? '📢' : '🎙️'} TOEIC {isMonologue ? 'Part 4' : 'Part 3'} Strategy
        </div>
        <ul className={clsx('space-y-0.5 pl-2', isMonologue ? 'text-purple-300/80' : 'text-blue-300/80')}>
          <li>→ <strong>Read the questions first</strong> before listening</li>
          <li>→ {isMonologue ? 'First sentence reveals the topic and speaker\'s purpose' : 'Note who the speakers are and what their problem is'}</li>
          <li>→ Listen for keywords from the answer choices</li>
        </ul>
      </div>

      {/* Read questions BEFORE listening — shown prominently */}
      <div className="card p-5 space-y-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-300">
          <span className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-xs">1</span>
          Read these questions first
        </div>
        <div className="space-y-3">
          {script.questions.map((q, i) => (
            <div key={q.id} className="flex items-start gap-2">
              <span className="text-xs font-bold text-primary-400 mt-0.5 flex-shrink-0">Q{i + 1}</span>
              <p className="text-gray-300 text-sm">{q.question}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Audio section — SCRIPT IS HIDDEN */}
      <div className="card p-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-4">
          <span className="w-5 h-5 bg-primary-500/20 text-primary-400 rounded-full flex items-center justify-center text-xs">2</span>
          Now listen {isMonologue ? 'to the announcement' : 'to the conversation'}
        </div>

        <div className="bg-gray-800/50 rounded-xl py-6 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Headphones size={20} />
            <span>{isMonologue ? 'Monologue' : 'Conversation'} — {script.accent} English</span>
          </div>
          <AudioPlayer
            text={script.script}
            accent={script.accent}
            rate={0.8}
            label={isMonologue ? '▶ Play Announcement' : '▶ Play Conversation'}
            onPlayStart={() => setHasPlayed(true)}
          />
          {!hasPlayed && (
            <p className="text-xs text-gray-600 text-center max-w-xs">
              The text is hidden — just like the real TOEIC. Listen carefully, then answer the questions below.
            </p>
          )}
        </div>
      </div>

      {/* Answer section */}
      <div className="card p-5 space-y-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-gray-300">
          <span className="w-5 h-5 bg-yellow-500/20 text-yellow-400 rounded-full flex items-center justify-center text-xs">3</span>
          Answer the questions
        </div>

        <div className="space-y-5">
          {script.questions.map((q, i) => (
            <div key={q.id} className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-xs font-bold bg-primary-500/20 text-primary-400 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                <p className="text-white font-medium text-sm leading-relaxed">{q.question}</p>
              </div>
              <div className="space-y-2 pl-7">
                {q.options.map((opt, j) => {
                  const letter = ['A', 'B', 'C', 'D'][j]
                  const isCorrect = opt === q.answer
                  const isSelected = answers[q.id] === opt
                  return (
                    <button
                      key={opt}
                      onClick={() => select(q.id, opt)}
                      disabled={submitted}
                      className={clsx(
                        'w-full text-left p-3 rounded-xl border text-sm transition-all flex items-center gap-2.5',
                        !submitted && !isSelected && 'border-gray-700 bg-gray-800/40 hover:border-primary-500 hover:bg-primary-500/8',
                        !submitted && isSelected && 'border-primary-500 bg-primary-500/15',
                        submitted && isCorrect && 'border-green-500 bg-green-500/10',
                        submitted && isSelected && !isCorrect && 'border-red-500 bg-red-500/10',
                        submitted && !isSelected && !isCorrect && 'border-gray-800 opacity-40',
                      )}
                    >
                      <span className={clsx(
                        'w-6 h-6 rounded-md text-[11px] font-bold flex items-center justify-center flex-shrink-0',
                        !submitted && !isSelected && 'bg-gray-700 text-gray-400',
                        !submitted && isSelected && 'bg-primary-600 text-white',
                        submitted && isCorrect && 'bg-green-500 text-white',
                        submitted && isSelected && !isCorrect && 'bg-red-500 text-white',
                        submitted && !isSelected && !isCorrect && 'bg-gray-700/40 text-gray-600',
                      )}>{letter}</span>
                      <span className={clsx(
                        'flex-1 font-medium',
                        !submitted && 'text-gray-200',
                        submitted && isCorrect && 'text-green-300',
                        submitted && isSelected && !isCorrect && 'text-red-300',
                        submitted && !isSelected && !isCorrect && 'text-gray-600',
                      )}>{opt}</span>
                      {submitted && isCorrect && <CheckCircle size={15} className="text-green-400 flex-shrink-0" />}
                      {submitted && isSelected && !isCorrect && <XCircle size={15} className="text-red-400 flex-shrink-0" />}
                    </button>
                  )
                })}
              </div>
              {submitted && (
                <p className={clsx('pl-7 text-xs leading-relaxed animate-fade-in', answers[q.id] === q.answer ? 'text-green-400' : 'text-orange-400')}>
                  💡 {q.explanation}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Submit */}
      {!submitted ? (
        <button onClick={submit} disabled={!allAnswered} className="btn-primary w-full py-4">
          {allAnswered ? 'Submit Answers' : `${script.questions.length - Object.keys(answers).length} question${script.questions.length - Object.keys(answers).length > 1 ? 's' : ''} remaining...`}
        </button>
      ) : (
        <div className="space-y-3">
          <div className="card p-5 text-center space-y-2">
            <div className="text-3xl">{score === script.questions.length ? '🏆' : score > 0 ? '⭐' : '📚'}</div>
            <div className="text-xl font-bold text-white">{score} / {script.questions.length} correct</div>
            <div className="flex items-center justify-center gap-1 text-primary-400 font-bold">
              <Zap size={14} /> +{score * xpPerQ + 10} XP
            </div>
          </div>
          {/* Transcript reveal */}
          <button
            onClick={() => setTranscriptVisible(v => !v)}
            className="btn-secondary w-full flex items-center justify-center gap-2 text-sm"
          >
            {transcriptVisible ? <><EyeOff size={15} /> Hide Transcript</> : <><Eye size={15} /> View Full Transcript</>}
          </button>
          {transcriptVisible && (
            <div className="card p-5 animate-fade-in">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Full Transcript</h4>
              <p className="text-gray-300 text-sm leading-relaxed font-mono whitespace-pre-wrap">{script.script}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ListeningExercise() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('part2')
  const [setIndex, setSetIndex] = useState(0)

  const part2Sets = listeningScripts.filter(s => s.type === 'part2')
  const part3Scripts = listeningScripts.filter(s => s.type === 'part3')
  const part4Scripts = listeningScripts.filter(s => s.type === 'part4')

  const tabs = [
    { id: 'part2', label: 'Part 2', icon: '💬', sub: 'Q-Response' },
    { id: 'part3', label: 'Part 3', icon: '🎙️', sub: 'Conversations' },
    { id: 'part4', label: 'Part 4', icon: '📢', sub: 'Monologues' },
  ]

  const sets = tab === 'part2' ? part2Sets : tab === 'part3' ? part3Scripts : part4Scripts
  const current = sets[setIndex]

  function switchSet(idx) {
    setSetIndex(idx)
    window.scrollTo(0, 0)
  }

  function changeTab(newTab) {
    setTab(newTab)
    setSetIndex(0)
    window.scrollTo(0, 0)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      {/* Breadcrumb */}
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/exercises')} className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors">
          <ArrowLeft size={16} /> Exercises
        </button>
        <span className="text-gray-700">/</span>
        <span className="text-gray-400 text-sm">Listening Practice</span>
      </div>

      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-white mb-1">Listening Practice</h1>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Headphones size={15} />
          <span>Audio only — text is hidden to simulate real TOEIC conditions</span>
        </div>
      </div>

      {/* Tab switcher */}
      <div className="grid grid-cols-3 gap-1.5 bg-gray-900 p-1.5 rounded-xl border border-gray-800">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => changeTab(t.id)}
            className={clsx(
              'py-2.5 px-2 rounded-lg text-xs font-semibold transition-all flex flex-col items-center gap-0.5',
              tab === t.id ? 'bg-primary-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-gray-800'
            )}
          >
            <span className="text-base">{t.icon}</span>
            <span>{t.label}</span>
            <span className={clsx('text-[10px]', tab === t.id ? 'text-primary-200' : 'text-gray-600')}>{t.sub}</span>
          </button>
        ))}
      </div>

      {/* Set selector (if multiple) */}
      {sets.length > 1 && (
        <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
          {sets.map((s, i) => (
            <button
              key={s.id}
              onClick={() => switchSet(i)}
              className={clsx(
                'px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex-shrink-0',
                setIndex === i ? 'bg-primary-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              )}
            >
              {s.title}
            </button>
          ))}
        </div>
      )}

      {/* Exercise content */}
      {current ? (
        <div key={`${tab}-${setIndex}`}>
          {tab === 'part2'
            ? <Part2Exercise set={current} />
            : <ConversationExercise script={current} />
          }
        </div>
      ) : (
        <div className="card p-10 text-center">
          <Headphones size={40} className="text-gray-600 mx-auto mb-3" />
          <p className="text-gray-500">No exercises available for this section yet.</p>
        </div>
      )}
    </div>
  )
}
