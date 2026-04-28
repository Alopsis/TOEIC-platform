import { grammarExercises } from '../data/exercises'

export function getWeakAreas(stats) {
  const { grammarErrors, vocabErrors, partAccuracy } = stats

  const weak = []

  // Analyze grammar error categories
  const grammarCategories = {}
  Object.entries(grammarErrors || {}).forEach(([category, count]) => {
    grammarCategories[category] = (grammarCategories[category] || 0) + count
  })

  const topGrammarErrors = Object.entries(grammarCategories)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)

  topGrammarErrors.forEach(([category, count]) => {
    if (count >= 2) {
      weak.push({ type: 'grammar', category, count, priority: 'high' })
    }
  })

  // Analyze TOEIC part accuracy
  const { partAccuracy: pa } = { partAccuracy: partAccuracy || {} }
  Object.entries(pa).forEach(([part, accuracy]) => {
    if (accuracy > 0 && accuracy < 70) {
      weak.push({ type: 'part', part: parseInt(part), accuracy, priority: accuracy < 50 ? 'high' : 'medium' })
    }
  })

  return weak
}

export function generateRecommendations(state) {
  const { progress, stats, scores } = state
  const recommendations = []
  const weak = getWeakAreas({ ...stats, partAccuracy: scores.partAccuracy })

  // Based on target score vs current
  const gap = state.user.targetScore - scores.currentEstimate
  if (gap > 200) {
    recommendations.push({
      type: 'course',
      priority: 'high',
      title: 'Foundation Building',
      message: 'Start with grammar essentials – they appear in every part of the TOEIC.',
      action: 'Go to Grammar Courses',
      route: '/courses',
      icon: '📚',
    })
  }

  // Based on weak areas
  weak.forEach(area => {
    if (area.type === 'grammar') {
      recommendations.push({
        type: 'exercise',
        priority: area.priority,
        title: `Weak spot: ${area.category}`,
        message: `You've made ${area.count} errors in ${area.category}. Let's practice!`,
        action: 'Practice Now',
        route: '/exercises',
        icon: '🎯',
      })
    }
    if (area.type === 'part') {
      const partNames = { 1: 'Photographs', 2: 'Question-Response', 3: 'Conversations', 4: 'Talks', 5: 'Incomplete Sentences', 6: 'Text Completion', 7: 'Reading Comprehension' }
      recommendations.push({
        type: 'course',
        priority: area.priority,
        title: `Improve Part ${area.part}: ${partNames[area.part]}`,
        message: `Your accuracy in Part ${area.part} is ${area.accuracy}%. Review the strategy guide.`,
        action: 'Learn Strategy',
        route: '/courses',
        icon: '📖',
      })
    }
  })

  // Vocabulary if not enough learned
  if ((progress.vocabLearned?.length || 0) < 50) {
    recommendations.push({
      type: 'vocabulary',
      priority: 'medium',
      title: 'Build Your Vocabulary',
      message: 'TOEIC vocabulary appears heavily in Parts 5–7. Aim for 100+ business words.',
      action: 'Start Flashcards',
      route: '/vocabulary',
      icon: '🃏',
    })
  }

  // Take a test if never done
  if ((progress.completedTests?.length || 0) === 0) {
    recommendations.push({
      type: 'test',
      priority: 'high',
      title: 'Take a Diagnostic Test',
      message: 'Find out your current level with a mini test to personalize your study plan.',
      action: 'Take Test',
      route: '/tests',
      icon: '📋',
    })
  }

  return recommendations.slice(0, 4)
}

export function generateDailyPlan(state) {
  const { progress, scores, user } = state
  const gap = user.targetScore - scores.currentEstimate
  const plan = []

  if (gap > 300) {
    plan.push({ activity: 'Grammar Lesson', duration: 15, type: 'lesson', icon: '📚' })
    plan.push({ activity: 'Grammar Drill (10 Q)', duration: 10, type: 'exercise', icon: '✏️' })
    plan.push({ activity: 'Vocabulary Flashcards (20)', duration: 10, type: 'vocab', icon: '🃏' })
  } else if (gap > 150) {
    plan.push({ activity: 'Grammar Drill (10 Q)', duration: 10, type: 'exercise', icon: '✏️' })
    plan.push({ activity: 'Reading Passage', duration: 15, type: 'reading', icon: '📖' })
    plan.push({ activity: 'Mini Test', duration: 12, type: 'test', icon: '📋' })
    plan.push({ activity: 'Vocabulary Review', duration: 8, type: 'vocab', icon: '🃏' })
  } else {
    plan.push({ activity: 'Part 5 & 6 Practice', duration: 15, type: 'exercise', icon: '✏️' })
    plan.push({ activity: 'Part 7 Reading', duration: 20, type: 'reading', icon: '📖' })
    plan.push({ activity: 'Mini Test', duration: 12, type: 'test', icon: '📋' })
  }

  return plan
}

export function estimateScore(stats, previousScore = 350) {
  const { exercisesCorrect, exercisesTotal, partAccuracy } = stats
  if (!exercisesTotal || exercisesTotal < 5) return previousScore

  const overallAccuracy = exercisesCorrect / exercisesTotal

  // Rough TOEIC score estimation based on accuracy
  let estimatedScore = previousScore
  if (overallAccuracy >= 0.95) estimatedScore = 950
  else if (overallAccuracy >= 0.90) estimatedScore = 900
  else if (overallAccuracy >= 0.85) estimatedScore = 850
  else if (overallAccuracy >= 0.80) estimatedScore = 800
  else if (overallAccuracy >= 0.75) estimatedScore = 750
  else if (overallAccuracy >= 0.70) estimatedScore = 700
  else if (overallAccuracy >= 0.65) estimatedScore = 650
  else if (overallAccuracy >= 0.60) estimatedScore = 600
  else if (overallAccuracy >= 0.50) estimatedScore = 500
  else estimatedScore = 400

  // Blend with previous score for smoother transitions
  return Math.round((estimatedScore * 0.4 + previousScore * 0.6) / 5) * 5
}

export function getLevelFromXP(xp) {
  if (xp < 200) return 1
  if (xp < 500) return 2
  if (xp < 1000) return 3
  if (xp < 2000) return 4
  if (xp < 3500) return 5
  if (xp < 6000) return 6
  if (xp < 10000) return 7
  return 8
}

export function getXPForLevel(level) {
  const thresholds = [0, 200, 500, 1000, 2000, 3500, 6000, 10000]
  return thresholds[Math.min(level - 1, thresholds.length - 1)]
}

export function getRecommendedExercises(weakAreas, count = 5) {
  if (!weakAreas.length) return grammarExercises.slice(0, count)

  const categories = weakAreas.filter(a => a.type === 'grammar').map(a => a.category)
  const relevant = grammarExercises.filter(e => categories.includes(e.category))
  const others = grammarExercises.filter(e => !categories.includes(e.category))

  return [...relevant, ...others].slice(0, count)
}

export function checkBadgeEarned(badge, state) {
  const { progress, stats, scores } = state
  const { requirement } = badge

  switch (requirement.type) {
    case 'streak': return progress.streak >= requirement.value
    case 'xp': return progress.xp >= requirement.value
    case 'lessons': return (progress.completedLessons?.length || 0) >= requirement.value
    case 'tests': return (progress.completedTests?.length || 0) >= requirement.value
    case 'vocab_learned': return (progress.vocabLearned?.length || 0) >= requirement.value
    case 'study_time': return (progress.studyTimeMinutes || 0) >= requirement.value
    case 'test_score': return scores.currentEstimate >= requirement.value
    case 'grammar_perfect':
      return (stats.grammarPerfect || 0) >= requirement.value
    default: return false
  }
}
