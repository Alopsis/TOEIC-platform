export const practiceTests = [
  {
    id: 'mini-1',
    type: 'mini',
    title: 'Mini Test 1',
    subtitle: 'Grammar & Vocabulary Focus',
    duration: 10,
    xpReward: 200,
    questions: [
      {
        id: 'mt1q1',
        part: 5,
        type: 'mcq',
        question: 'The marketing department _____ a comprehensive plan for the new product launch.',
        options: ['A) develops', 'B) developed', 'C) has developed', 'D) developing'],
        answer: 'C) has developed',
        explanation: 'Context implies a recently completed action with present relevance → Present Perfect "has developed".',
      },
      {
        id: 'mt1q2',
        part: 5,
        type: 'mcq',
        question: 'Employees are reminded that all travel expenses must _____ within 30 days.',
        options: ['A) reimburse', 'B) be reimbursed', 'C) reimbursed', 'D) reimbursing'],
        answer: 'B) be reimbursed',
        explanation: 'Modal passive: "must be + past participle". The subject (expenses) receives the action.',
      },
      {
        id: 'mt1q3',
        part: 5,
        type: 'mcq',
        question: 'The conference _____ from three days to two days due to budget constraints.',
        options: ['A) shortened', 'B) was shortening', 'C) was shortened', 'D) has shortening'],
        answer: 'C) was shortened',
        explanation: 'Past passive: "was + past participle". The conference was shortened by someone else.',
      },
      {
        id: 'mt1q4',
        part: 5,
        type: 'mcq',
        question: '_____ the project was completed on time, the client was not entirely satisfied with the results.',
        options: ['A) Because', 'B) Although', 'C) Therefore', 'D) Furthermore'],
        answer: 'B) Although',
        explanation: '"Although" introduces a concessive clause showing contrast between completion on time and client dissatisfaction.',
      },
      {
        id: 'mt1q5',
        part: 5,
        type: 'mcq',
        question: 'The new policy will take _____ on the first day of next month.',
        options: ['A) effect', 'B) affect', 'C) effective', 'D) effectively'],
        answer: 'A) effect',
        explanation: '"Take effect" is the fixed phrase meaning "to become operative". "Affect" is a verb; "effect" is a noun here.',
      },
      {
        id: 'mt1q6',
        part: 5,
        type: 'mcq',
        question: 'Mr. Thompson is _____ for overseeing all international operations.',
        options: ['A) responsive', 'B) responsible', 'C) response', 'D) respond'],
        answer: 'B) responsible',
        explanation: '"Responsible for" is the correct collocation. "Responsive" means reacting quickly, "response" is a noun.',
      },
      {
        id: 'mt1q7',
        part: 5,
        type: 'mcq',
        question: 'The company has been in _____ for over fifty years.',
        options: ['A) operate', 'B) operational', 'C) operation', 'D) operating'],
        answer: 'C) operation',
        explanation: '"In operation" is the fixed phrase. After "in" we need a noun → "operation".',
      },
      {
        id: 'mt1q8',
        part: 5,
        type: 'mcq',
        question: 'Sales figures from last quarter _____ that customer demand is growing.',
        options: ['A) indicate', 'B) indicates', 'C) indication', 'D) indicative'],
        answer: 'A) indicate',
        explanation: 'The subject "sales figures" is plural → plural verb "indicate". "Indicates" would be for singular subjects.',
      },
      {
        id: 'mt1q9',
        part: 5,
        type: 'mcq',
        question: 'Candidates _____ interviewed will be notified by email within one week.',
        options: ['A) who not', 'B) not', 'C) who are not', 'D) not who are'],
        answer: 'C) who are not',
        explanation: 'Relative clause with negation: "Candidates who are not interviewed" = those who do not get an interview.',
      },
      {
        id: 'mt1q10',
        part: 5,
        type: 'mcq',
        question: 'The training session has been _____ to next Tuesday due to the speaker\'s illness.',
        options: ['A) postponed', 'B) cancelled', 'C) delayed to', 'D) rescheduled with'],
        answer: 'A) postponed',
        explanation: '"Postponed to" means moved to a later date. While "rescheduled" is also possible, "rescheduled to" is the correct preposition (not "with").',
      },
    ],
  },
  {
    id: 'mini-2',
    type: 'mini',
    title: 'Mini Test 2',
    subtitle: 'Reading Comprehension',
    duration: 12,
    xpReward: 220,
    questions: [
      {
        id: 'mt2q1',
        part: 7,
        type: 'reading',
        passage: `From: Marcus Webb <m.webb@freshfoods.com>
To: Supplier Relations <suppliers@freshfoods.com>
Subject: New Ordering Procedure – Effective Immediately
Date: March 21

Dear Valued Suppliers,

Please be advised that Fresh Foods Ltd. is implementing a new ordering procedure effective March 28. All orders must now be placed through our new online supplier portal at portal.freshfoods.com.

The previous email-based ordering system will be discontinued as of that date. Any orders received via email after March 27 will not be processed. Suppliers who have not yet registered on the portal must do so no later than March 26 to ensure uninterrupted service.

To register, visit the portal URL above and use your supplier ID number (found on any recent invoice). If you experience any difficulties, contact our Supplier Relations team at suppliers@freshfoods.com or by phone at ext. 2240.

Thank you for your continued cooperation.

Marcus Webb
Procurement Manager, Fresh Foods Ltd.`,
        question: 'Why was this email sent?',
        options: [
          'A) To announce changes to payment terms',
          'B) To inform suppliers of a new ordering system',
          'C) To introduce a new supplier relations manager',
          'D) To request updated supplier information',
        ],
        answer: 'B) To inform suppliers of a new ordering system',
        explanation: 'The email announces: "implementing a new ordering procedure" and explains the new portal.',
      },
      {
        id: 'mt2q2',
        part: 7,
        type: 'reading',
        passageRef: 'mt2q1',
        question: 'What will happen to orders placed by email after March 27?',
        options: [
          'A) They will be processed with a delay',
          'B) They will be forwarded to the portal automatically',
          'C) They will not be processed',
          'D) They will require phone confirmation',
        ],
        answer: 'C) They will not be processed',
        explanation: '"Any orders received via email after March 27 will not be processed."',
      },
      {
        id: 'mt2q3',
        part: 7,
        type: 'reading',
        passageRef: 'mt2q1',
        question: 'What do suppliers need to register on the portal?',
        options: [
          'A) Their bank account details',
          'B) Their supplier ID number',
          'C) A new username created by Fresh Foods',
          'D) A reference letter from their manager',
        ],
        answer: 'B) Their supplier ID number',
        explanation: '"use your supplier ID number (found on any recent invoice)" to register.',
      },
      {
        id: 'mt2q4',
        part: 7,
        type: 'reading',
        passageRef: 'mt2q1',
        question: 'What is the latest date for suppliers to register on the portal?',
        options: ['A) March 21', 'B) March 26', 'C) March 27', 'D) March 28'],
        answer: 'B) March 26',
        explanation: '"must do so no later than March 26 to ensure uninterrupted service".',
      },
      {
        id: 'mt2q5',
        part: 7,
        type: 'reading',
        passage: `NOTICE TO ALL TENANTS
Westgate Commercial Center

Routine maintenance of the building's HVAC (Heating, Ventilation, and Air Conditioning) system will be carried out on Thursday, April 10, from 7:00 AM to 1:00 PM.

During this time, air conditioning and heating services will be temporarily unavailable throughout the building. We recommend that tenants dress accordingly and, if possible, schedule non-essential tasks for that morning.

Internet and telephone services will NOT be affected. Elevator access will remain available. Emergency lighting and fire safety systems will continue to operate normally throughout the maintenance period.

We apologize for any inconvenience and thank you for your patience.

For queries, contact the Building Management Office at extension 100.

Building Management
Westgate Commercial Center`,
        question: 'What is the purpose of this notice?',
        options: [
          'A) To announce an emergency evacuation procedure',
          'B) To inform tenants of a planned maintenance shutdown',
          'C) To introduce new building regulations',
          'D) To report a technical failure in the building',
        ],
        answer: 'B) To inform tenants of a planned maintenance shutdown',
        explanation: 'The notice informs tenants of "routine maintenance" that will temporarily affect HVAC systems.',
      },
    ],
  },
  {
    id: 'section-listening',
    type: 'section',
    title: 'Listening Section Test',
    subtitle: 'Parts 1–4 simulation',
    duration: 45,
    xpReward: 400,
    questions: [
      {
        id: 'sl1',
        part: 2,
        type: 'listening-mcq',
        script: 'Where should I submit the completed application forms?',
        question: 'Choose the most appropriate response.',
        options: [
          'A) The application was approved yesterday.',
          'B) Please send them to the HR office by the end of the day.',
          'C) Yes, the forms have been completed.',
        ],
        answer: 'B) Please send them to the HR office by the end of the day.',
        explanation: '"Where" asks for a location/method. Only option B specifies where to submit the forms.',
      },
      {
        id: 'sl2',
        part: 2,
        type: 'listening-mcq',
        script: 'Has the new photocopier been installed yet?',
        question: 'Choose the most appropriate response.',
        options: [
          'A) The technician is coming tomorrow morning.',
          'B) I prefer using the color printer.',
          'C) It was installed on the third floor.',
        ],
        answer: 'A) The technician is coming tomorrow morning.',
        explanation: 'Yes/No question about whether something has happened. A logically responds with an indirect "not yet" (technician coming tomorrow).',
      },
      {
        id: 'sl3',
        part: 2,
        type: 'listening-mcq',
        script: "How long have you been working on this project?",
        question: 'Choose the most appropriate response.',
        options: [
          'A) In the main conference room.',
          'B) About six months now.',
          'C) Because the client requested it.',
        ],
        answer: 'B) About six months now.',
        explanation: '"How long" asks for a duration. "About six months now" gives the correct type of answer.',
      },
    ],
  },
]

export const fullTest = {
  id: 'full-1',
  type: 'full',
  title: 'Full TOEIC Simulation',
  subtitle: '200 questions – 2 hours',
  duration: 120,
  xpReward: 1000,
  sections: {
    listening: { parts: [1, 2, 3, 4], totalQuestions: 100 },
    reading: { parts: [5, 6, 7], totalQuestions: 100 },
  },
}
