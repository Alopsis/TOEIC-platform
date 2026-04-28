import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { practiceTests } from '../../data/tests'
import { Clock, Zap, Trophy, ChevronRight, CheckCircle } from 'lucide-react'
import clsx from 'clsx'

const testTypes = {
  mini: { label: 'Mini Test', color: 'from-green-500 to-teal-500', icon: '⚡', desc: '10 Part 5 questions' },
  section: { label: 'Section Test', color: 'from-blue-500 to-indigo-500', icon: '📋', desc: 'Full section simulation' },
  full: { label: 'Full Test', color: 'from-purple-500 to-violet-500', icon: '🏆', desc: '200 questions, 2 hours' },
}

export default function TestsHome() {
  const navigate = useNavigate()
  const { state } = useApp()
  const { completedTests } = state.progress
  const { currentEstimate } = state.scores

  const testHistory = completedTests.slice(-5).reverse()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">Practice Tests</h1>
        <p className="text-gray-400">Simulate real TOEIC conditions and measure your progress</p>
      </div>

      {/* Current score */}
      <div className="card p-5 flex items-center gap-5">
        <div className="w-16 h-16 bg-primary-500/15 rounded-2xl flex items-center justify-center text-3xl">🎯</div>
        <div>
          <div className="text-sm text-gray-400">Current Estimated Score</div>
          <div className="text-3xl font-bold text-white">{currentEstimate}</div>
          <div className="text-sm text-gray-500">Target: {state.user.targetScore} (+{state.user.targetScore - currentEstimate} to go)</div>
        </div>
      </div>

      {/* Available tests */}
      <div className="space-y-3">
        <h2 className="font-bold text-white">Available Tests</h2>
        {practiceTests.map(test => {
          const type = testTypes[test.type] || testTypes.mini
          const taken = completedTests.filter(t => t.testId === test.id).length
          const bestScore = completedTests
            .filter(t => t.testId === test.id)
            .reduce((max, t) => Math.max(max, t.score || 0), 0)

          return (
            <button
              key={test.id}
              onClick={() => navigate(`/tests/${test.id}`)}
              className="card w-full text-left p-5 hover:border-primary-500/40 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-200 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{type.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-white group-hover:text-primary-300 transition-colors">{test.title}</h3>
                    <span className={clsx('badge text-white', `bg-gradient-to-r ${type.color}`)}>{type.label}</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-0.5">{test.subtitle}</p>
                  <div className="flex items-center gap-4 mt-2 flex-wrap">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock size={12} /> {test.duration} min
                    </span>
                    <span className="flex items-center gap-1 text-xs text-primary-400">
                      <Zap size={12} /> +{test.xpReward} XP
                    </span>
                    {taken > 0 && (
                      <span className="flex items-center gap-1 text-xs text-green-400">
                        <CheckCircle size={12} /> Taken {taken}x {bestScore > 0 && `• Best: ${bestScore}`}
                      </span>
                    )}
                  </div>
                </div>
                <ChevronRight size={18} className="text-gray-600 group-hover:text-primary-400 transition-colors flex-shrink-0" />
              </div>
            </button>
          )
        })}
      </div>

      {/* Full test coming soon */}
      <div className="card p-5 opacity-60 relative overflow-hidden">
        <div className="absolute top-3 right-3 badge bg-yellow-500/20 text-yellow-400 border border-yellow-500/20">Coming Soon</div>
        <div className="flex items-start gap-4">
          <div className="text-3xl">🏆</div>
          <div>
            <h3 className="font-bold text-white">Full TOEIC Simulation</h3>
            <p className="text-gray-400 text-sm">200 questions • 2 hours • Complete L&R simulation</p>
            <div className="flex items-center gap-1 text-xs text-primary-400 mt-2">
              <Zap size={12} /> +1000 XP
            </div>
          </div>
        </div>
      </div>

      {/* Test history */}
      {testHistory.length > 0 && (
        <div>
          <h2 className="font-bold text-white mb-3">Recent Results</h2>
          <div className="space-y-2">
            {testHistory.map((t, i) => {
              const test = practiceTests.find(pt => pt.id === t.testId)
              return (
                <div key={i} className="card p-4 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-white text-sm">{test?.title || t.testId}</div>
                    <div className="text-xs text-gray-500">{new Date(t.date).toLocaleDateString()}</div>
                  </div>
                  <div className="text-right">
                    <div className={clsx(
                      'text-lg font-bold',
                      (t.score || 0) >= 800 ? 'text-green-400' : (t.score || 0) >= 650 ? 'text-yellow-400' : 'text-gray-400'
                    )}>
                      {t.score || '–'}
                    </div>
                    <div className="text-xs text-gray-500">score</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Tips */}
      <div className="card p-5 space-y-3">
        <h2 className="font-bold text-white text-sm">TOEIC Test Tips</h2>
        <div className="space-y-2">
          {[
            ['⏱️', 'Part 5: Target 20 seconds per question'],
            ['📖', 'Part 7: Read questions BEFORE the passage'],
            ['🎧', 'Mark answers during audio – never wait until after'],
            ['🚀', 'Skip and return – never get stuck on one question'],
            ['✏️', 'Part 5 & 6: Identify the grammatical role first'],
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
