export const badges = [
  // Streak badges
  { id: 'streak-3', name: '3-Day Streak', icon: '🔥', description: 'Study 3 days in a row', category: 'streak', requirement: { type: 'streak', value: 3 }, xp: 50 },
  { id: 'streak-7', name: 'Week Warrior', icon: '⚡', description: 'Study 7 days in a row', category: 'streak', requirement: { type: 'streak', value: 7 }, xp: 150 },
  { id: 'streak-30', name: 'Iron Will', icon: '💎', description: 'Study 30 days in a row', category: 'streak', requirement: { type: 'streak', value: 30 }, xp: 500 },

  // XP badges
  { id: 'xp-100', name: 'First Steps', icon: '👶', description: 'Earn your first 100 XP', category: 'xp', requirement: { type: 'xp', value: 100 }, xp: 0 },
  { id: 'xp-500', name: 'Rising Star', icon: '⭐', description: 'Earn 500 XP total', category: 'xp', requirement: { type: 'xp', value: 500 }, xp: 0 },
  { id: 'xp-1000', name: 'Scholar', icon: '📚', description: 'Earn 1,000 XP total', category: 'xp', requirement: { type: 'xp', value: 1000 }, xp: 0 },
  { id: 'xp-5000', name: 'Expert', icon: '🎓', description: 'Earn 5,000 XP total', category: 'xp', requirement: { type: 'xp', value: 5000 }, xp: 0 },
  { id: 'xp-10000', name: 'Master', icon: '👑', description: 'Earn 10,000 XP total', category: 'xp', requirement: { type: 'xp', value: 10000 }, xp: 0 },

  // Lesson badges
  { id: 'lesson-1', name: 'First Lesson', icon: '📖', description: 'Complete your first lesson', category: 'lessons', requirement: { type: 'lessons', value: 1 }, xp: 25 },
  { id: 'lesson-10', name: 'Dedicated Learner', icon: '🏫', description: 'Complete 10 lessons', category: 'lessons', requirement: { type: 'lessons', value: 10 }, xp: 100 },
  { id: 'lesson-all', name: 'Complete Scholar', icon: '🏆', description: 'Complete all available lessons', category: 'lessons', requirement: { type: 'lessons', value: 50 }, xp: 500 },

  // Grammar badges
  { id: 'grammar-ace', name: 'Grammar Ace', icon: '✅', description: 'Score 90%+ on 5 grammar exercises', category: 'grammar', requirement: { type: 'grammar_score', value: 5 }, xp: 200 },
  { id: 'grammar-perfect', name: 'Grammar Perfectionist', icon: '💯', description: 'Get a perfect score on any grammar test', category: 'grammar', requirement: { type: 'grammar_perfect', value: 1 }, xp: 150 },

  // Vocabulary badges
  { id: 'vocab-25', name: 'Word Collector', icon: '📝', description: 'Learn 25 vocabulary words', category: 'vocabulary', requirement: { type: 'vocab_learned', value: 25 }, xp: 75 },
  { id: 'vocab-100', name: 'Lexicon Builder', icon: '📚', description: 'Learn 100 vocabulary words', category: 'vocabulary', requirement: { type: 'vocab_learned', value: 100 }, xp: 200 },
  { id: 'vocab-250', name: 'Vocabulary Master', icon: '🧠', description: 'Learn 250 vocabulary words', category: 'vocabulary', requirement: { type: 'vocab_learned', value: 250 }, xp: 500 },

  // Test badges
  { id: 'test-first', name: 'Test Taker', icon: '📋', description: 'Complete your first practice test', category: 'tests', requirement: { type: 'tests', value: 1 }, xp: 100 },
  { id: 'test-5', name: 'Exam Ready', icon: '🎯', description: 'Complete 5 practice tests', category: 'tests', requirement: { type: 'tests', value: 5 }, xp: 300 },
  { id: 'test-score-750', name: 'Target 750', icon: '🥉', description: 'Score 750+ on a full practice test', category: 'tests', requirement: { type: 'test_score', value: 750 }, xp: 400 },
  { id: 'test-score-850', name: 'Target 850', icon: '🥈', description: 'Score 850+ on a full practice test', category: 'tests', requirement: { type: 'test_score', value: 850 }, xp: 600 },
  { id: 'test-score-900', name: 'TOEIC Champion', icon: '🥇', description: 'Score 900+ on a full practice test', category: 'tests', requirement: { type: 'test_score', value: 900 }, xp: 1000 },

  // Study time badges
  { id: 'time-1h', name: 'First Hour', icon: '⏰', description: 'Study for 1 hour total', category: 'time', requirement: { type: 'study_time', value: 60 }, xp: 50 },
  { id: 'time-10h', name: 'Committed', icon: '🕐', description: 'Study for 10 hours total', category: 'time', requirement: { type: 'study_time', value: 600 }, xp: 200 },
  { id: 'time-50h', name: 'Unstoppable', icon: '🔄', description: 'Study for 50 hours total', category: 'time', requirement: { type: 'study_time', value: 3000 }, xp: 500 },

  // Special badges
  { id: 'perfect-week', name: 'Perfect Week', icon: '🌟', description: 'Complete all daily missions for 7 days', category: 'special', requirement: { type: 'perfect_week', value: 1 }, xp: 300 },
  { id: 'early-bird', name: 'Early Bird', icon: '🌅', description: 'Study before 8 AM 5 times', category: 'special', requirement: { type: 'early_study', value: 5 }, xp: 150 },
  { id: 'night-owl', name: 'Night Owl', icon: '🦉', description: 'Study after 10 PM 5 times', category: 'special', requirement: { type: 'night_study', value: 5 }, xp: 150 },
]

export const levels = [
  { level: 1, name: 'Beginner', minXP: 0, maxXP: 200, icon: '🌱', color: 'from-gray-500 to-gray-600' },
  { level: 2, name: 'Elementary', minXP: 200, maxXP: 500, icon: '📗', color: 'from-green-600 to-green-700' },
  { level: 3, name: 'Pre-Intermediate', minXP: 500, maxXP: 1000, icon: '📘', color: 'from-blue-500 to-blue-600' },
  { level: 4, name: 'Intermediate', minXP: 1000, maxXP: 2000, icon: '📙', color: 'from-yellow-500 to-yellow-600' },
  { level: 5, name: 'Upper-Intermediate', minXP: 2000, maxXP: 3500, icon: '🏅', color: 'from-orange-500 to-orange-600' },
  { level: 6, name: 'Advanced', minXP: 3500, maxXP: 6000, icon: '🎖️', color: 'from-red-500 to-red-600' },
  { level: 7, name: 'Expert', minXP: 6000, maxXP: 10000, icon: '💎', color: 'from-purple-500 to-violet-600' },
  { level: 8, name: 'Master', minXP: 10000, maxXP: Infinity, icon: '👑', color: 'from-yellow-400 to-amber-500' },
]

export const dailyMissions = [
  { id: 'daily-lesson', title: 'Complete a lesson', icon: '📖', xpReward: 50, type: 'lesson' },
  { id: 'daily-exercise', title: 'Finish 10 exercises', icon: '✏️', xpReward: 30, type: 'exercise', target: 10 },
  { id: 'daily-vocab', title: 'Review 15 flashcards', icon: '🃏', xpReward: 25, type: 'flashcard', target: 15 },
  { id: 'daily-test', title: 'Take a mini test', icon: '📋', xpReward: 100, type: 'test' },
  { id: 'daily-streak', title: 'Maintain your streak', icon: '🔥', xpReward: 20, type: 'streak' },
]
