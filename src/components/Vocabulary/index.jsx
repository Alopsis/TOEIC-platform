import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { vocabularyData } from '../../data/vocabulary'
import { vocabularyCourses } from '../../data/courses'
import { ChevronRight, CheckCircle, BookMarked } from 'lucide-react'
import clsx from 'clsx'

export default function VocabHome() {
  const navigate = useNavigate()
  const { state } = useApp()
  const { vocabLearned, vocabMastered } = state.progress

  const totalWords = Object.values(vocabularyData).reduce((sum, words) => sum + words.length, 0)
  const learnedCount = vocabLearned.length
  const masteredCount = vocabMastered.length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">Vocabulary</h1>
        <p className="text-gray-400">Anki-style flashcards for TOEIC business vocabulary</p>
      </div>

      {/* Overview */}
      <div className="card p-5">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-white">{totalWords}</div>
            <div className="text-xs text-gray-400 mt-0.5">Total Words</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary-400">{learnedCount}</div>
            <div className="text-xs text-gray-400 mt-0.5">Seen</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">{masteredCount}</div>
            <div className="text-xs text-gray-400 mt-0.5">Mastered</div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Overall mastery</span>
            <span>{totalWords > 0 ? Math.round((masteredCount / totalWords) * 100) : 0}%</span>
          </div>
          <div className="progress-bar h-3">
            <div className="progress-fill bg-green-500" style={{ width: `${(masteredCount / totalWords) * 100}%` }} />
          </div>
        </div>
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {vocabularyCourses.map(cat => {
          const words = vocabularyData[cat.id] || []
          const catLearned = words.filter(w => vocabLearned.includes(`${cat.id}-${w.word}`)).length
          const catMastered = words.filter(w => vocabMastered.includes(`${cat.id}-${w.word}`)).length
          const pct = words.length > 0 ? Math.round((catMastered / words.length) * 100) : 0

          return (
            <button
              key={cat.id}
              onClick={() => navigate(`/vocabulary/${cat.id}`)}
              className="card p-4 text-left hover:border-primary-500/40 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={clsx(
                  'w-10 h-10 rounded-xl flex items-center justify-center text-xl',
                  'bg-gradient-to-br', cat.color, 'bg-opacity-20'
                )} style={{ background: 'rgba(99,102,241,0.12)' }}>
                  {cat.icon}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-sm group-hover:text-primary-300 transition-colors">
                    {cat.title}
                  </div>
                  <div className="text-xs text-gray-500">
                    {catLearned}/{words.length} words seen • {catMastered} mastered
                  </div>
                </div>
                <ChevronRight size={16} className="text-gray-600 group-hover:text-primary-400 transition-colors" />
              </div>
              <div className="progress-bar h-1.5">
                <div
                  className="progress-fill bg-gradient-to-r from-primary-500 to-violet-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="text-right text-xs text-gray-500 mt-1">{pct}%</div>
            </button>
          )
        })}
      </div>

      {/* Study tips */}
      <div className="card p-5 space-y-3">
        <h2 className="font-bold text-white text-sm uppercase tracking-wide">How to Use Flashcards</h2>
        <div className="space-y-2">
          {[
            ['🃏', 'Tap the card to reveal the definition'],
            ['👍', '"Know it" → marks as mastered, moves to next'],
            ['👎', '"Still learning" → shows again later'],
            ['🔁', 'Review mastered words regularly to retain them'],
            ['🎯', 'Focus on business vocabulary that appears in Parts 5–7'],
          ].map(([icon, tip]) => (
            <div key={tip} className="flex items-center gap-2 text-sm text-gray-400">
              <span>{icon}</span> {tip}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
