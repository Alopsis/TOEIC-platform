export const grammarExercises = [
  // ── VERB TENSES ──────────────────────────────────────────────────────────
  {
    id: 'g1', type: 'mcq', category: 'Verb Tenses', difficulty: 1, toeicPart: 5,
    question: 'The sales team _____ their monthly targets every quarter without exception.',
    options: ['meet', 'meets', 'met', 'has met'],
    answer: 'meets',
    explanation: 'Present Simple for habitual actions. "Every quarter" signals routine. Singular subject "team" → "meets".',
  },
  {
    id: 'g2', type: 'mcq', category: 'Verb Tenses', difficulty: 1, toeicPart: 5,
    question: 'The annual report _____ published last Friday on the company website.',
    options: ['is', 'was', 'has been', 'will be'],
    answer: 'was',
    explanation: '"Last Friday" = specific past time → Past Simple. "Was published" = past passive.',
  },
  {
    id: 'g3', type: 'mcq', category: 'Verb Tenses', difficulty: 2, toeicPart: 5,
    question: 'By the time the director arrives, the team _____ the presentation.',
    options: ['will finish', 'finishes', 'will have finished', 'has finished'],
    answer: 'will have finished',
    explanation: '"By the time + present simple" → Future Perfect. Action completed before another future action.',
  },
  {
    id: 'g4', type: 'mcq', category: 'Verb Tenses', difficulty: 2, toeicPart: 5,
    question: 'The company _____ its new product line since the beginning of last year.',
    options: ['developed', 'is developing', 'has been developing', 'had developed'],
    answer: 'has been developing',
    explanation: '"Since" + past time → Present Perfect Continuous. Started in the past and continues now.',
  },
  {
    id: 'g5', type: 'mcq', category: 'Verb Tenses', difficulty: 2, toeicPart: 5,
    question: 'By the end of this year, our company _____ in Asia for a full decade.',
    options: ['operates', 'has operated', 'will have operated', 'operated'],
    answer: 'will have operated',
    explanation: '"By the end of this year" + future → Future Perfect "will have operated".',
  },
  {
    id: 'g6', type: 'mcq', category: 'Verb Tenses', difficulty: 2, toeicPart: 5,
    question: 'The department _____ on this project when the client called unexpectedly.',
    options: ['worked', 'was working', 'has worked', 'works'],
    answer: 'was working',
    explanation: 'Past Continuous for an action in progress when another past action interrupted it. "When the client called" = interruption.',
  },
  {
    id: 'g7', type: 'mcq', category: 'Verb Tenses', difficulty: 1, toeicPart: 5,
    question: 'The board _____ yet to reach a decision on the merger proposal.',
    options: ['failed', 'has failed', 'is failed', 'will fail'],
    answer: 'has failed',
    explanation: '"Yet" in context of current situation → Present Perfect. The board has not yet decided.',
  },
  {
    id: 'g8', type: 'mcq', category: 'Verb Tenses', difficulty: 3, toeicPart: 5,
    question: 'When Ms. Park _____ in charge, profits had already declined significantly.',
    options: ['took', 'takes', 'has taken', 'was taking'],
    answer: 'took',
    explanation: '"Had already declined" (Past Perfect) implies a reference past time. "When she took" = Past Simple for the reference point.',
  },

  // ── PASSIVE VOICE ─────────────────────────────────────────────────────────
  {
    id: 'g9', type: 'mcq', category: 'Passive Voice', difficulty: 1, toeicPart: 5,
    question: 'All purchase orders must _____ by the department head before processing.',
    options: ['approve', 'be approved', 'approved', 'approving'],
    answer: 'be approved',
    explanation: 'Modal + passive: "must be + past participle". The orders receive the action.',
  },
  {
    id: 'g10', type: 'mcq', category: 'Passive Voice', difficulty: 2, toeicPart: 5,
    question: 'The new software _____ by the IT department before company-wide rollout.',
    options: ['is testing', 'will test', 'is being tested', 'has tested'],
    answer: 'is being tested',
    explanation: 'Present Continuous Passive: "is being + past participle". Testing is in progress right now.',
  },
  {
    id: 'g11', type: 'mcq', category: 'Passive Voice', difficulty: 2, toeicPart: 5,
    question: 'The financial statements _____ audited before the shareholder meeting next month.',
    options: ['will be', 'are', 'have been', 'were'],
    answer: 'will be',
    explanation: '"Next month" = future → "will be audited" (future passive).',
  },
  {
    id: 'g12', type: 'mcq', category: 'Passive Voice', difficulty: 2, toeicPart: 5,
    question: 'Three proposals _____ to the selection committee by Friday afternoon.',
    options: ['will submit', 'were submitted', 'submit', 'will be submitted'],
    answer: 'will be submitted',
    explanation: 'The proposals are submitted TO the committee (passive). "By Friday" = deadline → future passive "will be submitted".',
  },
  {
    id: 'g13', type: 'mcq', category: 'Passive Voice', difficulty: 3, toeicPart: 5,
    question: 'Applicants _____ to bring two forms of identification to the interview.',
    options: ['require', 'are required', 'requiring', 'is required'],
    answer: 'are required',
    explanation: '"Are required to" is the standard passive construction. Subject (applicants, plural) receives the requirement.',
  },

  // ── MODAL VERBS ──────────────────────────────────────────────────────────
  {
    id: 'g14', type: 'mcq', category: 'Modal Verbs', difficulty: 1, toeicPart: 5,
    question: 'Employees _____ submit their expense reports within two weeks of travel.',
    options: ['must to', 'should to', 'must', 'ought'],
    answer: 'must',
    explanation: 'Modals are NOT followed by "to" (except "ought to" and "have to"). "Must" = obligation.',
  },
  {
    id: 'g15', type: 'mcq', category: 'Modal Verbs', difficulty: 2, toeicPart: 5,
    question: 'If you are unsure about the policy, you _____ consult the HR handbook.',
    options: ['would', 'should', 'shall', 'could be'],
    answer: 'should',
    explanation: '"Should" expresses advice/recommendation. Most appropriate when advising someone what to do.',
  },
  {
    id: 'g16', type: 'mcq', category: 'Modal Verbs', difficulty: 2, toeicPart: 5,
    question: 'The client _____ have received our email, but we have not heard back yet.',
    options: ['should', 'must', 'may', 'can'],
    answer: 'may',
    explanation: '"May have + past participle" = past possibility. We are uncertain whether they received it.',
  },
  {
    id: 'g17', type: 'mcq', category: 'Modal Verbs', difficulty: 2, toeicPart: 5,
    question: 'You _____ reserve a conference room at least 24 hours in advance.',
    options: ['could', 'are able to', 'must', 'would'],
    answer: 'must',
    explanation: '"Must" = strong obligation/requirement. This is a rule, not a suggestion.',
  },

  // ── ARTICLES ─────────────────────────────────────────────────────────────
  {
    id: 'g18', type: 'mcq', category: 'Articles', difficulty: 1, toeicPart: 5,
    question: '_____ CEO announced the restructuring plan at last week\'s meeting.',
    options: ['A', 'An', 'The', '(no article)'],
    answer: 'The',
    explanation: '"The" for unique positions (only one CEO). Refers to a specific known person.',
  },
  {
    id: 'g19', type: 'mcq', category: 'Articles', difficulty: 2, toeicPart: 5,
    question: 'We are looking for _____ experienced project manager to lead our new division.',
    options: ['a', 'an', 'the', '(no article)'],
    answer: 'an',
    explanation: '"An" before vowel sounds. "Experienced" starts with vowel sound /ɪ/ → "an experienced".',
  },
  {
    id: 'g20', type: 'mcq', category: 'Articles', difficulty: 2, toeicPart: 5,
    question: '_____ customer satisfaction is our primary goal.',
    options: ['A', 'An', 'The', '(no article)'],
    answer: '(no article)',
    explanation: 'Abstract concepts used generally take no article. "Customer satisfaction" as a concept in general.',
  },
  {
    id: 'g21', type: 'mcq', category: 'Articles', difficulty: 2, toeicPart: 5,
    question: 'We signed _____ agreement that will benefit both companies for years.',
    options: ['a', 'an', 'the', '(no article)'],
    answer: 'an',
    explanation: '"An" before vowel sounds: "an agreement" /ə/ starts with a vowel sound.',
  },
  {
    id: 'g22', type: 'mcq', category: 'Articles', difficulty: 3, toeicPart: 5,
    question: 'Please send _____ revised contract to our legal team by end of day.',
    options: ['a', 'an', 'the', '(no article)'],
    answer: 'the',
    explanation: '"The" because both speaker and listener know which specific contract is being referred to (second mention / shared knowledge).',
  },

  // ── PREPOSITIONS ──────────────────────────────────────────────────────────
  {
    id: 'g23', type: 'mcq', category: 'Prepositions', difficulty: 1, toeicPart: 5,
    question: 'Please submit the quarterly report _____ Friday at the latest.',
    options: ['on', 'at', 'by', 'until'],
    answer: 'by',
    explanation: '"By" = deadline (not later than). "By Friday" means any time up to and including Friday.',
  },
  {
    id: 'g24', type: 'mcq', category: 'Prepositions', difficulty: 2, toeicPart: 5,
    question: 'The new branch has been operating _____ difficulties since the management change.',
    options: ['with', 'under', 'from', 'at'],
    answer: 'under',
    explanation: '"Operating under difficulties" = fixed collocation. "Under" with conditions/circumstances.',
  },
  {
    id: 'g25', type: 'mcq', category: 'Prepositions', difficulty: 2, toeicPart: 5,
    question: 'The seminar is free _____ charge for all registered participants.',
    options: ['of', 'from', 'at', 'for'],
    answer: 'of',
    explanation: '"Free of charge" is the fixed expression meaning "at no cost".',
  },
  {
    id: 'g26', type: 'mcq', category: 'Prepositions', difficulty: 2, toeicPart: 5,
    question: 'The manager is responsible _____ overseeing all international operations.',
    options: ['of', 'about', 'for', 'with'],
    answer: 'for',
    explanation: '"Responsible for" is the correct fixed collocation. Always followed by "for".',
  },
  {
    id: 'g27', type: 'mcq', category: 'Prepositions', difficulty: 2, toeicPart: 5,
    question: 'Our sales have increased _____ 15% compared to last year.',
    options: ['with', 'at', 'by', 'on'],
    answer: 'by',
    explanation: '"Increased by [amount]" = the fixed preposition for expressing change in quantity.',
  },
  {
    id: 'g28', type: 'mcq', category: 'Prepositions', difficulty: 1, toeicPart: 5,
    question: 'The conference is scheduled _____ the 15th of October.',
    options: ['in', 'on', 'at', 'by'],
    answer: 'on',
    explanation: '"On" with specific dates: "on October 15th", "on Monday", "on the deadline".',
  },

  // ── RELATIVE PRONOUNS ─────────────────────────────────────────────────────
  {
    id: 'g29', type: 'mcq', category: 'Relative Pronouns', difficulty: 2, toeicPart: 5,
    question: 'The employee _____ project won the innovation award received a bonus.',
    options: ['who', 'whom', 'whose', 'which'],
    answer: 'whose',
    explanation: '"Whose" shows possession: the project BELONGS TO the employee.',
  },
  {
    id: 'g30', type: 'mcq', category: 'Relative Pronouns', difficulty: 2, toeicPart: 5,
    question: 'The proposal _____ was submitted last week has been accepted by the board.',
    options: ['who', 'whose', 'which', 'whom'],
    answer: 'which',
    explanation: '"Which" refers to things (not people). "The proposal" is a thing.',
  },
  {
    id: 'g31', type: 'mcq', category: 'Relative Pronouns', difficulty: 2, toeicPart: 5,
    question: 'The candidate _____ we interviewed yesterday has extensive experience.',
    options: ['who', 'whose', 'whom', 'which'],
    answer: 'whom',
    explanation: '"Whom" is used when the relative pronoun is the object of the verb: "we interviewed WHOM" → object case.',
  },
  {
    id: 'g32', type: 'mcq', category: 'Relative Pronouns', difficulty: 3, toeicPart: 5,
    question: 'The office _____ the team works is located on the fifth floor.',
    options: ['that', 'which', 'where', 'who'],
    answer: 'where',
    explanation: '"Where" as a relative adverb replacing "in which" for places: "the office where [= in which] the team works".',
  },

  // ── CONDITIONALS ─────────────────────────────────────────────────────────
  {
    id: 'g33', type: 'mcq', category: 'Conditionals', difficulty: 2, toeicPart: 5,
    question: 'If the shipment _____ tomorrow, we will not be able to meet the deadline.',
    options: ['will not arrive', 'does not arrive', 'did not arrive', 'had not arrived'],
    answer: 'does not arrive',
    explanation: 'First Conditional: "If + Present Simple, will + base verb". Real future condition.',
  },
  {
    id: 'g34', type: 'mcq', category: 'Conditionals', difficulty: 3, toeicPart: 5,
    question: 'If the manager _____ the email on time, she would have approved the order before the deadline.',
    options: ['receives', 'received', 'had received', 'would receive'],
    answer: 'had received',
    explanation: 'Third Conditional: "If + Past Perfect (had + past participle), would have + past participle". The manager did NOT receive the email → unreal past. If-clause = "had received", main clause = "would have approved".',
  },
  {
    id: 'g35', type: 'mcq', category: 'Conditionals', difficulty: 2, toeicPart: 5,
    question: 'If the company _____ more in R&D, it would be more competitive now.',
    options: ['invests', 'invested', 'had invested', 'will invest'],
    answer: 'invested',
    explanation: 'Second Conditional: "If + Past Simple, would + base verb". Hypothetical present/future situation.',
  },

  // ── COMPARATIVES & SUPERLATIVES ──────────────────────────────────────────
  {
    id: 'g36', type: 'mcq', category: 'Comparatives', difficulty: 1, toeicPart: 5,
    question: 'This quarter\'s results are _____ we expected after the difficult start.',
    options: ['better than', 'more good than', 'best than', 'better as'],
    answer: 'better than',
    explanation: '"Better" = irregular comparative of "good". Comparatives always use "than".',
  },
  {
    id: 'g37', type: 'mcq', category: 'Comparatives', difficulty: 2, toeicPart: 5,
    question: 'The new software is _____ efficient than the previous version by 40%.',
    options: ['more', 'much more', 'most', 'the most'],
    answer: 'much more',
    explanation: '"Much more + adjective" for comparatives. "Much" intensifies the comparison.',
  },
  {
    id: 'g38', type: 'mcq', category: 'Comparatives', difficulty: 2, toeicPart: 5,
    question: 'Of all the candidates, Ms. Kim has _____ experience in international markets.',
    options: ['more', 'the most', 'the more', 'most'],
    answer: 'the most',
    explanation: 'Superlative: "the most + adjective" when comparing 3+ items. "Of all" signals superlative.',
  },

  // ── WORD FORMS ───────────────────────────────────────────────────────────
  {
    id: 'g39', type: 'mcq', category: 'Word Form', difficulty: 2, toeicPart: 5,
    question: 'The _____ of the new strategy will depend on market conditions.',
    options: ['succeed', 'successful', 'success', 'successfully'],
    answer: 'success',
    explanation: 'Noun needed as subject: "The success of...". "Succeed" (v), "successful" (adj), "successfully" (adv).',
  },
  {
    id: 'g40', type: 'mcq', category: 'Word Form', difficulty: 2, toeicPart: 5,
    question: 'We were impressed by the _____ of the sales team during the difficult quarter.',
    options: ['perform', 'performance', 'performer', 'performed'],
    answer: 'performance',
    explanation: '"By the ___" → noun needed after preposition. "Performance" = noun form of "perform".',
  },
  {
    id: 'g41', type: 'mcq', category: 'Word Form', difficulty: 2, toeicPart: 5,
    question: 'The marketing campaign was _____ designed to appeal to younger consumers.',
    options: ['specific', 'specify', 'specifically', 'specification'],
    answer: 'specifically',
    explanation: 'Adverb needed to modify the adjective "designed". "Specifically designed" = adverb + past participle.',
  },
  {
    id: 'g42', type: 'mcq', category: 'Word Form', difficulty: 2, toeicPart: 5,
    question: 'All staff members should familiarize themselves with the new _____ procedures.',
    options: ['safe', 'safely', 'safety', 'safeguard'],
    answer: 'safety',
    explanation: 'Noun used as an adjective (compound noun): "safety procedures". "Safety" modifies "procedures".',
  },
  {
    id: 'g43', type: 'mcq', category: 'Word Form', difficulty: 3, toeicPart: 5,
    question: 'The merger was _____ completed after months of difficult negotiations.',
    options: ['eventual', 'eventuality', 'eventually', 'eventuate'],
    answer: 'eventually',
    explanation: 'Adverb needed to modify "completed" (a verb/participle). "Eventually" = adverb meaning "in the end".',
  },
  {
    id: 'g44', type: 'mcq', category: 'Word Form', difficulty: 2, toeicPart: 5,
    question: 'The CEO gave a _____ speech that motivated the entire workforce.',
    options: ['inspire', 'inspiration', 'inspired', 'inspiring'],
    answer: 'inspiring',
    explanation: '"Inspiring" (present participle as adjective) describes the speech. The speech causes inspiration → "inspiring speech".',
  },
  {
    id: 'g45', type: 'mcq', category: 'Word Form', difficulty: 2, toeicPart: 5,
    question: 'There is a growing _____ for flexible working arrangements among employees.',
    options: ['prefer', 'preference', 'preferable', 'preferably'],
    answer: 'preference',
    explanation: '"A growing ___" → needs a noun. "Preference" = noun form. "There is a preference FOR something."',
  },

  // ── CONJUNCTIONS & TRANSITIONS ────────────────────────────────────────────
  {
    id: 'g46', type: 'mcq', category: 'Conjunctions', difficulty: 2, toeicPart: 5,
    question: 'The meeting was productive _____ it ran 30 minutes over schedule.',
    options: ['so', 'although', 'therefore', 'moreover'],
    answer: 'although',
    explanation: '"Although" introduces a concessive clause: productive DESPITE running over time.',
  },
  {
    id: 'g47', type: 'mcq', category: 'Conjunctions', difficulty: 2, toeicPart: 5,
    question: 'The project was delivered on time; _____, the client requested several revisions.',
    options: ['however', 'therefore', 'moreover', 'consequently'],
    answer: 'however',
    explanation: '"However" introduces a contrast after a positive statement. Semicolon + however = linking two contrasting clauses.',
  },
  {
    id: 'g48', type: 'mcq', category: 'Conjunctions', difficulty: 2, toeicPart: 5,
    question: 'Sales have increased _____ we launched the new loyalty program.',
    options: ['until', 'since', 'while', 'unless'],
    answer: 'since',
    explanation: '"Since" as a time conjunction: from the moment the loyalty program was launched. Also signals cause (reason).',
  },
  {
    id: 'g49', type: 'mcq', category: 'Conjunctions', difficulty: 2, toeicPart: 5,
    question: 'The contract will not be renewed _____ the supplier improves delivery times.',
    options: ['if', 'unless', 'while', 'since'],
    answer: 'unless',
    explanation: '"Unless" = "if not". The contract will NOT be renewed IF the supplier does NOT improve.',
  },
  {
    id: 'g50', type: 'mcq', category: 'Conjunctions', difficulty: 3, toeicPart: 5,
    question: '_____ the budget was cut, the team managed to complete the project successfully.',
    options: ['Even though', 'So that', 'In order that', 'Now that'],
    answer: 'Even though',
    explanation: '"Even though" = strong contrast/concession. Similar to "although" but stronger emphasis on the unexpected result.',
  },

  // ── GERUNDS & INFINITIVES ─────────────────────────────────────────────────
  {
    id: 'g51', type: 'mcq', category: 'Gerund vs Infinitive', difficulty: 2, toeicPart: 5,
    question: 'The company decided _____ a new manufacturing plant in the region.',
    options: ['building', 'to build', 'build', 'built'],
    answer: 'to build',
    explanation: '"Decide + to + infinitive": verbs like decide, plan, agree, refuse, hope → followed by infinitive.',
  },
  {
    id: 'g52', type: 'mcq', category: 'Gerund vs Infinitive', difficulty: 2, toeicPart: 5,
    question: 'The team enjoyed _____ about industry trends at the annual conference.',
    options: ['to learn', 'learn', 'learning', 'learned'],
    answer: 'learning',
    explanation: '"Enjoy + gerund (-ing)": enjoy, finish, consider, avoid, suggest → followed by gerund.',
  },
  {
    id: 'g53', type: 'mcq', category: 'Gerund vs Infinitive', difficulty: 3, toeicPart: 5,
    question: 'We recommend _____ the contract before the deadline to avoid any complications.',
    options: ['to review', 'reviewing', 'reviewed', 'review'],
    answer: 'reviewing',
    explanation: '"Recommend + gerund": recommend, suggest, consider, avoid, enjoy, finish → gerund (-ing).',
  },
  {
    id: 'g54', type: 'mcq', category: 'Gerund vs Infinitive', difficulty: 2, toeicPart: 5,
    question: '_____ all employees about the policy change is the manager\'s responsibility.',
    options: ['Notify', 'Notifying', 'Notified', 'To notify'],
    answer: 'Notifying',
    explanation: 'Gerund as subject of sentence: "Notifying employees is..." — the gerund (-ing) functions as a noun here.',
  },

  // ── SUBJECT-VERB AGREEMENT ────────────────────────────────────────────────
  {
    id: 'g55', type: 'mcq', category: 'Subject-Verb Agreement', difficulty: 2, toeicPart: 5,
    question: 'The number of applicants for the position _____ increased dramatically this year.',
    options: ['have', 'has', 'are', 'were'],
    answer: 'has',
    explanation: '"The number of" takes a singular verb. Contrast: "A number of applicants have..." (plural). "The number" = singular.',
  },
  {
    id: 'g56', type: 'mcq', category: 'Subject-Verb Agreement', difficulty: 2, toeicPart: 5,
    question: 'Either the manager or the team members _____ responsible for the error.',
    options: ['is', 'are', 'was', 'be'],
    answer: 'are',
    explanation: '"Either...or" → verb agrees with the CLOSER subject. "Team members" (plural) → "are".',
  },
  {
    id: 'g57', type: 'mcq', category: 'Subject-Verb Agreement', difficulty: 3, toeicPart: 5,
    question: 'Each of the department heads _____ required to submit a quarterly budget report.',
    options: ['are', 'were', 'is', 'have been'],
    answer: 'is',
    explanation: '"Each of + plural noun" takes a singular verb. "Each" is always singular → "is required".',
  },
  {
    id: 'g58', type: 'mcq', category: 'Subject-Verb Agreement', difficulty: 2, toeicPart: 5,
    question: 'Sales figures from last quarter _____ that customer demand is growing steadily.',
    options: ['indicate', 'indicates', 'indication', 'indicative'],
    answer: 'indicate',
    explanation: '"Sales figures" (plural) → plural verb "indicate". "Indicates" would be for singular subjects.',
  },

  // ── VOCABULARY IN CONTEXT ─────────────────────────────────────────────────
  {
    id: 'g59', type: 'mcq', category: 'Vocabulary', difficulty: 2, toeicPart: 5,
    question: 'The training session has been _____ to next Tuesday due to the speaker\'s illness.',
    options: ['extended', 'postponed', 'abandoned', 'revised'],
    answer: 'postponed',
    explanation: '"Postponed to" = moved to a later date. "Extended" means made longer, not moved. "Abandoned" = cancelled permanently.',
  },
  {
    id: 'g60', type: 'mcq', category: 'Vocabulary', difficulty: 2, toeicPart: 5,
    question: 'The new policy will take _____ on the first day of next month.',
    options: ['effect', 'affect', 'effective', 'effectively'],
    answer: 'effect',
    explanation: '"Take effect" = fixed phrase meaning "to become operative". "Affect" is a verb; "effect" is a noun here.',
  },
  {
    id: 'g61', type: 'mcq', category: 'Vocabulary', difficulty: 2, toeicPart: 5,
    question: 'Please ensure that all documents are _____ before the meeting begins.',
    options: ['distributed', 'distributing', 'distribution', 'distribute'],
    answer: 'distributed',
    explanation: 'Passive past participle used as adjective: "are distributed" = present passive. Documents receive the action.',
  },
  {
    id: 'g62', type: 'mcq', category: 'Vocabulary', difficulty: 3, toeicPart: 5,
    question: 'The CEO\'s decision to expand was met with _____ from the shareholders.',
    options: ['optimism', 'skepticism', 'enthusiasm', 'indifference'],
    answer: 'skepticism',
    explanation: 'Context clue: shareholders questioning an expansion decision suggests doubt → "skepticism" fits.',
  },
  {
    id: 'g63', type: 'mcq', category: 'Vocabulary', difficulty: 2, toeicPart: 5,
    question: 'The company has been _____ in talks with a potential acquisition target for months.',
    options: ['engaged', 'engaging', 'engagement', 'engagingly'],
    answer: 'engaged',
    explanation: '"Been engaged in" = fixed passive phrase meaning "involved in/participating in".',
  },

  // ── ADJECTIVES VS ADVERBS ─────────────────────────────────────────────────
  {
    id: 'g64', type: 'mcq', category: 'Adjective vs Adverb', difficulty: 2, toeicPart: 5,
    question: 'The committee reached a _____ unanimous decision after lengthy deliberations.',
    options: ['near', 'nearly', 'nearer', 'nearest'],
    answer: 'nearly',
    explanation: 'Adverb "nearly" modifies the adjective "unanimous". "Near" is a preposition/adjective, not used before adjectives.',
  },
  {
    id: 'g65', type: 'mcq', category: 'Adjective vs Adverb', difficulty: 2, toeicPart: 5,
    question: 'The new product line has been _____ successful since its launch last spring.',
    options: ['remarkably', 'remarkable', 'remarking', 'remark'],
    answer: 'remarkably',
    explanation: 'Adverb "remarkably" modifies the adjective "successful". -ly form = adverb modifying adjectives.',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// READING PASSAGES
// ─────────────────────────────────────────────────────────────────────────────

export const readingPassages = [
  {
    id: 'r1',
    type: 'email',
    title: 'Internal Memo – Remote Work Policy Update',
    difficulty: 1,
    text: `To: All Staff
From: Human Resources Department
Subject: Updated Remote Work Policy
Date: April 14

Dear colleagues,

We are pleased to announce updates to our remote work policy, effective May 1st. After reviewing productivity data and employee feedback collected over the past six months, management has approved the following changes:

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
        options: ['To announce new employee benefits', 'To inform staff of changes to the remote work policy', 'To introduce a new HR software system', 'To report productivity data to employees'],
        answer: 'To inform staff of changes to the remote work policy',
        explanation: 'The subject line and opening sentence clearly state the memo announces "updates to our remote work policy".',
      },
      {
        id: 'r1q2',
        question: 'How many days per week can eligible employees now work remotely?',
        options: ['One day', 'Two days', 'Three days', 'Five days'],
        answer: 'Three days',
        explanation: 'The memo states: "may now work from home up to three days per week".',
      },
      {
        id: 'r1q3',
        question: 'What is the deadline for submitting remote work requests?',
        options: ['The 15th of each month', 'The 25th of each month', 'The last day of each month', 'The 1st of each month'],
        answer: 'The 25th of each month',
        explanation: '"submitted through the HR portal no later than the 25th of each month for the following month."',
      },
      {
        id: 'r1q4',
        question: 'Which of the following is NOT mentioned as a requirement for eligibility?',
        options: ['Having an eligible role type', 'Having completed six months of employment', 'Getting supervisor approval', 'Passing a remote work assessment'],
        answer: 'Passing a remote work assessment',
        explanation: 'The memo mentions role type, tenure and supervisor approval — no mention of any assessment.',
      },
    ],
  },
  {
    id: 'r2',
    type: 'advertisement',
    title: 'Job Advertisement – Marketing Manager',
    difficulty: 1,
    text: `MARKETING MANAGER – APAC REGION
NovaTech Solutions | Singapore | Full-time

NovaTech Solutions is a rapidly expanding technology company seeking an experienced Marketing Manager to lead our Asia-Pacific marketing operations.

RESPONSIBILITIES:
• Develop and execute marketing strategies across the APAC region
• Manage a team of 8 marketing specialists
• Oversee a budget of SGD 2.5 million annually
• Collaborate with regional sales teams to generate leads
• Analyze market trends and report to the VP of Marketing

REQUIREMENTS:
• Bachelor's degree in Marketing, Business, or related field
• Minimum 5 years of experience in B2B marketing
• Proven track record of managing cross-functional teams
• Fluency in English required; Mandarin proficiency is an advantage
• Willingness to travel up to 30% of the time

COMPENSATION:
• Competitive base salary (SGD 8,000–12,000/month)
• Performance bonus up to 20% of annual salary
• Full health and dental coverage
• 18 days paid annual leave

To apply, send your CV and cover letter to careers@novatech.sg by November 30.
Only shortlisted candidates will be contacted.`,
    questions: [
      {
        id: 'r2q1',
        question: 'What is the primary purpose of this advertisement?',
        options: ['To promote a technology product', 'To recruit a marketing professional', 'To announce a company expansion', 'To describe NovaTech\'s services'],
        answer: 'To recruit a marketing professional',
        explanation: 'This is a job advertisement seeking a Marketing Manager to lead APAC operations.',
      },
      {
        id: 'r2q2',
        question: 'What language skill is listed as an advantage but NOT required?',
        options: ['English', 'Mandarin', 'Japanese', 'Korean'],
        answer: 'Mandarin',
        explanation: '"Fluency in English required; Mandarin proficiency is an advantage" — Mandarin is optional.',
      },
      {
        id: 'r2q3',
        question: 'According to the ad, how many people would the manager supervise?',
        options: ['5', '6', '8', '12'],
        answer: '8',
        explanation: '"Manage a team of 8 marketing specialists" is stated directly.',
      },
      {
        id: 'r2q4',
        question: 'What should interested candidates do by November 30?',
        options: ['Call the HR department', 'Submit an online application form', 'Send a CV and cover letter by email', 'Attend an open interview day'],
        answer: 'Send a CV and cover letter by email',
        explanation: '"send your CV and cover letter to careers@novatech.sg by November 30".',
      },
    ],
  },
  {
    id: 'r3',
    type: 'article',
    title: 'Business News – Supply Chain Disruptions',
    difficulty: 2,
    text: `GLOBAL SHIPPING DELAYS CONTINUE TO IMPACT RETAIL SECTOR

Supply chain disruptions that began two years ago continue to affect retailers across North America and Europe, according to a report released by the International Trade Council (ITC) this week.

The report, which surveyed over 1,200 businesses in nine countries, found that 68% of respondents experienced significant shipping delays in the past quarter, with average delivery times extending by 12 to 18 days compared to pre-disruption levels.

Alexandra Moore, senior analyst at the ITC, noted that while conditions have improved from the peak disruption period, full normalization is not expected before the second half of next year. "Companies that have diversified their supplier networks are in a much stronger position," she said.

In response to ongoing challenges, many businesses are adopting new strategies. According to the survey, 45% of companies have increased their safety stock levels, 32% have signed agreements with additional suppliers, and 28% have begun sourcing products from closer geographic regions.

Retailers who proactively adjusted their inventory strategies appear to have fared better. Several large chains reported on-time delivery rates of over 85%, compared to an industry average of 71%.

The ITC plans to release a follow-up report in October, focusing on long-term supply chain resilience strategies.`,
    questions: [
      {
        id: 'r3q1',
        question: 'What is the main topic of this article?',
        options: ['New trade agreements between countries', 'Ongoing supply chain disruptions affecting retailers', 'A new report on consumer spending habits', 'Electronics sector growth'],
        answer: 'Ongoing supply chain disruptions affecting retailers',
        explanation: 'The headline and entire article discuss shipping delays and their impact on the retail sector.',
      },
      {
        id: 'r3q2',
        question: 'What percentage of surveyed companies increased their safety stock?',
        options: ['28%', '32%', '45%', '68%'],
        answer: '45%',
        explanation: '"45% of companies have increased their safety stock levels" is stated in paragraph four.',
      },
      {
        id: 'r3q3',
        question: 'What does Moore suggest about companies with diversified suppliers?',
        options: ['They have eliminated shipping delays entirely', 'They are in a stronger position', 'They need to reduce supplier numbers', 'They have seen costs increase significantly'],
        answer: 'They are in a stronger position',
        explanation: 'Moore stated: "Companies that have diversified their supplier networks are in a much stronger position."',
      },
      {
        id: 'r3q4',
        question: 'When does the ITC expect full normalization of shipping?',
        options: ['By the end of this year', 'Not before the second half of next year', 'Within the next three months', 'It is not mentioned'],
        answer: 'Not before the second half of next year',
        explanation: '"full normalization is not expected before the second half of next year."',
      },
    ],
  },
  {
    id: 'r4',
    type: 'notice',
    title: 'Building Notice – Maintenance',
    difficulty: 1,
    text: `NOTICE TO ALL TENANTS
Westgate Commercial Center

Routine maintenance of the building's HVAC (Heating, Ventilation, and Air Conditioning) system will be carried out on Thursday, April 10, from 7:00 AM to 1:00 PM.

During this time, air conditioning and heating services will be temporarily unavailable throughout the building. We recommend that tenants dress appropriately and, if possible, schedule non-essential tasks for that morning.

Internet and telephone services will NOT be affected. Elevator access will remain available. Emergency lighting and fire safety systems will continue to operate normally throughout the maintenance period.

Parking: The south parking lot will be partially closed to allow access for maintenance vehicles. Tenants are advised to use the north or east entrances.

We apologize for any inconvenience and thank you for your patience and understanding.

For queries, contact the Building Management Office at extension 100 or bmo@westgate.com.

Building Management
Westgate Commercial Center`,
    questions: [
      {
        id: 'r4q1',
        question: 'What type of maintenance is being performed?',
        options: ['Electrical system repairs', 'Elevator upgrades', 'HVAC system maintenance', 'Internet infrastructure work'],
        answer: 'HVAC system maintenance',
        explanation: '"Routine maintenance of the building\'s HVAC (Heating, Ventilation, and Air Conditioning) system".',
      },
      {
        id: 'r4q2',
        question: 'Which service will NOT be affected during the maintenance?',
        options: ['Air conditioning', 'Heating', 'Internet and telephone', 'South parking lot access'],
        answer: 'Internet and telephone',
        explanation: '"Internet and telephone services will NOT be affected."',
      },
      {
        id: 'r4q3',
        question: 'What does the notice recommend tenants do regarding the parking?',
        options: ['Use public transport', 'Use the north or east entrances', 'Arrange for remote work', 'Park on the street'],
        answer: 'Use the north or east entrances',
        explanation: '"Tenants are advised to use the north or east entrances."',
      },
      {
        id: 'r4q4',
        question: 'How long will the maintenance last?',
        options: ['4 hours', '6 hours', '8 hours', '2 hours'],
        answer: '6 hours',
        explanation: 'From 7:00 AM to 1:00 PM = 6 hours.',
      },
    ],
  },
  {
    id: 'r5',
    type: 'letter',
    title: 'Business Letter – Complaint Response',
    difficulty: 2,
    text: `GreenPath Logistics
15 Harbor View Drive
Auckland, New Zealand

April 21

Ms. Patricia Leung
Operations Director
Pacific Retail Group
88 Queen Street, Auckland

Dear Ms. Leung,

Thank you for your letter dated April 14, in which you brought to our attention the delays experienced with your most recent shipments. We sincerely apologize for the inconvenience caused and fully appreciate the impact this has had on your operations.

Upon investigation, we identified that the delays were caused by an unexpected equipment failure at our Auckland distribution center, which has since been fully repaired and tested. We have also implemented additional quality control checks to prevent similar issues in the future.

As a gesture of goodwill, we would like to offer Pacific Retail Group a 15% discount on your next three shipments, in addition to priority processing status for the next six months. These measures are intended to demonstrate our commitment to maintaining a reliable partnership.

We value our long-standing relationship with Pacific Retail Group and are confident that we can continue to meet your logistics needs to the high standard you deserve.

Please do not hesitate to contact me directly on +64 9 555 2200 or at r.hayes@greenpath.co.nz if you would like to discuss this further.

Yours sincerely,

Robert Hayes
Client Relations Manager
GreenPath Logistics`,
    questions: [
      {
        id: 'r5q1',
        question: 'Why did Robert Hayes write this letter?',
        options: ['To request payment for overdue invoices', 'To respond to a complaint about delivery delays', 'To announce new shipping rates', 'To introduce a new logistics service'],
        answer: 'To respond to a complaint about delivery delays',
        explanation: 'He responds to Ms. Leung\'s letter about "delays experienced with your most recent shipments".',
      },
      {
        id: 'r5q2',
        question: 'What caused the shipping delays?',
        options: ['A shortage of drivers', 'Bad weather conditions', 'Equipment failure at the distribution center', 'A customs inspection issue'],
        answer: 'Equipment failure at the distribution center',
        explanation: '"an unexpected equipment failure at our Auckland distribution center" caused the delays.',
      },
      {
        id: 'r5q3',
        question: 'What discount is being offered as compensation?',
        options: ['10% on the next shipment', '15% on the next three shipments', '20% on the next two shipments', '15% for the next six months'],
        answer: '15% on the next three shipments',
        explanation: '"a 15% discount on your next three shipments" is stated clearly in paragraph three.',
      },
      {
        id: 'r5q4',
        question: 'What additional benefit is Ms. Leung\'s company receiving?',
        options: ['Free storage for 3 months', 'A dedicated account manager', 'Priority processing for six months', 'A full refund for the delayed shipments'],
        answer: 'Priority processing for six months',
        explanation: '"priority processing status for the next six months" is mentioned alongside the discount.',
      },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// LISTENING SCRIPTS (audio-only — text used for TTS only, never displayed)
// ─────────────────────────────────────────────────────────────────────────────

export const listeningScripts = [
  {
    id: 'l1',
    type: 'part2',
    title: 'Question-Response – Set A',
    accent: 'US',
    pairs: [
      {
        question: "When is the project deadline?",
        options: ["It's on the third floor.", "Next Friday at 5 PM.", "About twenty people attended."],
        answer: "Next Friday at 5 PM.",
        explanation: '"When" asks for a time. Only "Next Friday at 5 PM" gives a time answer.',
      },
      {
        question: "Who is responsible for the client presentation?",
        options: ["It was very well received.", "Sarah from the marketing team.", "In the conference room."],
        answer: "Sarah from the marketing team.",
        explanation: '"Who" asks for a person. "Sarah from the marketing team" names a person.',
      },
      {
        question: "Would you like to review the contract before signing?",
        options: ["Yes, I'd appreciate having more time to look it over.", "The contract expires in December.", "We have three offices downtown."],
        answer: "Yes, I'd appreciate having more time to look it over.",
        explanation: 'Yes/No question. The first option directly and logically responds to an offer.',
      },
      {
        question: "Why was the meeting rescheduled?",
        options: ["The conference room was booked by another team.", "At two o'clock in the afternoon.", "Mr. Rodriguez will chair the meeting."],
        answer: "The conference room was booked by another team.",
        explanation: '"Why" asks for a reason. "The conference room was booked" gives a direct cause.',
      },
      {
        question: "How many people are expected at the trade fair?",
        options: ["It's held annually in September.", "In the convention center downtown.", "Approximately five hundred exhibitors."],
        answer: "Approximately five hundred exhibitors.",
        explanation: '"How many" asks for a quantity. "Approximately five hundred exhibitors" provides a number.',
      },
      {
        question: "Where should I submit the completed application forms?",
        options: ["The application was approved yesterday.", "Please send them to the HR office by end of day.", "Yes, the forms have been completed."],
        answer: "Please send them to the HR office by end of day.",
        explanation: '"Where" asks for a place/method of submission. Only option B specifies where.',
      },
      {
        question: "Has the new photocopier been installed yet?",
        options: ["The technician is coming tomorrow morning.", "I prefer using the color printer.", "It was installed on the third floor."],
        answer: "The technician is coming tomorrow morning.",
        explanation: 'Yes/No question about whether something happened. "Technician coming tomorrow" implies "not yet" — an indirect answer.',
      },
      {
        question: "How long have you been working on this project?",
        options: ["In the main conference room.", "About six months now.", "Because the client requested it."],
        answer: "About six months now.",
        explanation: '"How long" asks for a duration. "About six months now" is the only duration answer.',
      },
      {
        question: "Could you forward the report to the finance department?",
        options: ["Sure, I'll do that right away.", "The finance department is on the second floor.", "Yes, the report was very informative."],
        answer: "Sure, I'll do that right away.",
        explanation: 'Request question ("Could you...?"). "Sure, I\'ll do that" directly agrees to the request.',
      },
      {
        question: "Whose laptop is this left in the conference room?",
        options: ["It must belong to Mr. Chen — he had a meeting here earlier.", "The conference room is booked until noon.", "I'll check the meeting schedule for you."],
        answer: "It must belong to Mr. Chen — he had a meeting here earlier.",
        explanation: '"Whose" asks about ownership. Identifying the likely owner directly answers the question.',
      },
    ],
  },
  {
    id: 'l2',
    type: 'part3',
    title: 'Conversation: IT Access Problem',
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
        options: ['He cannot find the conference room', 'He cannot access the shared drive', 'He missed a client meeting', 'He lost his login password'],
        answer: 'He cannot access the shared drive',
        explanation: 'The man says: "I\'ve been trying to access the shared drive all morning, but I keep getting an error message."',
      },
      {
        id: 'l2q2',
        question: 'What does the woman suggest doing first?',
        options: ['Contact IT Support', 'Use her computer', 'Ask James for the files', 'Postpone the meeting'],
        answer: 'Contact IT Support',
        explanation: '"Let me call IT Support for you." is the woman\'s first action before mentioning James.',
      },
      {
        id: 'l2q3',
        question: 'What will the woman do if IT cannot fix the problem by 1:30?',
        options: ['Postpone the client meeting', 'Let the man use her computer', 'Contact the client directly', 'Send James to the meeting instead'],
        answer: 'Let the man use her computer',
        explanation: '"If they can\'t fix it by 1:30, I\'ll make sure you can use my computer for the meeting."',
      },
    ],
  },
  {
    id: 'l3',
    type: 'part3',
    title: 'Conversation: Office Relocation',
    accent: 'AU',
    script: `Woman: Have you seen the announcement about the office move? They've confirmed we're relocating to the new building in March.

Man: Yes, I just read the email. I have to say, I'm a bit nervous about the commute. The new location is on the other side of the city from where I live.

Woman: I know what you mean. But apparently the company is arranging shuttle buses from three main transit hubs. Did you see that part?

Man: No, I missed that. That would actually solve my problem — there's a train station near my house that connects to two of those hubs.

Woman: Great. And the new building has much better facilities — a proper gym, a rooftop café, and open-plan floors that are supposed to improve collaboration.

Man: That all sounds positive. I suppose change takes some getting used to, but the new space does sound like an upgrade.`,
    questions: [
      {
        id: 'l3q1',
        question: 'What are the speakers mainly discussing?',
        options: ['A new company policy about remote work', 'An upcoming relocation of their office', 'Changes to the company shuttle schedule', 'New facilities at the current building'],
        answer: 'An upcoming relocation of their office',
        explanation: 'The conversation centers on the company moving to a new building in March.',
      },
      {
        id: 'l3q2',
        question: 'Why is the man concerned about the move?',
        options: ['He dislikes the new building', 'The new location is far from his home', 'He has not read the announcement', 'He is worried about losing his parking spot'],
        answer: 'The new location is far from his home',
        explanation: '"The new location is on the other side of the city from where I live" — he is worried about his commute.',
      },
      {
        id: 'l3q3',
        question: 'What solves the man\'s concern about the commute?',
        options: ['The company is offering remote work days', 'There will be shuttle buses from transit hubs', 'The company is paying relocation allowances', 'The man plans to move closer to the office'],
        answer: 'There will be shuttle buses from transit hubs',
        explanation: '"the company is arranging shuttle buses from three main transit hubs" — a train station near his home connects to these.',
      },
    ],
  },
  {
    id: 'l4',
    type: 'part4',
    title: 'Voicemail Message',
    accent: 'US',
    script: `Hello, this is a message for Ms. Tanaka. My name is David Collins, calling from Premier Events Management. I'm reaching out regarding the annual gala dinner that your company has booked with us for the 18th of November.

I wanted to confirm that we have received your final guest list of 120 people and have adjusted the seating arrangement accordingly. However, I did notice that you mentioned a dietary requirement update in your last email but did not include the specific details.

Could you please call me back or reply by email with the updated dietary information as soon as possible? We need to finalize the menu selections with our catering team by the end of this week at the latest.

You can reach me directly at 555-0192, or respond to the email I sent earlier this morning. Thank you very much, and we look forward to making your event a success.`,
    questions: [
      {
        id: 'l4q1',
        question: 'Why is David Collins calling?',
        options: ['To confirm a payment was received', 'To discuss a missing detail about the event', 'To reschedule the gala dinner date', 'To introduce a new menu option'],
        answer: 'To discuss a missing detail about the event',
        explanation: 'He noticed that dietary requirement details were mentioned in an email but not included — he needs that specific information.',
      },
      {
        id: 'l4q2',
        question: 'What information is David waiting for?',
        options: ['The final guest list', 'The event venue confirmation', 'Dietary requirement details', 'A payment for the event'],
        answer: 'Dietary requirement details',
        explanation: '"you mentioned a dietary requirement update... but did not include the specific details" — he needs this information.',
      },
      {
        id: 'l4q3',
        question: 'What is the deadline David mentions?',
        options: ['November 18th', 'The end of the month', 'The end of this week', 'Tomorrow morning'],
        answer: 'The end of this week',
        explanation: '"We need to finalize the menu selections with our catering team by the end of this week at the latest."',
      },
    ],
  },
  {
    id: 'l5',
    type: 'part4',
    title: 'Company Announcement',
    accent: 'UK',
    script: `Good morning, everyone. I have an important announcement to share with all staff regarding changes to our office access procedures, effective from next Monday.

Starting on Monday, all employees will be required to use the new electronic key card system to access the building. Physical keys will no longer be accepted after Sunday. If you have not yet collected your electronic key card, please visit the reception desk before 5 PM this Friday to pick it up. You will need to bring your employee ID badge for verification.

Additionally, from Monday onwards, all visitors must be registered in the new online visitor management system at least two hours before their arrival. Employees expecting visitors are responsible for completing this registration. Instructions have been sent to your company email addresses this morning.

If you have any questions about either of these changes, please contact the Facilities team at extension 230. Thank you for your cooperation.`,
    questions: [
      {
        id: 'l5q1',
        question: 'What is the main purpose of this announcement?',
        options: ['To introduce a new payroll system', 'To explain changes to building access procedures', 'To announce the opening of a new office', 'To describe updated visitor catering arrangements'],
        answer: 'To explain changes to building access procedures',
        explanation: 'The entire announcement is about new "office access procedures" — key card system and visitor management.',
      },
      {
        id: 'l5q2',
        question: 'By when must employees collect their new key card?',
        options: ['By next Monday morning', 'By end of day Friday', 'By end of day Sunday', 'By Thursday afternoon'],
        answer: 'By end of day Friday',
        explanation: '"please visit the reception desk before 5 PM this Friday to pick it up".',
      },
      {
        id: 'l5q3',
        question: 'How far in advance must visitors be registered?',
        options: ['One hour', 'Two hours', 'Twenty-four hours', 'The day before'],
        answer: 'Two hours',
        explanation: '"all visitors must be registered... at least two hours before their arrival".',
      },
    ],
  },
]
