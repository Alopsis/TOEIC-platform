import { useApp } from '../../context/AppContext'
import { badges } from '../../data/badges'
import { checkBadgeEarned } from '../../utils/adaptive'
import clsx from 'clsx'

const categoryLabels = {
  streak: 'Streak', xp: 'XP', lessons: 'Lessons',
  grammar: 'Grammar', vocabulary: 'Vocabulary',
  tests: 'Tests', time: 'Study Time', special: 'Special',
}

const categoryIcons = {
  streak: '🔥', xp: '⚡', lessons: '📚',
  grammar: '✏️', vocabulary: '🃏',
  tests: '📋', time: '⏱️', special: '✨',
}

function BadgeCard({ badge, earned, progress }) {
  return (
    <div className={clsx(
      'card p-4 flex flex-col items-center text-center gap-2 transition-all duration-200 relative',
      earned ? 'border-yellow-500/20 glow-warning' : 'opacity-50 grayscale',
    )}>
      {earned && (
        <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-[10px] text-white">
          ✓
        </div>
      )}
      <div className={clsx('text-4xl transition-all', earned ? '' : 'opacity-50')}>
        {badge.icon}
      </div>
      <div>
        <div className={clsx('font-semibold text-sm', earned ? 'text-white' : 'text-gray-500')}>
          {badge.name}
        </div>
        <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{badge.description}</div>
      </div>
      {badge.xp > 0 && (
        <div className="text-xs text-primary-400 font-medium">+{badge.xp} XP</div>
      )}
      {!earned && progress !== undefined && progress > 0 && (
        <div className="w-full">
          <div className="progress-bar h-1">
            <div className="progress-fill xp-bar" style={{ width: `${Math.min(progress, 100)}%` }} />
          </div>
          <div className="text-[10px] text-gray-600 mt-0.5">{Math.round(progress)}%</div>
        </div>
      )}
    </div>
  )
}

function getBadgeProgress(badge, state) {
  const { progress, stats, scores } = state
  const { requirement } = badge

  switch (requirement.type) {
    case 'streak': return (progress.streak / requirement.value) * 100
    case 'xp': return (progress.xp / requirement.value) * 100
    case 'lessons': return ((progress.completedLessons?.length || 0) / requirement.value) * 100
    case 'tests': return ((progress.completedTests?.length || 0) / requirement.value) * 100
    case 'vocab_learned': return ((progress.vocabLearned?.length || 0) / requirement.value) * 100
    case 'study_time': return ((progress.studyTimeMinutes || 0) / requirement.value) * 100
    case 'test_score': return (scores.currentEstimate / requirement.value) * 100
    default: return 0
  }
}

export default function BadgesPage() {
  const { state } = useApp()
  const { earnedBadges } = state.stats
  const categories = [...new Set(badges.map(b => b.category))]

  const earned = badges.filter(b => earnedBadges.includes(b.id)).length
  const total = badges.length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">Badges</h1>
        <p className="text-gray-400">Earn badges by reaching milestones in your TOEIC journey</p>
      </div>

      {/* Summary */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-sm text-gray-400">Badges Collected</div>
            <div className="text-3xl font-bold text-white">{earned} <span className="text-gray-500 text-xl">/ {total}</span></div>
          </div>
          <div className="text-5xl">🏅</div>
        </div>
        <div className="progress-bar h-3">
          <div className="progress-fill xp-bar" style={{ width: `${(earned / total) * 100}%` }} />
        </div>
        <div className="text-xs text-gray-500 mt-1.5 text-right">{Math.round((earned / total) * 100)}% complete</div>
      </div>

      {/* Badges by category */}
      {categories.map(cat => {
        const catBadges = badges.filter(b => b.category === cat)
        const catEarned = catBadges.filter(b => earnedBadges.includes(b.id)).length

        return (
          <div key={cat}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{categoryIcons[cat]}</span>
              <h2 className="font-bold text-white">{categoryLabels[cat]}</h2>
              <span className="text-gray-500 text-sm">({catEarned}/{catBadges.length})</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {catBadges.map(badge => (
                <BadgeCard
                  key={badge.id}
                  badge={badge}
                  earned={earnedBadges.includes(badge.id)}
                  progress={!earnedBadges.includes(badge.id) ? getBadgeProgress(badge, state) : undefined}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
