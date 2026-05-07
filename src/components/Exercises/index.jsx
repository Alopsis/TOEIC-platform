import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { ArrowRight, CheckCircle, Lock } from 'lucide-react'
import clsx from 'clsx'

const exerciseTypes = [
  {
    id: 'grammar',
    title: 'Grammar Drills',
    description: 'Part 5 & 6 style questions: tenses, modals, passive, articles, prepositions and more',
    icon: '✏️',
    color: 'from-blue-500 to-indigo-500',
    route: '/exercises/grammar',
    difficulty: 'All levels',
    count: '10 per session · 110 total',
    xp: '+30 XP',
    tags: ['Part 5', 'Part 6', 'Grammar'],
  },
  {
    id: 'reading',
    title: 'Reading Comprehension',
    description: 'Practice Part 7 with authentic business texts: emails, notices, articles and reports',
    icon: '📖',
    color: 'from-green-500 to-teal-500',
    route: '/exercises/reading',
    difficulty: 'Intermediate +',
    count: '3 per session · 8 total',
    xp: '+50 XP',
    tags: ['Part 7', 'Reading'],
  },
  {
    id: 'listening',
    title: 'Listening Practice',
    description: 'Parts 2, 3 & 4 practice with text-to-speech: Q-response, conversations and monologues',
    icon: '🎧',
    color: 'from-purple-500 to-violet-500',
    route: '/exercises/listening',
    difficulty: 'All levels',
    count: '36 questions',
    xp: '+40 XP',
    tags: ['Part 2', 'Part 3', 'Part 4', 'Listening'],
  },
  {
    id: 'prepositions',
    title: 'Verbs + Prepositions',
    description: 'Choisissez la bonne préposition : participate in, apply for, depend on... Indispensable pour le Part 5',
    icon: '🔗',
    color: 'from-teal-500 to-green-500',
    route: '/exercises/prepositions',
    difficulty: 'All levels',
    count: '10 per session · 25 total',
    xp: '+30 XP',
    tags: ['Part 5', 'Prépositions'],
  },
]

export default function ExercisesHome() {
  const navigate = useNavigate()
  const { state } = useApp()
  const { completedExercises } = state.progress
  const { exercisesCorrect, exercisesTotal } = state.stats

  const accuracy = exercisesTotal > 0 ? Math.round((exercisesCorrect / exercisesTotal) * 100) : 0

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">Exercises</h1>
        <p className="text-gray-400">Interactive practice for all TOEIC sections</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Total Done', value: completedExercises.length, icon: '✅' },
          { label: 'Correct', value: exercisesCorrect, icon: '🎯' },
          { label: 'Accuracy', value: `${accuracy}%`, icon: '📊' },
        ].map(s => (
          <div key={s.label} className="card p-4 text-center">
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-xl font-bold text-white">{s.value}</div>
            <div className="text-xs text-gray-400">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Exercise types */}
      <div className="space-y-4">
        {exerciseTypes.map(ex => (
          <button
            key={ex.id}
            onClick={() => navigate(ex.route)}
            className="card w-full text-left p-5 hover:border-primary-500/40 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-200 group"
          >
            <div className="flex items-start gap-4">
              <div className={clsx(
                'w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0',
                'bg-gradient-to-br', ex.color, 'bg-opacity-20'
              )} style={{ background: 'rgba(99,102,241,0.12)' }}>
                {ex.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-white text-base group-hover:text-primary-300 transition-colors">{ex.title}</h3>
                  <div className="flex items-center gap-1 text-xs text-primary-400 font-semibold bg-primary-500/10 px-2 py-1 rounded-lg flex-shrink-0">
                    {ex.xp}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">{ex.description}</p>
                <div className="flex items-center gap-3 mt-3 flex-wrap">
                  {ex.tags.map(tag => (
                    <span key={tag} className="badge bg-gray-800 text-gray-400 border border-gray-700">{tag}</span>
                  ))}
                  <span className="text-xs text-gray-500 ml-auto">{ex.count}</span>
                </div>
              </div>
              <ArrowRight size={18} className="text-gray-600 group-hover:text-primary-400 transition-colors flex-shrink-0 mt-1" />
            </div>
          </button>
        ))}
      </div>

      {/* Grammar weak areas */}
      {Object.keys(state.stats.grammarErrors).length > 0 && (
        <div className="card p-5">
          <h2 className="font-bold text-white mb-3 flex items-center gap-2">
            <span>⚠️</span> Your Weak Areas
          </h2>
          <div className="space-y-2">
            {Object.entries(state.stats.grammarErrors)
              .sort(([, a], [, b]) => b - a)
              .slice(0, 5)
              .map(([category, errors]) => (
                <div key={category} className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">{category}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: `${Math.min(errors * 20, 100)}%` }} />
                    </div>
                    <span className="text-xs text-red-400">{errors} errors</span>
                  </div>
                </div>
              ))}
          </div>
          <button onClick={() => navigate('/exercises/grammar')} className="btn-primary w-full mt-4 text-sm">
            Practice Weak Areas
          </button>
        </div>
      )}
    </div>
  )
}
