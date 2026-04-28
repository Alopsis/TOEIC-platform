import { useApp } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { generateRecommendations, generateDailyPlan, getWeakAreas } from '../../utils/adaptive'
import { badges } from '../../data/badges'
import {
  Flame, Zap, Clock, Target, TrendingUp, ArrowRight,
  CheckCircle, Circle, BookOpen, Dumbbell, BookMarked,
  ClipboardList, Star, Brain
} from 'lucide-react'
import clsx from 'clsx'

function ScoreRing({ score, target, size = 120 }) {
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const maxScore = 990
  const offset = circumference - (score / maxScore) * circumference

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 100 100" className="absolute">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#1F2937" strokeWidth="8" />
        <circle
          cx="50" cy="50" r={radius} fill="none"
          stroke="url(#scoreGrad)"
          strokeWidth="8" strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transform: 'rotate(-90deg)', transformOrigin: 'center', transition: 'stroke-dashoffset 1s ease-out' }}
        />
        <defs>
          <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
      <div className="text-center z-10">
        <div className="text-2xl font-bold text-white">{score}</div>
        <div className="text-xs text-gray-400">/ {target}</div>
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, sub, color = 'text-primary-400', bg = 'bg-primary-500/10' }) {
  return (
    <div className="card p-4">
      <div className={clsx('w-10 h-10 rounded-xl flex items-center justify-center mb-3', bg)}>
        <Icon size={20} className={color} />
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
      {sub && <div className="text-xs text-gray-600 mt-0.5">{sub}</div>}
    </div>
  )
}

function MissionItem({ mission }) {
  const pct = Math.min((mission.progress / mission.target) * 100, 100)
  return (
    <div className="flex items-center gap-3 py-2">
      <div className={clsx(
        'w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0',
        mission.completed ? 'bg-green-500/15' : 'bg-gray-800'
      )}>
        {mission.completed ? '✅' : mission.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className={clsx('text-sm font-medium', mission.completed ? 'text-green-400 line-through' : 'text-gray-200')}>
            {mission.title}
          </span>
          <span className="text-xs text-primary-400 font-bold">+{mission.xpReward} XP</span>
        </div>
        {!mission.completed && mission.target > 1 && (
          <div className="progress-bar h-1">
            <div className="progress-fill bg-primary-500" style={{ width: `${pct}%` }} />
          </div>
        )}
      </div>
    </div>
  )
}

function RecommendCard({ rec }) {
  const navigate = useNavigate()
  const priorityColors = {
    high: 'border-orange-500/30 bg-orange-500/5',
    medium: 'border-blue-500/30 bg-blue-500/5',
    low: 'border-gray-700',
  }
  return (
    <div className={clsx('p-4 rounded-xl border cursor-pointer hover:brightness-110 transition-all', priorityColors[rec.priority])}
      onClick={() => navigate(rec.route)}>
      <div className="flex items-start gap-3">
        <span className="text-2xl">{rec.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-white text-sm">{rec.title}</div>
          <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{rec.message}</p>
          <button className="mt-2 text-xs text-primary-400 font-semibold flex items-center gap-1 hover:gap-2 transition-all">
            {rec.action} <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const { state, getMissionStatus } = useApp()
  const navigate = useNavigate()
  const { progress, scores, stats, user } = state

  const studyHours = Math.floor(progress.studyTimeMinutes / 60)
  const studyMins = progress.studyTimeMinutes % 60
  const timeStr = studyHours > 0 ? `${studyHours}h ${studyMins}m` : `${studyMins}m`

  const missions = getMissionStatus()
  const completedMissions = missions.filter(m => m.completed).length

  const recommendations = generateRecommendations(state)
  const dailyPlan = generateDailyPlan(state)

  const recentBadges = badges.filter(b => stats.earnedBadges.includes(b.id)).slice(-3)

  const accuracyPct = stats.exercisesTotal > 0
    ? Math.round((stats.exercisesCorrect / stats.exercisesTotal) * 100)
    : 0

  const gapToTarget = user.targetScore - scores.currentEstimate
  const progressPct = Math.min(Math.round((scores.currentEstimate / user.targetScore) * 100), 100)

  return (
    <div className="space-y-6">
      {/* Welcome header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Hello, {user.name || 'Learner'} 👋
          </h1>
          <p className="text-gray-400 mt-0.5">
            {progress.streak > 0
              ? `You're on a ${progress.streak}-day streak! Keep it up!`
              : 'Start studying to build your streak!'}
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-xl px-4 py-2">
          <Flame className="text-orange-400" size={20} />
          <span className="text-orange-300 font-bold text-lg">{progress.streak}</span>
          <span className="text-orange-400/70 text-sm">day streak</span>
        </div>
      </div>

      {/* Main score + stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Score ring */}
        <div className="card p-5 sm:col-span-1 flex flex-col items-center justify-center gap-3">
          <ScoreRing score={scores.currentEstimate} target={user.targetScore} />
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-400">Estimated Score</div>
            <div className="text-xs text-gray-600 mt-0.5">Target: {user.targetScore}</div>
          </div>
          <div className="w-full">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Progress to target</span>
              <span>{progressPct}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill xp-bar" style={{ width: `${progressPct}%` }} />
            </div>
          </div>
        </div>

        <StatCard icon={Flame} label="Day Streak" value={progress.streak} sub="consecutive days" color="text-orange-400" bg="bg-orange-500/10" />
        <StatCard icon={Clock} label="Study Time" value={timeStr} sub="total studied" color="text-cyan-400" bg="bg-cyan-500/10" />
        <StatCard icon={Target} label="Accuracy" value={`${accuracyPct}%`} sub={`${stats.exercisesCorrect}/${stats.exercisesTotal} correct`} color="text-green-400" bg="bg-green-500/10" />
      </div>

      {/* Main grid: plan + missions + recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Plan */}
        <div className="card p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-white text-base">Today's Plan</h2>
            <span className="badge bg-primary-500/20 text-primary-400 border border-primary-500/20">AI Generated</span>
          </div>
          <div className="space-y-3">
            {dailyPlan.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/50">
                <span className="text-xl">{item.icon}</span>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">{item.activity}</div>
                  <div className="text-xs text-gray-500">{item.duration} min</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-xs text-gray-500 flex items-center gap-1">
            <Brain size={12} />
            Personalized based on your weak areas
          </div>
        </div>

        {/* Daily Missions */}
        <div className="card p-5 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-white text-base">Daily Missions</h2>
            <span className="text-sm text-gray-400">{completedMissions}/{missions.length}</span>
          </div>
          <div className="progress-bar mb-2">
            <div className="progress-fill bg-green-500" style={{ width: `${(completedMissions / missions.length) * 100}%` }} />
          </div>
          <div className="divide-y divide-gray-800">
            {missions.map(m => <MissionItem key={m.id} mission={m} />)}
          </div>
          {completedMissions === missions.length && (
            <div className="text-center py-2">
              <div className="text-2xl">🎉</div>
              <div className="text-green-400 font-semibold text-sm">All missions complete!</div>
              <div className="text-gray-500 text-xs">Come back tomorrow for new missions</div>
            </div>
          )}
        </div>

        {/* Recommendations */}
        <div className="card p-5 space-y-3">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-white text-base">AI Recommendations</h2>
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
          <div className="space-y-2">
            {recommendations.length > 0 ? (
              recommendations.map((rec, i) => <RecommendCard key={i} rec={rec} />)
            ) : (
              <div className="text-center py-8">
                <div className="text-3xl mb-2">✨</div>
                <p className="text-gray-400 text-sm">Complete more exercises to get personalized recommendations!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div>
        <h2 className="font-bold text-white text-base mb-4">Quick Start</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Grammar Drill', icon: '✏️', sub: '25 questions', route: '/exercises/grammar', color: 'hover:border-blue-500/50' },
            { label: 'Flashcards', icon: '🃏', sub: '200+ words', route: '/vocabulary', color: 'hover:border-purple-500/50' },
            { label: 'Mini Test', icon: '📋', sub: '10 min', route: '/tests', color: 'hover:border-green-500/50' },
            { label: 'Reading', icon: '📖', sub: 'Part 5–7 practice', route: '/exercises/reading', color: 'hover:border-orange-500/50' },
          ].map(item => (
            <button
              key={item.label}
              onClick={() => navigate(item.route)}
              className={clsx('card p-4 text-left cursor-pointer transition-all duration-200 border border-gray-800', item.color)}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="font-semibold text-white text-sm">{item.label}</div>
              <div className="text-xs text-gray-400 mt-0.5">{item.sub}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Badges */}
      {recentBadges.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-white text-base">Recent Badges</h2>
            <button onClick={() => navigate('/badges')} className="text-primary-400 text-sm hover:underline">
              View all →
            </button>
          </div>
          <div className="flex gap-3">
            {recentBadges.map(b => (
              <div key={b.id} className="card p-3 flex items-center gap-3 flex-1">
                <div className="text-3xl">{b.icon}</div>
                <div>
                  <div className="font-semibold text-white text-sm">{b.name}</div>
                  <div className="text-xs text-gray-400">{b.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
