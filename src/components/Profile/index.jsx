import { useState } from 'react'
import { useApp } from '../../context/AppContext'
import { levels } from '../../data/badges'
import { getLevelFromXP, getXPForLevel } from '../../utils/adaptive'
import { User, Target, Clock, Award, Settings, RotateCcw, ChevronRight } from 'lucide-react'
import clsx from 'clsx'

const TARGET_OPTIONS = [750, 850, 900, 990]

export default function ProfilePage() {
  const { state, setUser, updateSettings, dispatch } = useApp()
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(state.user.name)
  const [target, setTarget] = useState(state.user.targetScore)
  const [showReset, setShowReset] = useState(false)

  const { progress, scores, stats, settings, user } = state
  const currentLevel = getLevelFromXP(progress.xp)
  const levelInfo = levels.find(l => l.level === currentLevel) || levels[0]
  const nextLevel = levels.find(l => l.level === currentLevel + 1)
  const xpForCurrent = getXPForLevel(currentLevel)
  const xpForNext = nextLevel ? getXPForLevel(currentLevel + 1) : null
  const xpProgress = xpForNext
    ? Math.round(((progress.xp - xpForCurrent) / (xpForNext - xpForCurrent)) * 100)
    : 100

  function save() {
    setUser({ name: name.trim() || 'Learner', targetScore: target })
    setEditing(false)
  }

  function handleReset() {
    dispatch({ type: 'RESET' })
    setShowReset(false)
    window.location.reload()
  }

  const studyHours = (progress.studyTimeMinutes / 60).toFixed(1)
  const accuracy = stats.exercisesTotal > 0
    ? Math.round((stats.exercisesCorrect / stats.exercisesTotal) * 100)
    : 0

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">Profile</h1>
        <p className="text-gray-400">Your account and progress overview</p>
      </div>

      {/* Profile card */}
      <div className="card p-6 space-y-5">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-violet-500 rounded-2xl flex items-center justify-center text-3xl font-bold text-white shadow-lg">
            {(user.name?.[0] || 'L').toUpperCase()}
          </div>
          <div className="flex-1">
            <div className="text-xl font-bold text-white">{user.name || 'Learner'}</div>
            <div className={clsx('badge mt-1', `bg-gradient-to-r ${levelInfo.color}`, 'text-white')}>
              {levelInfo.icon} Level {currentLevel} – {levelInfo.name}
            </div>
          </div>
          <button onClick={() => setEditing(e => !e)} className="btn-ghost text-sm">
            {editing ? 'Cancel' : 'Edit'}
          </button>
        </div>

        {/* XP bar */}
        <div>
          <div className="flex justify-between text-xs text-gray-400 mb-1.5">
            <span>{progress.xp.toLocaleString()} XP</span>
            <span>{nextLevel ? `${getXPForLevel(currentLevel + 1).toLocaleString()} XP for Level ${currentLevel + 1}` : 'Max Level!'}</span>
          </div>
          <div className="progress-bar h-3">
            <div className="progress-fill xp-bar" style={{ width: `${xpProgress}%` }} />
          </div>
        </div>

        {/* Edit form */}
        {editing && (
          <div className="space-y-4 animate-fade-in border-t border-gray-800 pt-4">
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Display Name</label>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                className="input-field"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Target TOEIC Score</label>
              <div className="grid grid-cols-4 gap-2">
                {TARGET_OPTIONS.map(s => (
                  <button
                    key={s}
                    onClick={() => setTarget(s)}
                    className={clsx(
                      'py-2 rounded-xl border text-sm font-bold transition-all',
                      target === s
                        ? 'border-primary-500 bg-primary-500/20 text-primary-300'
                        : 'border-gray-700 text-gray-400 hover:border-gray-600'
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={save} className="btn-primary w-full">Save Changes</button>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          { label: 'Estimated Score', value: scores.currentEstimate, icon: '🎯', sub: `Target: ${user.targetScore}` },
          { label: 'Day Streak', value: `${progress.streak}🔥`, icon: '⚡', sub: 'consecutive days' },
          { label: 'Study Time', value: `${studyHours}h`, icon: '⏱️', sub: `${progress.studyTimeMinutes} min` },
          { label: 'Accuracy', value: `${accuracy}%`, icon: '✅', sub: `${stats.exercisesCorrect}/${stats.exercisesTotal}` },
          { label: 'Vocab Learned', value: progress.vocabLearned.length, icon: '📝', sub: 'words' },
          { label: 'Badges Earned', value: stats.earnedBadges.length, icon: '🏅', sub: 'achievements' },
        ].map(s => (
          <div key={s.label} className="card p-4 text-center">
            <div className="text-2xl mb-1">{s.icon}</div>
            <div className="text-xl font-bold text-white">{s.value}</div>
            <div className="text-xs text-gray-400">{s.label}</div>
            {s.sub && <div className="text-xs text-gray-600 mt-0.5">{s.sub}</div>}
          </div>
        ))}
      </div>

      {/* Settings */}
      <div className="card p-5 space-y-4">
        <h2 className="font-bold text-white flex items-center gap-2">
          <Settings size={16} /> Settings
        </h2>

        {/* Dark mode */}
        <div className="flex items-center justify-between py-2 border-b border-gray-800">
          <div>
            <div className="text-sm font-medium text-white">Dark Mode</div>
            <div className="text-xs text-gray-500">Toggle light/dark theme</div>
          </div>
          <button
            onClick={() => updateSettings({ darkMode: !settings.darkMode })}
            className={clsx(
              'w-12 h-6 rounded-full transition-all relative',
              settings.darkMode ? 'bg-primary-500' : 'bg-gray-700'
            )}
          >
            <div className={clsx(
              'w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all shadow-sm',
              settings.darkMode ? 'left-6' : 'left-0.5'
            )} />
          </button>
        </div>

        {/* Speech rate */}
        <div className="py-2 border-b border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-sm font-medium text-white">Speech Rate</div>
              <div className="text-xs text-gray-500">Speed for listening exercises</div>
            </div>
            <span className="text-primary-400 font-bold text-sm">{settings.speechRate}x</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="1.2"
            step="0.05"
            value={settings.speechRate}
            onChange={e => updateSettings({ speechRate: parseFloat(e.target.value) })}
            className="w-full accent-primary-500"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>0.5x (slow)</span>
            <span>1.0x (normal)</span>
            <span>1.2x (fast)</span>
          </div>
        </div>

        {/* Daily goal */}
        <div className="py-2">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-sm font-medium text-white">Daily Goal</div>
              <div className="text-xs text-gray-500">Minutes of study per day</div>
            </div>
            <span className="text-primary-400 font-bold text-sm">{settings.dailyGoalMinutes} min</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[10, 20, 30, 60].map(m => (
              <button
                key={m}
                onClick={() => updateSettings({ dailyGoalMinutes: m })}
                className={clsx(
                  'py-2 rounded-lg text-xs font-medium transition-all border',
                  settings.dailyGoalMinutes === m
                    ? 'border-primary-500 bg-primary-500/20 text-primary-300'
                    : 'border-gray-700 text-gray-400 hover:border-gray-600'
                )}
              >
                {m}m
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Danger zone */}
      <div className="card p-5 border-red-900/30">
        <h2 className="font-bold text-red-400 mb-3">Danger Zone</h2>
        {!showReset ? (
          <button
            onClick={() => setShowReset(true)}
            className="flex items-center gap-2 text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
          >
            <RotateCcw size={15} /> Reset all progress
          </button>
        ) : (
          <div className="space-y-3 animate-fade-in">
            <p className="text-sm text-gray-400">
              ⚠️ This will permanently delete all your progress, XP, streaks, and history. This cannot be undone.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setShowReset(false)} className="btn-secondary flex-1 text-sm py-2">Cancel</button>
              <button onClick={handleReset} className="flex-1 py-2 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 font-semibold text-sm hover:bg-red-500/30 transition-all">
                Confirm Reset
              </button>
            </div>
          </div>
        )}
      </div>

      {/* App info */}
      <div className="text-center text-xs text-gray-600 py-2">
        TOEIC Master v1.0 • Built for TOEIC Listening & Reading Preparation
      </div>
    </div>
  )
}
