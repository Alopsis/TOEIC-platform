import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { grammarCourses, listeningCourses, readingCourses, vocabularyCourses } from '../../data/courses'
import { CheckCircle, Lock, ChevronRight, Clock, Zap } from 'lucide-react'
import clsx from 'clsx'

function CourseCard({ course, completed, onClick }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'card w-full text-left p-5 transition-all duration-200 cursor-pointer group',
        'hover:border-primary-500/40 hover:shadow-lg hover:shadow-primary-500/10',
        completed && 'border-green-500/20 bg-green-500/5'
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <div className={clsx(
            'w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0',
            'bg-gradient-to-br', course.color.replace('from-', 'from-').replace('to-', 'to-'), 'bg-opacity-20',
            'shadow-sm'
          )}
            style={{ background: 'rgba(79,70,229,0.12)' }}>
            {course.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-white group-hover:text-primary-300 transition-colors">{course.title}</h3>
              {completed && <CheckCircle size={16} className="text-green-400 flex-shrink-0" />}
            </div>
            <p className="text-gray-400 text-sm mt-0.5 leading-relaxed">{course.subtitle}</p>
            <div className="flex items-center gap-3 mt-2 flex-wrap">
              <span className={clsx(
                'badge',
                course.level === 'Essential' ? 'bg-green-500/15 text-green-400' :
                course.level === 'Intermediate' ? 'bg-yellow-500/15 text-yellow-400' :
                'bg-red-500/15 text-red-400'
              )}>
                {course.level}
              </span>
              {course.duration && (
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock size={12} /> {course.duration}
                </span>
              )}
              {course.xpReward && (
                <span className="flex items-center gap-1 text-xs text-primary-400">
                  <Zap size={12} /> +{course.xpReward} XP
                </span>
              )}
              {course.count && (
                <span className="text-xs text-gray-500">{course.count} words</span>
              )}
            </div>
          </div>
        </div>
        <ChevronRight size={18} className="text-gray-600 group-hover:text-primary-400 transition-colors flex-shrink-0 mt-1" />
      </div>
    </button>
  )
}

function Section({ title, icon, courses, completedLessons, onCourseClick }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">{icon}</span>
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <span className="text-gray-500 text-sm">({courses.length})</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {courses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            completed={completedLessons.includes(course.id)}
            onClick={() => onCourseClick(course.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default function CoursesHome() {
  const navigate = useNavigate()
  const { state } = useApp()
  const { completedLessons } = state.progress

  const totalCourses = grammarCourses.length + listeningCourses.length + readingCourses.length
  const completed = completedLessons.length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">Courses</h1>
        <p className="text-gray-400">Master every aspect of the TOEIC exam with structured lessons</p>
      </div>

      {/* Progress overview */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-sm text-gray-400">Overall Progress</div>
            <div className="text-2xl font-bold text-white">{completed} / {totalCourses} courses</div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-gradient">{Math.round((completed / totalCourses) * 100)}%</div>
            <div className="text-xs text-gray-500">Complete</div>
          </div>
        </div>
        <div className="progress-bar h-3">
          <div className="progress-fill xp-bar" style={{ width: `${(completed / totalCourses) * 100}%` }} />
        </div>
      </div>

      {/* Course sections */}
      <Section
        title="Grammar"
        icon="📐"
        courses={grammarCourses}
        completedLessons={completedLessons}
        onCourseClick={(id) => navigate(`/courses/${id}`)}
      />
      <Section
        title="Listening (Parts 1–4)"
        icon="🎧"
        courses={listeningCourses}
        completedLessons={completedLessons}
        onCourseClick={(id) => navigate(`/courses/${id}`)}
      />
      <Section
        title="Reading (Parts 5–7)"
        icon="📖"
        courses={readingCourses}
        completedLessons={completedLessons}
        onCourseClick={(id) => navigate(`/courses/${id}`)}
      />
    </div>
  )
}
