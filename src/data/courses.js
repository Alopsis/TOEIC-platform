export const grammarCourses = [
  {
    id: 'verb-tenses',
    title: 'Verb Tenses',
    subtitle: 'Master all English tenses for TOEIC',
    icon: '⏱️',
    color: 'from-blue-500 to-cyan-500',
    level: 'Essential',
    duration: '45 min',
    xpReward: 150,
    lessons: [
      {
        id: 'present-simple',
        title: 'Present Simple',
        content: [
          {
            type: 'rule',
            title: 'Formation',
            text: 'Subject + base verb (+ s/es for he/she/it)\n\nI work | She works | They work',
          },
          {
            type: 'usage',
            title: 'When to use it',
            points: [
              'Habitual actions: "The manager reviews reports every Monday."',
              'General truths: "The company exports goods worldwide."',
              'Scheduled events: "The flight departs at 9 AM."',
              'Instructions/procedures: "First, open the attachment."',
            ],
          },
          {
            type: 'toeic-tip',
            title: 'TOEIC Tip',
            text: 'In Part 5, watch for time expressions like "every day", "usually", "always", "never" — they signal Present Simple.',
          },
          {
            type: 'examples',
            title: 'TOEIC Examples',
            items: [
              { en: 'The accounting department _____ reports each quarter.', answer: 'submits', options: ['submit', 'submits', 'submitted', 'submitting'] },
              { en: 'Our company always _____ its suppliers on time.', answer: 'pays', options: ['pay', 'pays', 'paid', 'paying'] },
            ],
          },
        ],
      },
      {
        id: 'present-perfect',
        title: 'Present Perfect',
        content: [
          {
            type: 'rule',
            title: 'Formation',
            text: 'Subject + have/has + past participle\n\nI have completed | She has submitted | They have approved',
          },
          {
            type: 'usage',
            title: 'When to use it',
            points: [
              'Recent past with present relevance: "We have just launched the new product."',
              'Experience: "She has worked for three multinational companies."',
              'Unfinished time periods: "Sales have increased this year."',
              'With: just, already, yet, ever, never, recently, so far',
            ],
          },
          {
            type: 'toeic-tip',
            title: 'TOEIC Tip',
            text: 'Keywords: since, for, already, yet, just, recently, so far → Present Perfect. "The project has been delayed since March."',
          },
          {
            type: 'examples',
            title: 'TOEIC Examples',
            items: [
              { en: 'The board _____ the new proposal yet.', answer: 'has not approved', options: ['does not approve', 'has not approved', 'did not approve', 'will not approve'] },
            ],
          },
        ],
      },
      {
        id: 'past-simple',
        title: 'Past Simple',
        content: [
          {
            type: 'rule',
            title: 'Formation',
            text: 'Subject + verb-ed (regular) / irregular past\n\nWe launched | She went | They confirmed',
          },
          {
            type: 'usage',
            title: 'When to use it',
            points: [
              'Completed action at specific past time: "The CEO resigned last week."',
              'Sequence of past events: "She reviewed the contract and signed it."',
              'With: yesterday, last week/month/year, ago, in 2020',
            ],
          },
          {
            type: 'toeic-tip',
            title: 'TOEIC Tip',
            text: 'Common TOEIC trap: "ago" and specific dates always trigger Past Simple, not Present Perfect.',
          },
        ],
      },
    ],
  },
  {
    id: 'modals',
    title: 'Modal Verbs',
    subtitle: 'Can, could, should, must, might & more',
    icon: '🔧',
    color: 'from-violet-500 to-purple-500',
    level: 'Essential',
    duration: '35 min',
    xpReward: 120,
    lessons: [
      {
        id: 'modal-overview',
        title: 'Overview of Modals',
        content: [
          {
            type: 'table',
            title: 'Modal Verbs at a Glance',
            headers: ['Modal', 'Use', 'Example'],
            rows: [
              ['can / could', 'Ability / Possibility', '"Can you attend the meeting?"'],
              ['should / ought to', 'Advice / Recommendation', '"You should review the contract."'],
              ['must / have to', 'Obligation / Necessity', '"All staff must complete training."'],
              ['may / might', 'Possibility', '"The shipment might arrive tomorrow."'],
              ['will / would', 'Future / Conditional', '"Would you like to reschedule?"'],
              ['shall', 'Formal offer / suggestion', '"Shall we proceed with the order?"'],
            ],
          },
          {
            type: 'toeic-tip',
            title: 'TOEIC Tip',
            text: 'Modals are NEVER followed by "to" (except "ought to" and "have to"). Watch for "must to go" ❌ vs. "must go" ✅',
          },
        ],
      },
    ],
  },
  {
    id: 'passive-voice',
    title: 'Passive Voice',
    subtitle: 'When the action matters more than the actor',
    icon: '🔄',
    color: 'from-emerald-500 to-teal-500',
    level: 'Essential',
    duration: '30 min',
    xpReward: 120,
    lessons: [
      {
        id: 'passive-basics',
        title: 'Passive Voice Basics',
        content: [
          {
            type: 'rule',
            title: 'Formation',
            text: 'Subject + be (conjugated) + past participle\n\nActive:  "The manager approved the budget."\nPassive: "The budget was approved by the manager."',
          },
          {
            type: 'usage',
            title: 'Common Passive Tenses in TOEIC',
            points: [
              'Present: "Orders are processed within 24 hours."',
              'Past: "The contract was signed last Friday."',
              'Present Perfect: "The meeting has been rescheduled."',
              'Future: "The results will be announced next week."',
              'Modal: "All invoices must be submitted by month-end."',
            ],
          },
          {
            type: 'toeic-tip',
            title: 'TOEIC Tip',
            text: 'The passive is extremely common in business English and appears heavily in Part 5, 6 & 7. Look for "be + past participle" patterns.',
          },
        ],
      },
    ],
  },
  {
    id: 'conditionals',
    title: 'Conditionals',
    subtitle: 'If clauses: real & hypothetical situations',
    icon: '🔀',
    color: 'from-orange-500 to-amber-500',
    level: 'Intermediate',
    duration: '40 min',
    xpReward: 140,
    lessons: [
      {
        id: 'conditionals-overview',
        title: 'Four Types of Conditionals',
        content: [
          {
            type: 'table',
            title: 'Conditional Overview',
            headers: ['Type', 'If-clause', 'Main clause', 'Use'],
            rows: [
              ['Zero (0)', 'If + Present Simple', 'Present Simple', 'General truths'],
              ['First (1)', 'If + Present Simple', 'will + base verb', 'Real future'],
              ['Second (2)', 'If + Past Simple', 'would + base verb', 'Hypothetical'],
              ['Third (3)', 'If + Past Perfect', 'would have + past participle', 'Unreal past'],
            ],
          },
          {
            type: 'examples',
            title: 'Business Examples',
            items: [
              { en: 'If we _____ the deadline, we will lose the contract.', answer: 'miss', options: ['miss', 'missed', 'will miss', 'had missed'] },
              { en: 'If the budget _____ approved, we would hire more staff.', answer: 'were', options: ['is', 'were', 'has been', 'had been'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'articles',
    title: 'Articles',
    subtitle: 'A, An, The – mastering the most confusing words',
    icon: '📰',
    color: 'from-pink-500 to-rose-500',
    level: 'Essential',
    duration: '25 min',
    xpReward: 100,
    lessons: [
      {
        id: 'articles-rules',
        title: 'Rules for A, An, The',
        content: [
          {
            type: 'rule',
            title: 'A vs. An',
            text: '"A" before consonant sounds: a meeting, a user, a European office\n"An" before vowel sounds: an interview, an hour, an MBA',
          },
          {
            type: 'usage',
            title: '"The" – Definite Article',
            points: [
              'Second mention: "We signed a contract. The contract expires in 2025."',
              'Unique things: "the CEO", "the headquarters"',
              'Superlatives: "the best solution", "the most profitable quarter"',
              'Specific items known to both parties: "Please review the attached report."',
            ],
          },
          {
            type: 'usage',
            title: 'No Article (Zero Article)',
            points: [
              'Plural/uncountable nouns in general: "Employees value flexibility."',
              'Company names: "Microsoft launched a new product."',
              'Abstract nouns: "Success requires dedication."',
              'Meals, languages, subjects: "We spoke French at the meeting."',
            ],
          },
          {
            type: 'toeic-tip',
            title: 'TOEIC Tip',
            text: 'Articles account for ~15% of Part 5 questions. The most common trap: using "a" before a vowel sound or "the" when no article is needed.',
          },
        ],
      },
    ],
  },
  {
    id: 'prepositions',
    title: 'Prepositions',
    subtitle: 'In, on, at, for, by, with and more',
    icon: '📍',
    color: 'from-indigo-500 to-blue-500',
    level: 'Intermediate',
    duration: '35 min',
    xpReward: 130,
    lessons: [
      {
        id: 'time-prepositions',
        title: 'Prepositions of Time',
        content: [
          {
            type: 'table',
            title: 'Time Prepositions',
            headers: ['Preposition', 'Use', 'Examples'],
            rows: [
              ['at', 'Specific time / clock', '"at 9 AM", "at noon", "at the end of the month"'],
              ['on', 'Days / dates', '"on Monday", "on July 15th", "on the deadline"'],
              ['in', 'Month / year / period', '"in March", "in 2024", "in the morning"'],
              ['by', 'Deadline (not later than)', '"Submit by Friday", "complete by Q3"'],
              ['until / till', 'Duration up to a point', '"valid until December 31st"'],
              ['within', 'Inside a time period', '"within 24 hours", "within the fiscal year"'],
              ['during', 'Throughout a period', '"during the conference", "during Q4"'],
            ],
          },
          {
            type: 'toeic-tip',
            title: 'TOEIC Tip',
            text: '"By" vs. "until": "I will finish BY Friday" (deadline) vs. "I will work UNTIL Friday" (duration). Critical distinction in Part 5!',
          },
        ],
      },
    ],
  },
  {
    id: 'relative-pronouns',
    title: 'Relative Pronouns',
    subtitle: 'Who, which, that, whose – connecting clauses',
    icon: '🔗',
    color: 'from-cyan-500 to-sky-500',
    level: 'Intermediate',
    duration: '30 min',
    xpReward: 120,
    lessons: [
      {
        id: 'relative-overview',
        title: 'Relative Pronoun Rules',
        content: [
          {
            type: 'table',
            title: 'Which Relative Pronoun to Use',
            headers: ['Pronoun', 'Refers to', 'Example'],
            rows: [
              ['who', 'People (subject)', '"The manager who called yesterday is available."'],
              ['whom', 'People (object)', '"The candidate whom we interviewed was excellent."'],
              ['which', 'Things / Animals', '"The report which was submitted is being reviewed."'],
              ['that', 'People or Things (defining)', '"The proposal that won the bid was outstanding."'],
              ['whose', 'Possession', '"The employee whose project succeeded was promoted."'],
              ['where', 'Places', '"The office where she works is downtown."'],
            ],
          },
          {
            type: 'toeic-tip',
            title: 'TOEIC Tip',
            text: 'Defining clauses (essential info) use "that" or "who/which". Non-defining clauses (extra info, with commas) CANNOT use "that" → use "who/which".',
          },
        ],
      },
    ],
  },
  {
    id: 'comparatives',
    title: 'Comparatives & Superlatives',
    subtitle: 'Better, best, more efficient, most productive',
    icon: '📊',
    color: 'from-yellow-500 to-orange-500',
    level: 'Essential',
    duration: '25 min',
    xpReward: 100,
    lessons: [
      {
        id: 'comparatives-rules',
        title: 'Formation Rules',
        content: [
          {
            type: 'table',
            title: 'Comparative & Superlative',
            headers: ['Adjective type', 'Comparative', 'Superlative'],
            rows: [
              ['Short (1 syllable)', 'add -er: fast → faster', 'add -est: fast → fastest'],
              ['Long (2+ syllables)', 'more + adj: efficient → more efficient', 'most + adj: → most efficient'],
              ['Irregular', 'good → better, bad → worse, far → further', 'good → best, bad → worst, far → furthest'],
            ],
          },
          {
            type: 'usage',
            title: 'Key Patterns',
            points: [
              '"A is faster than B" – use "than" with comparatives',
              '"A is the fastest of all" – use "the" with superlatives',
              '"twice as fast as" – equal/proportional comparisons',
              '"The more you practice, the better you get" – double comparative',
            ],
          },
        ],
      },
    ],
  },
]

export const listeningCourses = [
  {
    id: 'part1-strategy',
    title: 'Part 1: Photographs',
    subtitle: 'Describe what you see accurately',
    icon: '📸',
    color: 'from-purple-500 to-violet-500',
    level: 'Essential',
    duration: '20 min',
    xpReward: 80,
    lessons: [
      {
        id: 'part1-overview',
        title: 'Part 1 Strategy',
        content: [
          {
            type: 'usage',
            title: 'How Part 1 Works',
            points: [
              '6 questions total – you see a photo and hear 4 statements',
              'Choose the statement that BEST describes the photo',
              'Read the photo carefully BEFORE the audio starts',
              'Eliminate obviously wrong answers first',
            ],
          },
          {
            type: 'rule',
            title: 'Common Traps',
            text: '❌ Similar-sounding words: "He is cooking" vs. "He is looking"\n❌ Partial truths: one element is right but the overall description is wrong\n❌ Assumptions: don\'t assume things not shown in the photo\n❌ Similar scenes: the wrong answer describes a related but different scene',
          },
          {
            type: 'toeic-tip',
            title: 'Winning Strategy',
            text: 'Focus on: WHO is in the photo, WHAT they are doing, WHERE they are. Use present continuous for actions: "A man is talking on the phone."',
          },
        ],
      },
    ],
  },
  {
    id: 'part2-strategy',
    title: 'Part 2: Question-Response',
    subtitle: 'Choose the most appropriate response',
    icon: '💬',
    color: 'from-blue-500 to-indigo-500',
    level: 'Essential',
    duration: '25 min',
    xpReward: 100,
    lessons: [
      {
        id: 'part2-overview',
        title: 'Part 2 Strategy',
        content: [
          {
            type: 'usage',
            title: 'How Part 2 Works',
            points: [
              '25 questions – you hear a question and 3 possible responses',
              'Choose the most appropriate response',
              'No text on screen – pure listening!',
              'Focus on the FIRST word of the question: W-H words, How, Do/Does/Did, Will, etc.',
            ],
          },
          {
            type: 'table',
            title: 'Question Types & Expected Responses',
            headers: ['Question Type', 'Starts with', 'Response Type'],
            rows: [
              ['Who', 'Who...', 'A person/name'],
              ['What', 'What...', 'A thing/action'],
              ['When', 'When...', 'A time/date'],
              ['Where', 'Where...', 'A place'],
              ['Why', 'Why...', 'Because... / reason'],
              ['How', 'How...', 'Method/manner/amount'],
              ['Yes/No', 'Do/Does/Did/Will/Can...', 'Yes or No + explanation'],
            ],
          },
          {
            type: 'toeic-tip',
            title: 'Watch Out!',
            text: 'TOEIC loves indirect answers. "When is the meeting?" → "Check with Sarah" (not a time!). Always pick the most LOGICAL response, even if indirect.',
          },
        ],
      },
    ],
  },
  {
    id: 'part3-strategy',
    title: 'Part 3: Conversations',
    subtitle: 'Short conversations with 3 questions each',
    icon: '🎙️',
    color: 'from-green-500 to-emerald-500',
    level: 'Intermediate',
    duration: '30 min',
    xpReward: 120,
    lessons: [
      {
        id: 'part3-overview',
        title: 'Part 3 Strategy',
        content: [
          {
            type: 'usage',
            title: 'How Part 3 Works',
            points: [
              '39 questions (13 conversations × 3 questions each)',
              'Read the 3 questions BEFORE the conversation plays',
              'Questions often appear in conversation order',
              'Some conversations include graphic data (chart, schedule, etc.)',
            ],
          },
          {
            type: 'usage',
            title: 'Pre-listening Strategy',
            points: [
              'ALWAYS read questions & answer choices before audio starts',
              'Identify: Who are they? What is the topic? What problem exists?',
              'Underline key words in each question',
              'Note the location/context words in answer choices',
            ],
          },
          {
            type: 'toeic-tip',
            title: 'Frequent Question Types',
            text: '"What are the speakers discussing?" / "What does the woman mean?" / "What will the man do next?" → Listen for the FIRST and LAST sentences especially.',
          },
        ],
      },
    ],
  },
  {
    id: 'part4-strategy',
    title: 'Part 4: Talks',
    subtitle: 'Monologues: announcements, voicemails, news',
    icon: '📢',
    color: 'from-red-500 to-pink-500',
    level: 'Advanced',
    duration: '30 min',
    xpReward: 130,
    lessons: [
      {
        id: 'part4-overview',
        title: 'Part 4 Strategy',
        content: [
          {
            type: 'usage',
            title: 'How Part 4 Works',
            points: [
              '30 questions (10 talks × 3 questions each)',
              'Monologues: voicemail, announcement, advertisement, news report, tour guide',
              'First sentence almost always reveals the topic and purpose',
              'Apply the same pre-listening strategy as Part 3',
            ],
          },
          {
            type: 'usage',
            title: 'Common Talk Types',
            points: [
              'Voicemail message: caller, purpose, requested action',
              'Announcement: venue, event, instructions',
              'Advertisement: product/service, benefits, offer',
              'News report: event, location, impact',
              'Introduction: speaker being introduced, their background',
              'Tour guide: location, attractions, schedule',
            ],
          },
        ],
      },
    ],
  },
]

export const readingCourses = [
  {
    id: 'part5-strategy',
    title: 'Part 5: Incomplete Sentences',
    subtitle: 'Fill in the blank – grammar & vocabulary',
    icon: '✏️',
    color: 'from-cyan-500 to-blue-500',
    level: 'Essential',
    duration: '35 min',
    xpReward: 130,
    lessons: [
      {
        id: 'part5-overview',
        title: 'Part 5 Strategy',
        content: [
          {
            type: 'usage',
            title: 'How Part 5 Works',
            points: [
              '30 questions – one blank per sentence',
              'Test grammar OR vocabulary (about 50/50)',
              'Target: 20 seconds per question maximum',
              'Skip difficult ones and return at the end',
            ],
          },
          {
            type: 'rule',
            title: '4-Step Approach',
            text: '1. Read the full sentence first\n2. Look at the answer choices – are they same word form? (grammar) or different words? (vocabulary)\n3. Apply the rule / context to eliminate wrong answers\n4. Choose and move on – don\'t overthink!',
          },
          {
            type: 'toeic-tip',
            title: 'Word Form Questions',
            text: 'When options are: manage / manager / management / managing → identify the grammatical role. "The _____ of the team is crucial." → "management" (noun needed as subject).',
          },
        ],
      },
    ],
  },
  {
    id: 'part6-strategy',
    title: 'Part 6: Text Completion',
    subtitle: 'Emails, memos, letters with 4 blanks each',
    icon: '📄',
    color: 'from-violet-500 to-purple-500',
    level: 'Intermediate',
    duration: '30 min',
    xpReward: 120,
    lessons: [
      {
        id: 'part6-overview',
        title: 'Part 6 Strategy',
        content: [
          {
            type: 'usage',
            title: 'How Part 6 Works',
            points: [
              '16 questions (4 texts × 4 blanks each)',
              'One blank may require inserting a whole SENTENCE',
              'Context from the full text is essential',
              'Target: 8–10 minutes total for Part 6',
            ],
          },
          {
            type: 'usage',
            title: 'Strategy',
            points: [
              'Read the full text first to understand context',
              'Fill easy blanks first (grammar/vocabulary)',
              'Use context clues for sentence insertion questions',
              'The inserted sentence must connect logically to sentences before and after',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'part7-strategy',
    title: 'Part 7: Reading Comprehension',
    subtitle: 'Single and double passages',
    icon: '📖',
    color: 'from-green-500 to-teal-500',
    level: 'Advanced',
    duration: '45 min',
    xpReward: 150,
    lessons: [
      {
        id: 'part7-overview',
        title: 'Part 7 Strategy',
        content: [
          {
            type: 'usage',
            title: 'How Part 7 Works',
            points: [
              '54 questions: 29 single-passage + 10 double-passage + 15 triple-passage',
              'Text types: emails, letters, ads, notices, articles, reviews, forms',
              'Target: 55 minutes for the entire Part 7',
              'The most time-consuming section – efficiency is critical',
            ],
          },
          {
            type: 'rule',
            title: 'Scanning Strategy',
            text: '1. READ the questions first (not the answers!)\n2. SCAN the text for keywords from each question\n3. Read CAREFULLY only the relevant section\n4. For "NOT mentioned" questions: verify all 4 options',
          },
          {
            type: 'table',
            title: 'Common Question Types',
            headers: ['Type', 'Strategy'],
            rows: [
              ['Main purpose', 'Read the opening and closing sentences'],
              ['Detail/Fact', 'Scan for specific keywords from the question'],
              ['Inference', 'Find the implicit meaning from context'],
              ['Vocabulary in context', 'Read surrounding sentences for clues'],
              ['NOT true/mentioned', 'Verify each answer choice against the text'],
              ['Double-passage link', 'Find the connection between both texts'],
            ],
          },
        ],
      },
    ],
  },
]

export const vocabularyCourses = [
  { id: 'business-general', title: 'Business General', icon: '💼', color: 'from-blue-500 to-indigo-500', count: 40 },
  { id: 'meetings', title: 'Meetings & Presentations', icon: '🤝', color: 'from-green-500 to-teal-500', count: 35 },
  { id: 'finance', title: 'Finance & Accounting', icon: '💰', color: 'from-yellow-500 to-amber-500', count: 38 },
  { id: 'hr', title: 'HR & Recruitment', icon: '👥', color: 'from-purple-500 to-violet-500', count: 32 },
  { id: 'logistics', title: 'Logistics & Supply Chain', icon: '📦', color: 'from-orange-500 to-red-500', count: 30 },
  { id: 'emails', title: 'Emails & Correspondence', icon: '✉️', color: 'from-cyan-500 to-blue-500', count: 28 },
  { id: 'travel', title: 'Travel & Transportation', icon: '✈️', color: 'from-sky-500 to-indigo-500', count: 30 },
  { id: 'customer-service', title: 'Customer Service', icon: '🎯', color: 'from-pink-500 to-rose-500', count: 28 },
  { id: 'technology', title: 'Technology & IT', icon: '💻', color: 'from-violet-500 to-purple-500', count: 32 },
  { id: 'contracts', title: 'Contracts & Legal', icon: '⚖️', color: 'from-slate-500 to-gray-600', count: 25 },
]
