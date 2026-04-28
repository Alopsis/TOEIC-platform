import { useState } from 'react'
import { useApp } from '../context/AppContext'
import { Target, BookOpen, Clock, ArrowRight, CheckCircle } from 'lucide-react'
import clsx from 'clsx'

const TARGET_SCORES = [
  { score: 750, label: 'Good', description: 'Suitable for most professional positions', color: 'from-green-500 to-emerald-500', icon: '🥉' },
  { score: 850, label: 'Very Good', description: 'Required by many international companies', color: 'from-blue-500 to-indigo-500', icon: '🥈', recommended: true },
  { score: 900, label: 'Excellent', description: 'Top-tier professional English level', color: 'from-violet-500 to-purple-500', icon: '🥇' },
  { score: 990, label: 'Perfect', description: 'Native-level TOEIC mastery', color: 'from-yellow-400 to-amber-500', icon: '👑' },
]

const DAILY_GOALS = [
  { minutes: 10, label: '10 min', description: 'Light practice', icon: '🌱' },
  { minutes: 20, label: '20 min', description: 'Steady progress', icon: '🔥', recommended: true },
  { minutes: 30, label: '30 min', description: 'Fast improvement', icon: '⚡' },
  { minutes: 60, label: '1 hour', description: 'Maximum results', icon: '🚀' },
]

export default function Onboarding() {
  const { setUser, addXP } = useApp()
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [targetScore, setTargetScore] = useState(850)
  const [dailyGoal, setDailyGoal] = useState(20)

  const steps = ['Welcome', 'Your Name', 'Target Score', 'Daily Goal']

  function finish() {
    setUser({ name: name.trim() || 'Learner', targetScore, dailyGoalMinutes: dailyGoal })
    addXP(100)
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-lg animate-fade-in">
        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div
              key={i}
              className={clsx(
                'h-1.5 rounded-full transition-all duration-300',
                i === step ? 'w-8 bg-primary-500' : i < step ? 'w-4 bg-primary-500/60' : 'w-4 bg-gray-700'
              )}
            />
          ))}
        </div>

        {/* Step 0: Welcome */}
        {step === 0 && (
          <div className="card p-8 text-center space-y-6">
            <div className="text-6xl">🎯</div>
            <div>
              <h1 className="text-3xl font-bold text-gradient mb-2">TOEIC Master</h1>
              <p className="text-gray-400 text-lg">Your intelligent TOEIC preparation platform</p>
            </div>
            <div className="grid grid-cols-3 gap-4 py-4">
              {[
                { icon: '📚', label: 'Complete Courses' },
                { icon: '🎮', label: 'Gamified Learning' },
                { icon: '🤖', label: 'AI Adaptive' },
              ].map(f => (
                <div key={f.label} className="bg-gray-800 rounded-xl p-4">
                  <div className="text-3xl mb-2">{f.icon}</div>
                  <p className="text-xs text-gray-400 font-medium">{f.label}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              Join thousands of learners who improved their TOEIC score with structured, adaptive practice.
            </p>
            <button onClick={() => setStep(1)} className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4">
              Get Started <ArrowRight size={20} />
            </button>
          </div>
        )}

        {/* Step 1: Name */}
        {step === 1 && (
          <div className="card p-8 space-y-6">
            <div className="text-center">
              <div className="text-5xl mb-4">👋</div>
              <h2 className="text-2xl font-bold text-white mb-1">What's your name?</h2>
              <p className="text-gray-400">We'll personalize your experience</p>
            </div>
            <input
              type="text"
              placeholder="Enter your first name"
              value={name}
              onChange={e => setName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && setStep(2)}
              className="input-field text-center text-lg font-medium"
              autoFocus
            />
            <div className="flex gap-3">
              <button onClick={() => setStep(0)} className="btn-secondary flex-1">Back</button>
              <button onClick={() => setStep(2)} className="btn-primary flex-1 flex items-center justify-center gap-2">
                Continue <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Target Score */}
        {step === 2 && (
          <div className="card p-8 space-y-6">
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h2 className="text-2xl font-bold text-white mb-1">What's your target TOEIC score?</h2>
              <p className="text-gray-400">We'll build a personalized study plan</p>
            </div>
            <div className="space-y-3">
              {TARGET_SCORES.map(ts => (
                <button
                  key={ts.score}
                  onClick={() => setTargetScore(ts.score)}
                  className={clsx(
                    'w-full p-4 rounded-xl border-2 text-left transition-all duration-200',
                    targetScore === ts.score
                      ? 'border-primary-500 bg-primary-500/10'
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{ts.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-lg">{ts.score}</span>
                          <span className={clsx(
                            'badge text-white',
                            `bg-gradient-to-r ${ts.color}`
                          )}>{ts.label}</span>
                          {ts.recommended && <span className="badge bg-primary-500/20 text-primary-400 border border-primary-500/30">Recommended</span>}
                        </div>
                        <p className="text-gray-400 text-sm mt-0.5">{ts.description}</p>
                      </div>
                    </div>
                    {targetScore === ts.score && <CheckCircle className="text-primary-500" size={22} />}
                  </div>
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="btn-secondary flex-1">Back</button>
              <button onClick={() => setStep(3)} className="btn-primary flex-1 flex items-center justify-center gap-2">
                Continue <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Daily Goal */}
        {step === 3 && (
          <div className="card p-8 space-y-6">
            <div className="text-center">
              <div className="text-5xl mb-4">⏱️</div>
              <h2 className="text-2xl font-bold text-white mb-1">Daily study goal</h2>
              <p className="text-gray-400">Consistency is the key to a high score</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {DAILY_GOALS.map(goal => (
                <button
                  key={goal.minutes}
                  onClick={() => setDailyGoal(goal.minutes)}
                  className={clsx(
                    'p-4 rounded-xl border-2 text-center transition-all duration-200 relative',
                    dailyGoal === goal.minutes
                      ? 'border-primary-500 bg-primary-500/10'
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  )}
                >
                  {goal.recommended && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 badge bg-primary-500 text-white text-[10px]">
                      Recommended
                    </span>
                  )}
                  <div className="text-3xl mb-1">{goal.icon}</div>
                  <div className="font-bold text-white text-lg">{goal.label}</div>
                  <div className="text-gray-400 text-xs">{goal.description}</div>
                  {dailyGoal === goal.minutes && (
                    <CheckCircle className="text-primary-500 absolute top-2 right-2" size={16} />
                  )}
                </button>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 space-y-2">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Your Profile</h3>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Name:</span>
                <span className="text-white font-medium">{name || 'Learner'}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Target Score:</span>
                <span className="text-primary-400 font-bold">{targetScore}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">Daily Goal:</span>
                <span className="text-green-400 font-medium">{dailyGoal} minutes/day</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setStep(2)} className="btn-secondary flex-1">Back</button>
              <button onClick={finish} className="btn-primary flex-1 flex items-center justify-center gap-2 text-lg py-4">
                Start Learning! 🚀
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
