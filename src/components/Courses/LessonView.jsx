import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { grammarCourses, listeningCourses, readingCourses } from '../../data/courses'
import { ArrowLeft, ArrowRight, CheckCircle, Zap, BookOpen } from 'lucide-react'
import clsx from 'clsx'

const allCourses = [...grammarCourses, ...listeningCourses, ...readingCourses]

function ContentBlock({ block }) {
  if (block.type === 'rule') return (
    <div className="bg-primary-500/10 border border-primary-500/20 rounded-xl p-4 space-y-2">
      <h3 className="font-bold text-primary-300 text-sm uppercase tracking-wide">{block.title}</h3>
      <pre className="text-gray-200 font-sans whitespace-pre-wrap leading-relaxed text-sm">{block.text}</pre>
    </div>
  )

  if (block.type === 'usage') return (
    <div className="space-y-2">
      <h3 className="font-semibold text-white">{block.title}</h3>
      <ul className="space-y-2">
        {block.points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
            <span className="text-primary-400 mt-0.5 flex-shrink-0">→</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  if (block.type === 'toeic-tip') return (
    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 space-y-1">
      <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm">
        <span>💡</span> {block.title}
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{block.text}</p>
    </div>
  )

  if (block.type === 'table') return (
    <div className="space-y-2">
      <h3 className="font-semibold text-white">{block.title}</h3>
      <div className="overflow-x-auto rounded-xl border border-gray-700">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-800">
              {block.headers.map((h, i) => (
                <th key={i} className="text-left p-3 text-gray-300 font-semibold border-b border-gray-700">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i} className={clsx('border-b border-gray-800', i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-850')}>
                {row.map((cell, j) => (
                  <td key={j} className={clsx('p-3 text-gray-300', j === 0 && 'font-medium text-white')}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  if (block.type === 'examples') return (
    <div className="space-y-3">
      <h3 className="font-semibold text-white">{block.title}</h3>
      {block.items.map((item, i) => (
        <ExampleQuestion key={i} item={item} />
      ))}
    </div>
  )

  return null
}

function ExampleQuestion({ item }) {
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)

  function choose(opt) {
    if (revealed) return
    setSelected(opt)
    setRevealed(true)
  }

  return (
    <div className="bg-gray-800/50 rounded-xl p-4 space-y-3">
      <p className="text-white font-medium">{item.en}</p>
      <div className="grid grid-cols-2 gap-2">
        {item.options.map(opt => (
          <button
            key={opt}
            onClick={() => choose(opt)}
            className={clsx(
              'p-2.5 rounded-lg text-sm font-medium text-left transition-all border',
              !revealed && 'border-gray-700 bg-gray-800 hover:border-primary-500 hover:bg-primary-500/10',
              revealed && opt === item.answer && 'border-green-500 bg-green-500/15 text-green-300',
              revealed && opt === selected && opt !== item.answer && 'border-red-500 bg-red-500/15 text-red-300',
              revealed && opt !== selected && opt !== item.answer && 'border-gray-700 bg-gray-800 opacity-40'
            )}
          >
            {opt}
          </button>
        ))}
      </div>
      {revealed && (
        <div className="text-sm text-green-400">
          ✅ Answer: <span className="font-bold">{item.answer}</span>
        </div>
      )}
    </div>
  )
}

export default function LessonView() {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const { completeLesson, addXP, addStudyTime } = useApp()

  const course = allCourses.find(c => c.id === courseId)
  const [lessonIndex, setLessonIndex] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [startTime] = useState(Date.now())

  useEffect(() => { window.scrollTo(0, 0) }, [lessonIndex])

  if (!course) {
    return (
      <div className="text-center py-20">
        <div className="text-4xl mb-3">🔍</div>
        <h2 className="text-xl font-bold text-white mb-2">Course not found</h2>
        <button onClick={() => navigate('/courses')} className="btn-primary">Back to Courses</button>
      </div>
    )
  }

  const lessons = course.lessons || []
  const currentLesson = lessons[lessonIndex]
  const isLast = lessonIndex === lessons.length - 1

  function handleComplete() {
    const mins = Math.round((Date.now() - startTime) / 60000)
    completeLesson(courseId)
    addXP(course.xpReward || 100)
    addStudyTime(Math.max(mins, 5))
    setCompleted(true)
  }

  if (!lessons.length) {
    return (
      <div className="space-y-6">
        <button onClick={() => navigate('/courses')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
          <ArrowLeft size={16} /> Back to Courses
        </button>
        <div className="card p-8 text-center">
          <div className="text-5xl mb-4">{course.icon}</div>
          <h1 className="text-2xl font-bold text-white mb-2">{course.title}</h1>
          <p className="text-gray-400 mb-6">{course.subtitle}</p>
          <div className="text-gray-500 text-sm">Lesson content coming soon!</div>
        </div>
      </div>
    )
  }

  if (completed) {
    return (
      <div className="space-y-6">
        <div className="card p-8 text-center space-y-6">
          <div className="text-6xl animate-bounce-in">🎉</div>
          <div>
            <h2 className="text-2xl font-bold text-white">Lesson Complete!</h2>
            <p className="text-gray-400 mt-1">{course.title}</p>
          </div>
          <div className="flex items-center justify-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-xl px-6 py-3 w-fit mx-auto">
            <Zap className="text-primary-400" size={20} />
            <span className="text-primary-300 font-bold text-xl">+{course.xpReward || 100} XP earned!</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => navigate('/courses')} className="btn-secondary">
              Back to Courses
            </button>
            <button onClick={() => navigate('/exercises/grammar')} className="btn-primary">
              Practice Now →
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Navigation header */}
      <div className="flex items-center gap-3">
        <button onClick={() => navigate('/courses')} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
          <ArrowLeft size={16} /> Courses
        </button>
        <span className="text-gray-700">/</span>
        <span className="text-gray-400 text-sm">{course.title}</span>
      </div>

      {/* Course header */}
      <div className="card p-5">
        <div className="flex items-start gap-4">
          <div className="text-4xl">{course.icon}</div>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-white">{course.title}</h1>
            <p className="text-gray-400 text-sm">{course.subtitle}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="flex items-center gap-1 text-xs text-primary-400">
                <Zap size={12} /> +{course.xpReward || 100} XP on completion
              </span>
            </div>
          </div>
        </div>

        {/* Lesson tabs */}
        {lessons.length > 1 && (
          <div className="flex gap-1 mt-4 overflow-x-auto no-scrollbar">
            {lessons.map((l, i) => (
              <button
                key={i}
                onClick={() => setLessonIndex(i)}
                className={clsx(
                  'px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all',
                  i === lessonIndex
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                )}
              >
                {l.title}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lesson content */}
      <div className="card p-6 space-y-6">
        <div className="flex items-center gap-2 pb-4 border-b border-gray-800">
          <BookOpen size={18} className="text-primary-400" />
          <h2 className="font-bold text-white text-lg">{currentLesson.title}</h2>
        </div>

        {currentLesson.content.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => setLessonIndex(i => Math.max(0, i - 1))}
          disabled={lessonIndex === 0}
          className={clsx('btn-secondary flex items-center gap-2', lessonIndex === 0 && 'opacity-50 cursor-not-allowed')}
        >
          <ArrowLeft size={16} /> Previous
        </button>

        {isLast ? (
          <button onClick={handleComplete} className="btn-primary flex items-center gap-2 flex-1 max-w-xs mx-auto justify-center">
            <CheckCircle size={18} /> Complete Lesson
          </button>
        ) : (
          <button onClick={() => setLessonIndex(i => i + 1)} className="btn-primary flex items-center gap-2">
            Next <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  )
}
