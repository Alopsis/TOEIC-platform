export const grammarExercises = [
  // Verb Tenses
  {
    id: 'g1',
    type: 'mcq',
    category: 'Verb Tenses',
    difficulty: 1,
    question: 'The sales team _____ their monthly targets every quarter without exception.',
    options: ['meet', 'meets', 'met', 'has met'],
    answer: 'meets',
    explanation: 'Present Simple is used for habitual or recurring actions. "Every quarter" signals a routine. The subject "team" is singular → "meets".',
    toeicPart: 5,
  },
  {
    id: 'g2',
    type: 'mcq',
    category: 'Verb Tenses',
    difficulty: 1,
    question: 'The annual report _____ published last Friday on the company website.',
    options: ['is', 'was', 'has been', 'will be'],
    answer: 'was',
    explanation: '"Last Friday" indicates a specific past time → Past Simple. "Was published" is past passive.',
    toeicPart: 5,
  },
  {
    id: 'g3',
    type: 'mcq',
    category: 'Verb Tenses',
    difficulty: 2,
    question: 'By the time the director arrives, the team _____ the presentation.',
    options: ['will finish', 'finishes', 'will have finished', 'has finished'],
    answer: 'will have finished',
    explanation: '"By the time + simple present" signals Future Perfect. The action (finishing) will be completed before another future action (director arriving).',
    toeicPart: 5,
  },
  {
    id: 'g4',
    type: 'mcq',
    category: 'Verb Tenses',
    difficulty: 2,
    question: 'The company _____ its new product line since the beginning of last year.',
    options: ['developed', 'is developing', 'has been developing', 'had developed'],
    answer: 'has been developing',
    explanation: '"Since" + a past time reference → Present Perfect Continuous. The action started in the past and continues now.',
    toeicPart: 5,
  },
  {
    id: 'g5',
    type: 'mcq',
    category: 'Present Perfect',
    difficulty: 1,
    question: 'The board _____ yet to reach a decision on the merger.',
    options: ['failed', 'has failed', 'is failed', 'will fail'],
    answer: 'has failed',
    explanation: '"Yet" in the context of a current situation → Present Perfect. The board still has not made a decision.',
    toeicPart: 5,
  },
  // Passive Voice
  {
    id: 'g6',
    type: 'mcq',
    category: 'Passive Voice',
    difficulty: 1,
    question: 'All purchase orders must _____ by the department head.',
    options: ['approve', 'be approved', 'approved', 'approving'],
    answer: 'be approved',
    explanation: 'Modal + passive: "must be + past participle". The action is done TO the orders, not by them.',
    toeicPart: 5,
  },
  {
    id: 'g7',
    type: 'mcq',
    category: 'Passive Voice',
    difficulty: 2,
    question: 'The new software _____ by the IT department before being rolled out company-wide.',
    options: ['is testing', 'will test', 'is being tested', 'has tested'],
    answer: 'is being tested',
    explanation: 'Present Continuous Passive: "is being + past participle". The testing is happening now (currently in progress).',
    toeicPart: 5,
  },
  {
    id: 'g8',
    type: 'mcq',
    category: 'Passive Voice',
    difficulty: 2,
    question: 'The financial statements _____ audited before the shareholder meeting next month.',
    options: ['will be', 'are', 'have been', 'were'],
    answer: 'will be',
    explanation: '"Next month" indicates future → "will be audited" (future passive). The action will happen in the future.',
    toeicPart: 5,
  },
  // Modal Verbs
  {
    id: 'g9',
    type: 'mcq',
    category: 'Modal Verbs',
    difficulty: 1,
    question: 'Employees _____ submit their expense reports within two weeks of travel.',
    options: ['must to', 'should to', 'must', 'ought'],
    answer: 'must',
    explanation: 'Modals are NOT followed by "to" (except "ought to" and "have to"). "Must" expresses obligation.',
    toeicPart: 5,
  },
  {
    id: 'g10',
    type: 'mcq',
    category: 'Modal Verbs',
    difficulty: 2,
    question: 'If you are unsure about the policy, you _____ consult the HR handbook.',
    options: ['would', 'should', 'shall', 'could be'],
    answer: 'should',
    explanation: '"Should" expresses advice/recommendation. This is the most appropriate modal when advising someone.',
    toeicPart: 5,
  },
  // Articles
  {
    id: 'g11',
    type: 'mcq',
    category: 'Articles',
    difficulty: 1,
    question: '_____ CEO announced the restructuring plan at last week\'s meeting.',
    options: ['A', 'An', 'The', '(no article)'],
    answer: 'The',
    explanation: 'Use "the" for unique positions/people (there is only one CEO of a company). This refers to a specific known person.',
    toeicPart: 5,
  },
  {
    id: 'g12',
    type: 'mcq',
    category: 'Articles',
    difficulty: 2,
    question: 'We are looking for _____ experienced project manager to lead our new division.',
    options: ['a', 'an', 'the', '(no article)'],
    answer: 'an',
    explanation: '"An" before vowel sounds. "Experienced" starts with a vowel sound /ɪ/ → "an experienced".',
    toeicPart: 5,
  },
  {
    id: 'g13',
    type: 'mcq',
    category: 'Articles',
    difficulty: 2,
    question: '_____ customer satisfaction is our primary goal.',
    options: ['A', 'An', 'The', '(no article)'],
    answer: '(no article)',
    explanation: 'Abstract concepts and uncountable nouns used in a general sense take no article: "Customer satisfaction" as a general concept.',
    toeicPart: 5,
  },
  // Prepositions
  {
    id: 'g14',
    type: 'mcq',
    category: 'Prepositions',
    difficulty: 1,
    question: 'Please submit the quarterly report _____ Friday at the latest.',
    options: ['on', 'at', 'by', 'until'],
    answer: 'by',
    explanation: '"By" indicates a deadline (not later than). "On Friday" means ON that specific day. "By Friday" means any time up to and including Friday.',
    toeicPart: 5,
  },
  {
    id: 'g15',
    type: 'mcq',
    category: 'Prepositions',
    difficulty: 2,
    question: 'The new branch has been operating _____ difficulties since the management change.',
    options: ['with', 'under', 'from', 'at'],
    answer: 'under',
    explanation: '"Operating under difficulties" is the correct colocation. "Under" is used with conditions/circumstances like "under pressure", "under construction".',
    toeicPart: 5,
  },
  // Relative Pronouns
  {
    id: 'g16',
    type: 'mcq',
    category: 'Relative Pronouns',
    difficulty: 2,
    question: 'The employee _____ project won the innovation award received a bonus.',
    options: ['who', 'whom', 'whose', 'which'],
    answer: 'whose',
    explanation: '"Whose" shows possession: the project belongs to the employee. "Whose + noun" = possession relative clause.',
    toeicPart: 5,
  },
  {
    id: 'g17',
    type: 'mcq',
    category: 'Relative Pronouns',
    difficulty: 2,
    question: 'The proposal _____ was submitted last week has been accepted.',
    options: ['who', 'whose', 'which', 'whom'],
    answer: 'which',
    explanation: '"Which" refers to things (not people). "The proposal" is a thing → use "which" or "that".',
    toeicPart: 5,
  },
  // Conditionals
  {
    id: 'g18',
    type: 'mcq',
    category: 'Conditionals',
    difficulty: 2,
    question: 'If the shipment _____ tomorrow, we will not be able to meet the deadline.',
    options: ['will not arrive', 'does not arrive', 'did not arrive', 'had not arrived'],
    answer: 'does not arrive',
    explanation: 'First Conditional: "If + Present Simple, will + base verb". Real future condition. "If it does not arrive (tomorrow)" → present simple in the if-clause.',
    toeicPart: 5,
  },
  {
    id: 'g19',
    type: 'mcq',
    category: 'Conditionals',
    difficulty: 3,
    question: 'If we _____ more time, we could have launched the product earlier.',
    options: ['had', 'have had', 'had had', 'would have'],
    answer: 'had had',
    explanation: 'Third Conditional: "If + Past Perfect, would have + past participle". Unreal past: we did NOT have more time. "If we had had" = past perfect.',
    toeicPart: 5,
  },
  // Comparatives
  {
    id: 'g20',
    type: 'mcq',
    category: 'Comparatives',
    difficulty: 1,
    question: 'This quarter\'s results are _____ we expected.',
    options: ['better than', 'more good than', 'best than', 'better as'],
    answer: 'better than',
    explanation: '"Better" is the irregular comparative of "good". Comparatives always use "than": "better than", "faster than", "more efficient than".',
    toeicPart: 5,
  },
  {
    id: 'g21',
    type: 'mcq',
    category: 'Word Form',
    difficulty: 2,
    question: 'The _____ of the new strategy will depend on market conditions.',
    options: ['succeed', 'successful', 'success', 'successfully'],
    answer: 'success',
    explanation: 'A noun is needed as the subject of the sentence. "The success of..." → noun form. "Succeed" (verb), "successful" (adj), "successfully" (adv).',
    toeicPart: 5,
  },
  {
    id: 'g22',
    type: 'mcq',
    category: 'Word Form',
    difficulty: 2,
    question: 'The company is actively _____ for new partnerships in Asian markets.',
    options: ['search', 'searches', 'searching', 'searched'],
    answer: 'searching',
    explanation: '"is actively ___" → Present Continuous → verb + -ing. "The company is searching for..."',
    toeicPart: 5,
  },
  {
    id: 'g23',
    type: 'mcq',
    category: 'Word Form',
    difficulty: 2,
    question: 'We were impressed by the _____ of the sales team during the difficult quarter.',
    options: ['perform', 'performance', 'performer', 'performed'],
    answer: 'performance',
    explanation: '"By the ___" → needs a noun after a preposition. "Performance" is the noun form of "perform".',
    toeicPart: 5,
  },
  {
    id: 'g24',
    type: 'mcq',
    category: 'Conjunctions',
    difficulty: 2,
    question: 'The meeting was productive _____ it ran 30 minutes over schedule.',
    options: ['so', 'although', 'therefore', 'moreover'],
    answer: 'although',
    explanation: '"Although" introduces a concession/contrast: the meeting was productive DESPITE running over time. It connects two contrasting ideas.',
    toeicPart: 5,
  },
  {
    id: 'g25',
    type: 'mcq',
    category: 'Prepositions',
    difficulty: 2,
    question: 'The seminar is _____ charge for all registered participants.',
    options: ['with no', 'at no', 'free of', 'without'],
    answer: 'free of',
    explanation: '"Free of charge" is the fixed expression meaning "no cost". "At no charge" is also correct but not listed correctly here.',
    toeicPart: 5,
  },
]

export const readingPassages = [
  {
    id: 'r1',
    type: 'email',
    title: 'Internal Memo – Policy Update',
    difficulty: 1,
    text: `To: All Staff
From: Human Resources Department
Subject: Updated Remote Work Policy
Date: April 14

Dear colleagues,

We are pleased to announce updates to our remote work policy, effective May 1st. After an extensive review of productivity data and employee feedback collected over the past six months, management has approved the following changes:

Employees in eligible positions may now work from home up to three days per week, an increase from the previous limit of two days. Eligibility is determined by role type and tenure. Employees must have completed at least six months of continuous employment to qualify.

All remote work arrangements must be pre-approved by the direct supervisor and submitted through the HR portal no later than the 25th of each month for the following month. Requests submitted after this deadline will be processed for the subsequent month.

Equipment allowances remain unchanged. Employees working remotely are responsible for maintaining a suitable and secure workspace. The company will not be liable for home office-related expenses unless specifically approved in advance.

For any questions, please contact the HR department at hr@company.com or call extension 4421.

Sincerely,
The HR Department`,
    questions: [
      {
        id: 'r1q1',
        question: 'What is the main purpose of this memo?',
        options: [
          'To announce new employee benefits',
          'To inform staff of changes to the remote work policy',
          'To introduce a new HR software system',
          'To report productivity data to employees',
        ],
        answer: 'To inform staff of changes to the remote work policy',
        explanation: 'The subject line and opening sentence clearly state the memo announces "updates to our remote work policy".',
      },
      {
        id: 'r1q2',
        question: 'How many days per week can eligible employees now work remotely?',
        options: ['One day', 'Two days', 'Three days', 'Five days'],
        answer: 'Three days',
        explanation: 'The memo states "may now work from home up to three days per week".',
      },
      {
        id: 'r1q3',
        question: 'What is the deadline for submitting remote work requests?',
        options: [
          'The 15th of each month',
          'The 25th of each month',
          'The last day of each month',
          'The 1st of each month',
        ],
        answer: 'The 25th of each month',
        explanation: '"submitted through the HR portal no later than the 25th of each month for the following month."',
      },
      {
        id: 'r1q4',
        question: 'Which of the following is NOT mentioned as a requirement for remote work eligibility?',
        options: [
          'Having an eligible role type',
          'Having completed six months of employment',
          'Getting supervisor approval',
          'Passing a remote work assessment',
        ],
        answer: 'Passing a remote work assessment',
        explanation: 'The memo mentions role type, tenure (6 months), and supervisor approval — but does NOT mention any assessment.',
      },
    ],
  },
  {
    id: 'r2',
    type: 'advertisement',
    title: 'Product Advertisement',
    difficulty: 1,
    text: `ProSoft Solutions – Business Software for the Modern Workplace

Streamline your operations with ProSoft Suite 5.0 — the all-in-one business management platform trusted by over 15,000 companies worldwide.

★ KEY FEATURES:
• Real-time financial reporting and forecasting
• Integrated CRM with customer communication tools
• Advanced inventory management with automatic reorder alerts
• Human resources module including payroll and leave tracking
• Cloud-based with 99.9% uptime guarantee

SPECIAL LAUNCH OFFER – Limited Time Only!
Subscribe before June 30th and receive:
✓ 30% off your first year
✓ Free data migration from your current system
✓ Dedicated onboarding specialist for 90 days

Plans start from $49/month for up to 10 users.
Enterprise pricing available for teams of 50+.

"ProSoft reduced our administrative time by 40% in just three months." — Marketing Director, TechBridge Inc.

Visit prosoft.io or call 1-800-PRO-SOFT for a free 14-day trial.`,
    questions: [
      {
        id: 'r2q1',
        question: 'What is being advertised?',
        options: [
          'A cloud storage service',
          'A business management software platform',
          'An HR consulting firm',
          'A financial reporting tool only',
        ],
        answer: 'A business management software platform',
        explanation: 'ProSoft Suite 5.0 is described as "the all-in-one business management platform".',
      },
      {
        id: 'r2q2',
        question: 'Which of the following is included in the special launch offer?',
        options: [
          'A free one-year subscription',
          'Free training workshops',
          'Free data migration',
          'A free upgrade to enterprise tier',
        ],
        answer: 'Free data migration',
        explanation: 'The special offer includes "Free data migration from your current system" among the three listed benefits.',
      },
      {
        id: 'r2q3',
        question: 'According to the advertisement, what did ProSoft achieve for TechBridge Inc.?',
        options: [
          'Increased revenue by 40%',
          'Reduced administrative time by 40%',
          'Improved customer satisfaction by 40%',
          'Cut software costs by 40%',
        ],
        answer: 'Reduced administrative time by 40%',
        explanation: 'The testimonial states: "ProSoft reduced our administrative time by 40% in just three months."',
      },
    ],
  },
  {
    id: 'r3',
    type: 'article',
    title: 'Business News Article',
    difficulty: 2,
    text: `GLOBAL SHIPPING DELAYS CONTINUE TO IMPACT RETAIL SECTOR

Supply chain disruptions that began two years ago continue to affect retailers across North America and Europe, according to a report released by the International Trade Council (ITC) this week.

The report, which surveyed over 1,200 businesses in nine countries, found that 68% of respondents experienced significant shipping delays in the past quarter, with average delivery times extending by 12 to 18 days compared to pre-disruption levels. Electronics and consumer goods sectors were the most severely affected.

Alexandra Moore, senior analyst at the ITC, noted that while conditions have improved from the peak disruption period, full normalization is not expected before the second half of next year. "Companies that have diversified their supplier networks are in a much stronger position," she said in a press briefing.

In response to ongoing challenges, many businesses are adopting new strategies. According to the survey, 45% of companies have increased their safety stock levels, 32% have signed agreements with additional suppliers, and 28% have begun sourcing products from closer geographic regions to reduce transit times.

Retailers who proactively adjusted their inventory strategies appear to have fared better. Several large chains reported on-time delivery rates of over 85%, compared to an industry average of 71%.

The ITC plans to release a follow-up report in October, focusing on long-term supply chain resilience strategies.`,
    questions: [
      {
        id: 'r3q1',
        question: 'What is the main topic of this article?',
        options: [
          'New trade agreements between countries',
          'Ongoing supply chain disruptions affecting retailers',
          'A new report on consumer spending habits',
          'Electronics sector growth in North America',
        ],
        answer: 'Ongoing supply chain disruptions affecting retailers',
        explanation: 'The headline and entire article discuss the impact of shipping delays on the retail sector.',
      },
      {
        id: 'r3q2',
        question: 'According to the survey, what percentage of companies have increased their safety stock?',
        options: ['28%', '32%', '45%', '68%'],
        answer: '45%',
        explanation: '"45% of companies have increased their safety stock levels" is stated directly in the fourth paragraph.',
      },
      {
        id: 'r3q3',
        question: 'What does Alexandra Moore suggest about companies with diversified suppliers?',
        options: [
          'They have eliminated shipping delays entirely',
          'They are in a stronger position than those without',
          'They need to reduce their number of suppliers',
          'They have seen costs increase significantly',
        ],
        answer: 'They are in a stronger position than those without',
        explanation: 'Moore stated: "Companies that have diversified their supplier networks are in a much stronger position."',
      },
      {
        id: 'r3q4',
        question: 'When does the ITC expect full normalization of shipping?',
        options: [
          'By the end of this year',
          'Not before the second half of next year',
          'Within the next three months',
          'It is not mentioned in the article',
        ],
        answer: 'Not before the second half of next year',
        explanation: 'Moore stated "full normalization is not expected before the second half of next year."',
      },
    ],
  },
]

export const listeningScripts = [
  {
    id: 'l1',
    type: 'part2',
    title: 'Question-Response Practice',
    accent: 'US',
    pairs: [
      {
        question: "When is the project deadline?",
        options: [
          "It's on the third floor.",
          "Next Friday at 5 PM.",
          "About twenty people attended.",
        ],
        answer: "Next Friday at 5 PM.",
        explanation: '"When" asks about time. Only "Next Friday at 5 PM" gives a time answer.',
      },
      {
        question: "Who is responsible for the client presentation?",
        options: [
          "It was very well received.",
          "Sarah from the marketing team.",
          "In the conference room.",
        ],
        answer: "Sarah from the marketing team.",
        explanation: '"Who" asks for a person. "Sarah from the marketing team" names a person.',
      },
      {
        question: "Would you like to review the contract before signing?",
        options: [
          "Yes, I\'d appreciate having more time to look it over.",
          "The contract expires in December.",
          "We have three offices downtown.",
        ],
        answer: "Yes, I'd appreciate having more time to look it over.",
        explanation: 'Yes/No question. Only the first option logically responds to an offer to review.',
      },
      {
        question: "Why was the meeting rescheduled?",
        options: [
          "The conference room was booked by another team.",
          "At two o\'clock in the afternoon.",
          "Mr. Rodriguez will chair the meeting.",
        ],
        answer: "The conference room was booked by another team.",
        explanation: '"Why" asks for a reason. "The conference room was booked" gives a cause.',
      },
      {
        question: "How many people are expected at the trade fair?",
        options: [
          "It\'s held annually in September.",
          "In the convention center downtown.",
          "Approximately five hundred exhibitors.",
        ],
        answer: "Approximately five hundred exhibitors.",
        explanation: '"How many" asks for a quantity. "Approximately five hundred exhibitors" gives a number.',
      },
    ],
  },
  {
    id: 'l2',
    type: 'part3',
    title: 'Conversation: Office Situation',
    accent: 'UK',
    script: `Man: Excuse me, Sarah. Do you have a moment? I've been trying to access the shared drive all morning, but I keep getting an error message saying my account has been suspended.

Woman: Oh, that's strange. Have you already tried restarting your computer and logging in again?

Man: Yes, I did that first thing. Still the same error. I need to retrieve the presentation files for the client meeting at 2 o'clock.

Woman: Right. Let me call IT Support for you. They should be able to fix it remotely. In the meantime, could you ask James if he has a copy of the files you need?

Man: That's a good idea. James was working on it too.

Woman: IT usually resolves these issues within the hour. If they can't fix it by 1:30, I'll make sure you can use my computer for the meeting.`,
    questions: [
      {
        id: 'l2q1',
        question: 'What problem is the man experiencing?',
        options: [
          'He cannot find the conference room',
          'He cannot access the shared drive',
          'He missed a client meeting',
          'He lost his login password',
        ],
        answer: 'He cannot access the shared drive',
        explanation: 'The man says: "I\'ve been trying to access the shared drive all morning, but I keep getting an error message."',
      },
      {
        id: 'l2q2',
        question: 'What does the woman suggest first?',
        options: [
          'Contact IT Support',
          'Use her computer',
          'Ask James for the files',
          'Postpone the meeting',
        ],
        answer: 'Contact IT Support',
        explanation: '"Let me call IT Support for you." is the woman\'s first suggestion before mentioning James.',
      },
      {
        id: 'l2q3',
        question: 'What will the woman do if IT cannot fix the problem by 1:30?',
        options: [
          'Postpone the client meeting',
          'Let the man use her computer',
          'Contact the client directly',
          'Send James to the meeting instead',
        ],
        answer: 'Let the man use her computer',
        explanation: '"If they can\'t fix it by 1:30, I\'ll make sure you can use my computer for the meeting."',
      },
    ],
  },
]
