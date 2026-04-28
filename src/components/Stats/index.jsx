import { useApp } from '../../context/AppContext'
import { vocabularyData } from '../../data/vocabulary'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis } from 'recharts'
import { TrendingUp, Target, Clock, BookOpen, Zap, Award } from 'lucide-react'
import clsx from 'clsx'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-3 text-sm shadow-xl">
        <p className="text-gray-400 mb-1">{label}</p>
        {payload.map((entry, i) => (
          <p key={i} style={{ color: entry.color }} className="font-bold">
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    )
  }
  return null
}

function StatCard({ icon: Icon, title, value, sub, color }) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
          {sub && <p className="text-gray-500 text-xs mt-0.5">{sub}</p>}
        </div>
        <div className={clsx('w-10 h-10 rounded-xl flex items-center justify-center', color)}>
          <Icon size={20} className="text-white" />
        </div>
      </div>
    </div>
  )
}

export default function StatsPage() {
  const { state } = useApp()
  const { progress, scores, stats, user } = state

  const studyHours = (progress.studyTimeMinutes / 60).toFixed(1)
  const accuracy = stats.exercisesTotal > 0
    ? Math.round((stats.exercisesCorrect / stats.exercisesTotal) * 100)
    : 0

  // Score history chart data
  const scoreHistory = scores.history.length > 0
    ? scores.history.map((h, i) => ({
        date: new Date(h.date).toLocaleDateString('en', { month: 'short', day: 'numeric' }),
        score: h.score,
        target: user.targetScore,
      }))
    : [
        { date: 'Start', score: 350, target: user.targetScore },
        { date: 'Today', score: scores.currentEstimate, target: user.targetScore },
      ]

  // Daily activity data
  const activityData = Object.entries(stats.dailyActivity || {})
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-14)
    .map(([date, count]) => ({
      date: new Date(date).toLocaleDateString('en', { month: 'short', day: 'numeric' }),
      exercises: count,
    }))

  // Part accuracy data for radar chart
  const partNames = {
    1: 'P1\nPhotos',
    2: 'P2\nQ-Resp',
    3: 'P3\nConv.',
    4: 'P4\nTalks',
    5: 'P5\nIncomp.',
    6: 'P6\nText',
    7: 'P7\nReading',
  }
  const radarData = Object.entries(scores.partAccuracy || {})
    .filter(([, v]) => v > 0)
    .map(([part, acc]) => ({
      subject: `Part ${part}`,
      accuracy: acc,
      fullMark: 100,
    }))

  // Grammar errors
  const grammarErrors = Object.entries(stats.grammarErrors || {})
    .sort(([, a], [, b]) => b - a)
    .slice(0, 8)
    .map(([cat, errors]) => ({ category: cat, errors }))

  const vocabTotal = Object.values(vocabularyData).reduce((s, ws) => s + ws.length, 0)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">Statistics</h1>
        <p className="text-gray-400">Track your TOEIC preparation progress</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard icon={Target} title="Estimated Score" value={scores.currentEstimate} sub={`Goal: ${user.targetScore}`} color="bg-primary-600" />
        <StatCard icon={TrendingUp} title="Accuracy" value={`${accuracy}%`} sub={`${stats.exercisesCorrect}/${stats.exercisesTotal}`} color="bg-green-600" />
        <StatCard icon={Clock} title="Study Time" value={`${studyHours}h`} sub={`${progress.studyTimeMinutes} minutes total`} color="bg-cyan-600" />
        <StatCard icon={BookOpen} title="Vocab Learned" value={progress.vocabLearned.length} sub={`${vocabTotal} total words`} color="bg-violet-600" />
      </div>

      {/* Score history */}
      <div className="card p-5">
        <h2 className="font-bold text-white mb-4 flex items-center gap-2">
          <TrendingUp size={16} className="text-primary-400" /> Score Progress
        </h2>
        {scoreHistory.length >= 2 ? (
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={scoreHistory}>
              <defs>
                <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
              <XAxis dataKey="date" stroke="#6B7280" tick={{ fontSize: 12 }} />
              <YAxis domain={[300, 990]} stroke="#6B7280" tick={{ fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="score" stroke="#4f46e5" fill="url(#scoreGrad)" strokeWidth={2.5} name="Score" />
              <Line type="monotone" dataKey="target" stroke="#7c3aed" strokeDasharray="5 5" strokeWidth={1.5} dot={false} name="Target" />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="text-center py-12 text-gray-500">
            <div className="text-4xl mb-2">📈</div>
            <p className="text-sm">Complete practice tests to see your score history</p>
          </div>
        )}
      </div>

      {/* Two-column charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Daily activity */}
        <div className="card p-5">
          <h2 className="font-bold text-white mb-4">Daily Activity (2 weeks)</h2>
          {activityData.length > 0 ? (
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
                <XAxis dataKey="date" stroke="#6B7280" tick={{ fontSize: 10 }} />
                <YAxis stroke="#6B7280" tick={{ fontSize: 10 }} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="exercises" fill="#4f46e5" radius={[4, 4, 0, 0]} name="Exercises" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="text-center py-10 text-gray-500 text-sm">Start practicing to see activity</div>
          )}
        </div>

        {/* Part accuracy radar */}
        <div className="card p-5">
          <h2 className="font-bold text-white mb-4">Part Accuracy</h2>
          {radarData.length > 0 ? (
            <ResponsiveContainer width="100%" height={160}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#1F2937" />
                <PolarAngleAxis dataKey="subject" stroke="#6B7280" tick={{ fontSize: 11 }} />
                <Radar name="Accuracy" dataKey="accuracy" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          ) : (
            <div className="text-center py-10 text-gray-500 text-sm">Take tests to see part accuracy</div>
          )}
        </div>
      </div>

      {/* Grammar errors */}
      {grammarErrors.length > 0 && (
        <div className="card p-5">
          <h2 className="font-bold text-white mb-4">Grammar Weak Areas</h2>
          <div className="space-y-3">
            {grammarErrors.map(({ category, errors }) => {
              const max = grammarErrors[0].errors
              return (
                <div key={category}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-300">{category}</span>
                    <span className="text-red-400 font-medium">{errors} error{errors > 1 ? 's' : ''}</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill bg-gradient-to-r from-red-600 to-orange-500"
                      style={{ width: `${(errors / max) * 100}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Achievement summary */}
      <div className="card p-5">
        <h2 className="font-bold text-white mb-4 flex items-center gap-2">
          <Award size={16} className="text-yellow-400" /> Achievements Summary
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          {[
            { label: 'Lessons Done', value: progress.completedLessons.length, icon: '📖' },
            { label: 'Tests Taken', value: progress.completedTests.length, icon: '📋' },
            { label: 'Badges Earned', value: stats.earnedBadges.length, icon: '🏅' },
            { label: 'Day Streak', value: progress.streak, icon: '🔥' },
          ].map(item => (
            <div key={item.label} className="bg-gray-800 rounded-xl p-4">
              <div className="text-2xl mb-1">{item.icon}</div>
              <div className="text-xl font-bold text-white">{item.value}</div>
              <div className="text-xs text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
