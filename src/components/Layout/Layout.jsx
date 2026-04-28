import { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import {
  LayoutDashboard, BookOpen, Dumbbell, BookMarked,
  ClipboardList, BarChart2, Trophy, User, Menu, X,
  Flame, Star, Zap
} from 'lucide-react'
import clsx from 'clsx'

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/courses', label: 'Courses', icon: BookOpen },
  { path: '/exercises', label: 'Exercises', icon: Dumbbell },
  { path: '/vocabulary', label: 'Vocabulary', icon: BookMarked },
  { path: '/tests', label: 'Tests', icon: ClipboardList },
  { path: '/stats', label: 'Statistics', icon: BarChart2 },
  { path: '/badges', label: 'Badges', icon: Trophy },
  { path: '/profile', label: 'Profile', icon: User },
]

function XPBar({ xp, level }) {
  const thresholds = [0, 200, 500, 1000, 2000, 3500, 6000, 10000]
  const current = thresholds[Math.min(level - 1, thresholds.length - 1)]
  const next = thresholds[Math.min(level, thresholds.length - 1)]
  const progress = next === current ? 100 : Math.round(((xp - current) / (next - current)) * 100)

  return (
    <div className="px-3 py-2">
      <div className="flex items-center justify-between text-xs mb-1">
        <span className="text-gray-400">Level {level}</span>
        <span className="text-primary-400 font-semibold">{xp.toLocaleString()} XP</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill xp-bar" style={{ width: `${Math.min(progress, 100)}%` }} />
      </div>
    </div>
  )
}

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { state } = useApp()
  const location = useLocation()

  const { xp, level, streak } = state.progress
  const { currentEstimate } = state.scores

  return (
    <div className="flex h-screen bg-gray-950 overflow-hidden">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={clsx(
        'fixed lg:relative inset-y-0 left-0 z-30 w-64 bg-gray-900 border-r border-gray-800 flex flex-col transition-transform duration-300 lg:translate-x-0',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        {/* Logo */}
        <div className="p-4 border-b border-gray-800 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setSidebarOpen(false)}>
            <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-violet-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
              T
            </div>
            <div>
              <div className="font-bold text-white text-base leading-none">TOEIC Master</div>
              <div className="text-[10px] text-primary-400 font-medium">Score {state.user.targetScore}+</div>
            </div>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Stats bar */}
        <div className="p-3 border-b border-gray-800 grid grid-cols-3 gap-2">
          <div className="bg-gray-800 rounded-lg p-2 text-center">
            <div className="flex items-center justify-center gap-1 text-orange-400">
              <Flame size={14} />
              <span className="font-bold text-sm">{streak}</span>
            </div>
            <div className="text-[10px] text-gray-500 mt-0.5">Streak</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-2 text-center">
            <div className="flex items-center justify-center gap-1 text-yellow-400">
              <Star size={14} />
              <span className="font-bold text-sm">{level}</span>
            </div>
            <div className="text-[10px] text-gray-500 mt-0.5">Level</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-2 text-center">
            <div className="text-primary-400 font-bold text-sm">{currentEstimate}</div>
            <div className="text-[10px] text-gray-500 mt-0.5">Score</div>
          </div>
        </div>

        {/* XP bar */}
        <XPBar xp={xp} level={level} />

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-2 no-scrollbar">
          {navItems.map(item => {
            const Icon = item.icon
            const active = location.pathname === item.path ||
              (item.path !== '/' && location.pathname.startsWith(item.path))
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={clsx(
                  'flex items-center gap-3 px-4 py-2.5 mx-2 rounded-xl transition-all duration-150 text-sm font-medium',
                  active
                    ? 'bg-primary-500/15 text-primary-400 border border-primary-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                )}
              >
                <Icon size={18} strokeWidth={active ? 2.5 : 1.5} />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* User profile */}
        <div className="p-4 border-t border-gray-800">
          <Link to="/profile" onClick={() => setSidebarOpen(false)} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              {(state.user.name?.[0] || 'L').toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-white truncate">{state.user.name || 'Learner'}</div>
              <div className="text-xs text-gray-400">Target: {state.user.targetScore}</div>
            </div>
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar (mobile) */}
        <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800">
          <button onClick={() => setSidebarOpen(true)} className="text-gray-400 hover:text-white">
            <Menu size={22} />
          </button>
          <div className="font-bold text-white">TOEIC Master</div>
          <div className="flex items-center gap-3 text-sm">
            <span className="flex items-center gap-1 text-orange-400">
              <Flame size={15} /> {streak}
            </span>
            <span className="flex items-center gap-1 text-yellow-400">
              <Zap size={15} /> {xp}
            </span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto p-4 lg:p-6 animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
