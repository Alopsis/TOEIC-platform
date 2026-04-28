import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { vocabularyData } from '../../data/vocabulary'
import { vocabularyCourses } from '../../data/courses'
import { ArrowLeft, Volume2, RotateCcw, CheckCircle, XCircle, Zap, Trophy } from 'lucide-react'
import clsx from 'clsx'

function Flashcard({ word, isFlipped, onFlip }) {
  function speak(text) {
    if (!('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utt = new SpeechSynthesisUtterance(text)
    utt.rate = 0.85
    utt.lang = 'en-US'
    window.speechSynthesis.speak(utt)
  }

  return (
    <div className="perspective cursor-pointer" style={{ height: 280 }} onClick={onFlip}>
      <div className={clsx('card-inner w-full h-full', isFlipped && 'flipped')} style={{ height: '100%' }}>
        {/* Front */}
        <div className="card-front absolute inset-0 card rounded-2xl flex flex-col items-center justify-center p-8 gap-4">
          <div className="text-4xl font-bold text-white text-center">{word.word}</div>
          <div className="flex items-center gap-2">
            <span className={clsx(
              'badge',
              word.level === 1 ? 'bg-green-500/15 text-green-400' :
              word.level === 2 ? 'bg-yellow-500/15 text-yellow-400' :
              'bg-red-500/15 text-red-400'
            )}>
              {'★'.repeat(word.level)} Level {word.level}
            </span>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); speak(word.word) }}
            className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-1.5 text-sm"
          >
            <Volume2 size={16} /> Hear it
          </button>
          <p className="text-gray-500 text-sm text-center mt-2">Tap to reveal definition</p>
        </div>

        {/* Back */}
        <div className="card-back absolute inset-0 card rounded-2xl flex flex-col gap-4 p-6 overflow-y-auto">
          <div className="text-xl font-bold text-primary-300 text-center">{word.word}</div>
          {word.fr && (
            <div className="text-center">
              <span className="badge bg-blue-500/15 text-blue-400 text-base">🇫🇷 {word.fr}</span>
            </div>
          )}
          <div className="bg-gray-800 rounded-xl p-4">
            <p className="text-white font-medium text-sm leading-relaxed">{word.definition}</p>
          </div>
          <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-3">
            <span className="text-xs text-primary-400 font-semibold uppercase tracking-wide">Example</span>
            <p className="text-gray-300 text-sm mt-1 italic">"{word.example}"</p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); speak(word.example) }}
            className="text-gray-500 hover:text-primary-400 transition-colors flex items-center justify-center gap-1.5 text-xs"
          >
            <Volume2 size={12} /> Hear example
          </button>
        </div>
      </div>
    </div>
  )
}

function ProgressDots({ total, current, mastered }) {
  return (
    <div className="flex gap-1 justify-center flex-wrap max-w-sm mx-auto">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={clsx(
            'w-2 h-2 rounded-full transition-all',
            i < current
              ? (mastered[i] ? 'bg-green-400' : 'bg-red-400')
              : i === current ? 'bg-primary-400 scale-125' : 'bg-gray-700'
          )}
        />
      ))}
    </div>
  )
}

export default function FlashcardDeck() {
  const { categoryId } = useParams()
  const navigate = useNavigate()
  const { learnVocab, masterVocab, addXP, addStudyTime } = useApp()

  const category = vocabularyCourses.find(c => c.id === categoryId)
  const allWords = vocabularyData[categoryId] || []

  const [deck, setDeck] = useState(() => [...allWords].sort(() => Math.random() - 0.5))
  const [current, setCurrent] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [masteredMap, setMasteredMap] = useState({})
  const [learningQueue, setLearningQueue] = useState([])
  const [done, setDone] = useState(false)
  const [stats, setStats] = useState({ known: 0, learning: 0 })
  const [startTime] = useState(Date.now())

  useEffect(() => {
    if (deck[current]) {
      learnVocab(`${categoryId}-${deck[current].word}`)
    }
  }, [current])

  function handleFlip() {
    setFlipped(f => !f)
  }

  function handleKnow() {
    const wordKey = `${categoryId}-${deck[current].word}`
    masterVocab(wordKey)
    addXP(5)
    setMasteredMap(m => ({ ...m, [current]: true }))
    setStats(s => ({ ...s, known: s.known + 1 }))
    advance()
  }

  function handleLearning() {
    const w = deck[current]
    setLearningQueue(q => [...q, w])
    setMasteredMap(m => ({ ...m, [current]: false }))
    setStats(s => ({ ...s, learning: s.learning + 1 }))
    advance()
  }

  function advance() {
    setFlipped(false)
    if (current < deck.length - 1) {
      setCurrent(c => c + 1)
    } else if (learningQueue.length > 0) {
      // Restart with learning queue
      setDeck([...learningQueue])
      setCurrent(0)
      setLearningQueue([])
      setMasteredMap({})
    } else {
      const mins = Math.round((Date.now() - startTime) / 60000)
      addStudyTime(Math.max(mins, 5))
      setDone(true)
    }
  }

  function restart() {
    setDeck([...allWords].sort(() => Math.random() - 0.5))
    setCurrent(0)
    setFlipped(false)
    setMasteredMap({})
    setLearningQueue([])
    setDone(false)
    setStats({ known: 0, learning: 0 })
  }

  if (!category || !allWords.length) {
    return (
      <div className="text-center py-20">
        <div className="text-4xl mb-3">📚</div>
        <h2 className="text-xl font-bold text-white mb-2">Category not found</h2>
        <button onClick={() => navigate('/vocabulary')} className="btn-primary">Back to Vocabulary</button>
      </div>
    )
  }

  if (done) {
    const totalKnown = Object.values(masteredMap).filter(Boolean).length + stats.known
    const pct = Math.round((stats.known / (stats.known + stats.learning || 1)) * 100)
    return (
      <div className="max-w-md mx-auto">
        <div className="card p-8 text-center space-y-5 animate-bounce-in">
          <div className="text-5xl">{pct >= 80 ? '🏆' : pct >= 60 ? '⭐' : '📚'}</div>
          <h2 className="text-2xl font-bold text-white">Deck Complete!</h2>
          <p className="text-gray-400">{category.title}</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
              <div className="text-2xl font-bold text-green-400">{stats.known}</div>
              <div className="text-xs text-gray-400">Mastered</div>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
              <div className="text-2xl font-bold text-orange-400">{stats.learning}</div>
              <div className="text-xs text-gray-400">Still Learning</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 text-primary-400">
            <Zap size={16} /> +{stats.known * 5} XP earned
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={restart} className="btn-secondary flex items-center justify-center gap-2">
              <RotateCcw size={15} /> Restart
            </button>
            <button onClick={() => navigate('/vocabulary')} className="btn-primary">
              All Categories
            </button>
          </div>
        </div>
      </div>
    )
  }

  const word = deck[current]

  return (
    <div className="max-w-md mx-auto space-y-5">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/vocabulary')} className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm">
          <ArrowLeft size={16} /> Vocabulary
        </button>
        <span className="text-gray-700">/</span>
        <span className="text-gray-400 text-sm truncate">{category.title}</span>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-white">{category.icon} {category.title}</h1>
          <p className="text-gray-400 text-xs">{current + 1} of {deck.length} cards</p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="flex items-center gap-1 text-green-400">✓ {stats.known}</span>
          <span className="flex items-center gap-1 text-orange-400">↻ {stats.learning}</span>
        </div>
      </div>

      {/* Progress dots */}
      <ProgressDots total={Math.min(deck.length, 20)} current={current} mastered={masteredMap} />

      {/* Flashcard */}
      <Flashcard word={word} isFlipped={flipped} onFlip={handleFlip} />

      {/* Action buttons */}
      {flipped ? (
        <div className="grid grid-cols-2 gap-3 animate-fade-in">
          <button
            onClick={handleLearning}
            className="flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-red-500/40 bg-red-500/10 text-red-300 font-semibold hover:bg-red-500/20 transition-all text-sm"
          >
            <XCircle size={18} /> Still Learning
          </button>
          <button
            onClick={handleKnow}
            className="flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-green-500/40 bg-green-500/10 text-green-300 font-semibold hover:bg-green-500/20 transition-all text-sm"
          >
            <CheckCircle size={18} /> Got it! +5 XP
          </button>
        </div>
      ) : (
        <button
          onClick={handleFlip}
          className="btn-primary w-full py-4 text-base"
        >
          Tap to Reveal →
        </button>
      )}

      {/* Learning queue indicator */}
      {learningQueue.length > 0 && (
        <p className="text-center text-xs text-gray-500">
          {learningQueue.length} word{learningQueue.length > 1 ? 's' : ''} in review queue
        </p>
      )}
    </div>
  )
}
