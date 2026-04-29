import { Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider, useApp } from './context/AppContext'
import Layout from './components/Layout/Layout'
import Dashboard from './components/Dashboard'
import CoursesHome from './components/Courses'
import LessonView from './components/Courses/LessonView'
import ExercisesHome from './components/Exercises'
import GrammarDrill from './components/Exercises/GrammarDrill'
import ReadingExercise from './components/Exercises/ReadingExercise'
import ListeningExercise from './components/Exercises/ListeningExercise'
import VocabHome from './components/Vocabulary'
import FlashcardDeck from './components/Vocabulary/FlashcardDeck'
import TestsHome from './components/Tests'
import TestRunner from './components/Tests/TestRunner'
import StatsPage from './components/Stats'
import BadgesPage from './components/Gamification/Badges'
import ProfilePage from './components/Profile'
import Onboarding from './components/Onboarding'
import Rickroll from './components/Rickroll'

function AppRoutes() {
  const { state } = useApp()

  if (!state.user.setupComplete) {
    return <Onboarding />
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<CoursesHome />} />
        <Route path="/courses/:courseId" element={<LessonView />} />
        <Route path="/exercises" element={<ExercisesHome />} />
        <Route path="/exercises/grammar" element={<GrammarDrill />} />
        <Route path="/exercises/reading" element={<ReadingExercise />} />
        <Route path="/exercises/listening" element={<ListeningExercise />} />
        <Route path="/vocabulary" element={<VocabHome />} />
        <Route path="/vocabulary/:categoryId" element={<FlashcardDeck />} />
        <Route path="/tests" element={<TestsHome />} />
        <Route path="/tests/:testId" element={<TestRunner />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/badges" element={<BadgesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin" element={<Rickroll />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  )
}
