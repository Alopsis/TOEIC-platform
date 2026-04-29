# TOEIC Master

**A modern, gamified web application for TOEIC Listening & Reading preparation.**

TOEIC Master turns test preparation into an engaging learning experience — with adaptive AI, gamification, and a clean dark UI designed for daily practice.

---

## Overview

TOEIC Master covers all key areas of the TOEIC L&R test through structured courses, interactive exercises, and timed practice tests. An adaptive engine analyses your weak areas in real time and recommends personalized content so every study session is targeted and efficient.

---

## Features

### Courses
- Grammar lessons covering Verb Tenses, Modals, Passive Voice, Conditionals, Articles, Prepositions, Relative Pronouns, and Comparatives
- Structured lesson content with rules, TOEIC tips, and practice examples
- Progress tracking per course and lesson

### Exercises
- **Grammar Drills** — 110+ randomized Part 5 MCQ questions, 10 new questions each session
- **Reading Comprehension** — 8 authentic-style passages (emails, articles, letters, notices, ads) — 3 randomly selected per session
- **Listening Practice** — Audio-only mode using Web Speech API; question text is hidden during playback to simulate real TOEIC conditions. Covers Part 2 (Question-Response), Part 3 (Conversations), and Part 4 (Monologues)

### Vocabulary
- 300+ business words across 9 categories (finance, HR, logistics, travel, technology, and more)
- Anki-style flashcard system with a 3D flip animation
- Progress tracking: words seen, words mastered, spaced-repetition queue

### Practice Tests
- Mini tests and section-level listening tests with countdown timer
- Auto-scoring with estimated TOEIC score calculation
- Result history and performance tracking

### Adaptive AI
- Detects grammar error patterns by category
- Generates a personalized daily study plan based on your score gap
- Recommends targeted courses and exercises based on your weakest areas

### Gamification
- XP system with 8 levels (Beginner → Master)
- 25 unlockable badges across 8 categories
- Daily missions with dynamic goals
- Streak tracking to maintain study momentum

### Statistics
- Score history chart
- Daily activity bar chart (14-day view)
- Part accuracy radar chart (Parts 1–7)
- Grammar weak area breakdown

---

## Screenshots

> *(Coming soon)*

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Routing | React Router 6 |
| Styling | Tailwind CSS 3 |
| Build tool | Vite 5 |
| Charts | Recharts |
| Icons | Lucide React |
| Audio | Web Speech API (TTS) |
| Persistence | localStorage |

No backend required — fully client-side.

---

## Getting Started

### Prerequisites
- Node.js ≥ 18
- npm

### Installation

```bash
git clone https://github.com/Alopsis/TOEIC-platform
cd TOEIC-platform
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

Output is in the `dist/` folder — deploy it to any static hosting (Vercel, Netlify, GitHub Pages, etc.).

---

## Target Audience

Students and professionals preparing for the TOEIC Listening & Reading test, particularly those targeting scores of 750, 850, 900, or 990.

---

## License

MIT
