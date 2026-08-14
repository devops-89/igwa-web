export const navData = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'IGWA for Police', path: '/police-dept' },
  { name: 'Contact Us', path: '/contact-us' }
];

export const policeDeptProblemData = {
  overline: "THE PROBLEM",
  title: "Paperwork isn't the job.<br />It's what stands between officers and the job.",
  description: "FIRs, daily case diaries, chargesheets each one manually written, each one a chance for a missed deadline or an inconsistent record.<br /><br /><span style=\"font-weight: 700\">IGWA</span> turns each of these into a guided, largely auto drafted workflow, with the officer always in control of the final version."
};

export const policeDeptHowItWorksData = {
  heading: 'How it works',
  steps: [
    {
      title: 'Review incoming applications',
      description: 'Electronic submissions and scanned walk-ins, in one inbox, with OCR extraction handling the handwritten ones.'
    },
    {
      title: 'Confirm the legal sections',
      description: 'Accept, edit, or override every AI suggestion before anything is registered.'
    },
    {
      title: 'Register the FIR',
      description: 'A unique FIR number generates automatically, no manual numbering, no duplicates.'
    },
    {
      title: 'Assign the case',
      description: 'Instant notification to the investigating officer, full visibility into station wide caseload.'
    },
    {
      title: 'Build the case diary',
      description: 'First entry drafted from uploaded documents, daily updates recorded by voice in the field, locked once finalized.'
    },
    {
      title: 'Generate the chargesheet',
      description: 'Auto-assembled from the FIR, diary, and evidence, with statutory deadline alerts, ready for countersignature.'
    }
  ],
  image: '/images/police/iphone.png'
};

export const policeDeptWhatIgwaDoesData = {
  features: [
    { title: 'Unified application inbox', details: '' },
    { title: 'OCR-powered intake', details: 'Hindi and English at launch.' },
    { title: 'Plain-language legal guidance', details: '' },
    { title: 'Auto-drafted, editable FIR application', details: '' },
    { title: 'Evidence attachment', details: '' },
    { title: 'Live status tracking', details: '' }
  ],
  title: 'What IGWA Does',
  subtitle: 'One platform, two sides of the same process',
  trailingTitle: 'Every AI-assisted step, what was suggested, what was changed, who confirmed it is logged and auditable.',
  trailingSubtitle: 'IGWA is decision support, not decision-making: no document carries legal weight until an officer signs off.',
  buttons: [
    { text: 'Bring IGWA to your station', width: '229px' },
    { text: 'Start with a Pilot', width: '155px' }
  ]
};

export const citizensProblemData = {
  overline: "THE PROBLEM",
  title: "Most people don't know what to write in an FIR.<br />That shouldn't stop them from filing one.",
  description: "Victims are often turned away or delayed simply because an application isn't \"in the right format,\" or because they don't know which sections of law apply.<br /><br /><span style=\"font-weight: 700\">IGWA</span> removes that barrier — you talk, IGWA drafts."
};

export const citizensHowItWorksData = {
  heading: 'How it works',
  steps: [
    {
      title: 'Speak or type',
      description: 'What happened, in Hindi or English — no legal terms needed.'
    },
    {
      title: 'See the likely sections',
      description: 'Sections of law that apply, explained in plain language, each traceable to a verified legal source.'
    },
    {
      title: 'Review your drafted application',
      description: 'Edit anything before you submit.'
    },
    {
      title: 'Submit to any station',
      description: 'IGWA is Zero-FIR aware, so jurisdiction confusion won\'t stop you.'
    },
    {
      title: 'Track your case',
      description: 'Submitted → Under Review → FIR Registered → Assigned → Closed, all visible in real time.'
    },
    {
      title: 'Receive a copy',
      description: 'of the registered FIR electronically, as the law entitles you to.'
    }
  ],
  image: '/images/police/iphone.png'
};

export const citizensWhatIgwaDoesData = {
  features: [
    { title: 'Voice-first reporting', details: '' },
    { title: 'Bilingual support', details: 'Hindi and English at launch.' },
    { title: 'Plain-language legal guidance', details: '' },
    { title: 'Auto-drafted, editable FIR application', details: '' },
    { title: 'Evidence attachment', details: '' },
    { title: 'Live status tracking', details: '' }
  ],
  title: 'What IGWA Does',
  subtitle: 'One platform, two sides of the same process',
  trailingTitle: 'Every legal section shown to you is sourced from a verified, versioned database',
  trailingSubtitle: 'Never guessed by AI and every FIR is registered only after a police officer reviews and confirms it.',
  buttons: [
    { text: 'Start your report', width: '163px' }
  ]
};

export const aboutSharedBannerData = {
  trailingTitle: "If you're trying to make this process better too, we'd like to talk.",
  trailingSubtitle: "",
  buttons: [
    { text: "Partner with Us" },
    { text: "Request a Pilot" }
  ]
};
export const aboutUsHeroData = {
  title: "About IGWA",
  subtitle: "We're not trying to automate justice, We're trying to remove what slows it down.",
  description: "IGWA started with a simple observation: the law doesn't move slowly because people don't care. It moves slowly because the paperwork behind every case is heavy, repetitive, and unforgiving of small mistakes — and that weight falls on both the citizen filing a report and the officer processing it.",
  scrollText: "Scroll to Explore"
};

export const aboutUsOurStoryData = {
  overline: "OUR STORY",
  title: "Built from watching the process, not guessing at it.",
  paragraph1: "Filing an FIR sounds simple until you're the one doing it, either as someone who doesn't know which section of law applies to what just happened to them, or as an officer who has to translate a stressful, half-clear account into a legally precise document, then repeat that structure for the case diary, and again for the chargesheet, all while a statutory clock is running.",
  paragraph2Highlight: "IGWA",
  paragraph2Rest: " was built to sit inside that exact gap, not to replace the judgment at either end of it, but to handle the drafting, the section-matching, and the paperwork structure so that judgment has room to actually happen."
};

export const aboutUsWeAreBuildingData = {
  topSubheading: "What We're Building Toward.......",
  topTitle: "A system that grows with the process it serves.",
  topDescription: "IGWA today handles FIR drafting, case diaries, and chargesheets. What's next — CCTNS integration, direct court e-filing, and broader regional language support — is built around the same principle: extend the system to match how justice actually moves in India, not the other way around.",
  bottomTitle: "Grounded in the people who'll actually rely on it.",
  bottomDescriptionPart1: "Every statutory mapping and document format in ",
  bottomDescriptionHighlight: "IGWA",
  bottomDescriptionPart2: " is developed in consultation with legal domain experts and, wherever possible, serving police personnel — because a system built around BNSS and BNS, 2023 only earns trust if it's validated by the people accountable to that law every day."
};

export const aboutUsWhatWeBelieveData = {
  sectionTitle: "What We Believe",
  cards: [
    {
      id: 1,
      title: "The law should be legible, not just enforceable",
      description: "A citizen shouldn't need a lawyer to understand what they're allowed to report.",
      watermarkOrientation: "horizontal"
    },
    {
      id: 2,
      title: "Speed and accuracy aren't a trade-off.",
      description: "Faster paperwork should mean fewer errors, not more of them.",
      watermarkOrientation: "vertical"
    },
    {
      id: 3,
      title: "AI drafts. Humans decide.",
      description: "Every legal fact IGWA surfaces is retrieved, cited, and traceable — never invented — and every document requires a human sign-off before it means anything.",
      watermarkOrientation: "vertical"
    },
    {
      id: 4,
      title: "Accountability is a feature, not a constraint.",
      description: "Immutable case diaries and full audit trails aren't compliance checkboxes — they're what make the system trustworthy enough to use.",
      watermarkOrientation: "horizontal"
    }
  ]
};
export const citizensHeroData = {
  title: "IGWA for Citizens",
  subtitle: "Report what happened. We'll help you say it right.",
  description: "You shouldn't need to know the law to report a crime. Describe it in your own words. IGWA handles the legal language and drafts your FIR application for you.",
  buttons: [
    { text: "Report an Incident" },
    { text: "See How It Works" }
  ],
  scrollText: "Scroll to Explore"
};
export const contactUsHeaderData = {
  overline: "CONTACT US",
  title: "Get in Touch with Us !",
  description: "Have a question, feedback, or need help ? We'd love to hear from you! <br />Fill out the form below or reach out directly using any of our contact details."
};

export const contactUsInfoData = {
  officeHoursTitle: "Office hours and support",
  officeHoursTime: "Monday - Saturday , 9:00 AM - 6:00 PM EST",
  phone: "+91-8882158983",
  email: "igwa@gmail.com",
  officeName: "igwa office",
  officeLocation: "new delhi, india",
  buttonText: "Get Direction"
};

export const contactUsFormData = {
  nameLabel: "Your Name",
  emailLabel: "Mail",
  phoneLabel: "Phone Number",
  messageLabel: "Message",
  messagePlaceholder: "Enter your query here...",
  checkboxTextPart1: "I agree to the terms of your ",
  checkboxLinkText: "Privacy policy",
  checkboxTextPart2: ".*",
  submitButtonText: "SUBMIT"
};
export const policeDeptHeroData = {
  title: "IGWA for Police Departments",
  subtitle: "Less time drafting. More time investigating.",
  description: "From FIR registration to chargesheet filing, IGWA handles the paperwork layer of a case so your officers spend their hours on the investigation, not the form.",
  buttons: [
    { text: "Request a Pilot" },
    { text: "See the Workflow" }
  ],
  scrollText: "Scroll to Explore"
};
export const productsHowEngineWorksData = {
  title: "How the engine works",
  steps: [
    {
      title: "Classification, not generation",
      description: "Incoming descriptions are matched against a structured legal database to identify likely applicable sections; nothing is produced from the model's own \"knowledge\" of the law."
    },
    {
      title: "Retrieval with citations",
      description: "Every section shown links back to its exact source and version, so it can always be traced and verified."
    },
    {
      title: "Drafting, within limits",
      description: "The AI composes clear, structured language for FIRs, diary entries, and chargesheets, using only confirmed facts and citations, never invented ones"
    },
    {
      title: "Full audit logging",
      description: "Every input, retrieval, and generated draft is recorded, along with every human edit made on top of it."
    }
  ]
};

export const productsHumanInTheLoopData = {
  part1: "This is what ",
  highlight: "\"Human in the loop\"",
  part2: " means at",
  part3: "IGWA, not a disclaimer, but the actual",
  part4: "architecture."
};

export const productsUnderTheHoodData = {
  title: "What's Actually Under the Hood",
  subtitle: "The AI drafts. It never decides.",
  description: "IGWA's engine is built on one hard rule: no legal fact is ever freely generated. Every section number, citation, and statutory reference comes from a verified, versioned legal database — the AI's job is to find and explain it, not to invent it.",
  scrollText: "Scroll to Explore"
};

export const productsWhyThisMattersData = {
  overline: "Why this matters",
  titlePart1: "In a legal document, \"probably right\"",
  titlePart2: "isn't good enough.",
  description: "A general-purpose AI model can produce a fluent, confident answer that's still legally wrong. IGWA's engine is deliberately constrained to prevent exactly that — it can only ever surface what's actually in the legal database, and it can never register, finalize, or file anything without an explicit human action."
};

export const heroData = {
  title: 'Paperwork, Drafted Faster. Investigation, Uninterrupted.',
  subtitle: 'FIRs, Case Diaries and Chargesheets — drafted in minutes, in accordance with BNSS and BNS.',
  description1: 'Speak your statement or type it. In Hindi or English.',
  description2: 'IGWA transforms your information in minutes into a well-organized, legally compliant draft, including preliminary suggestions for the relevant sections of BNS and BNSS, 2023.',
  description3: 'The decision is yours. The investigation is yours. The final approval is also yours.',
  description4: 'IGWA only prepares the draft. Every document is considered valid only when the concerned officer personally reviews and approves it.',
  tagline: 'Speed of AI. Discretion of the Officer.',
  appStoreBtn: 'Download on the App Store',
  googlePlayBtn: 'Get it on Google Play'
};

export const problemData = {
  title: 'Every hour counts. It belongs to investigation, not typing.',
  stats: [
    'One FIR.',
    'Dozens of diary entries.',
    'Hundreds of pages of chargesheet.'
  ],
  description1: 'With every case, paperwork piles up, while deadlines under BNSS have only gotten stricter.',
  description2: 'Hours are spent on typing, copy-pasting, and formatting—time that should be spent gathering evidence, interviewing witnesses, and advancing the investigation.',
  conclusion: 'IGWA solves this.',
  note: 'It does not make decisions for the officer. It only makes the documentation process faster, organized, and more reliable.'
};

export const whatIgwaDoesData = {
  section1: {
    title: 'Speak from the field. The diary updates itself.',
    point1: 'Investigations don\'t always happen at a desk.',
    point2: 'Record your case updates in Hindi or English from wherever you are.',
    point3Title: 'Professional Draft',
    point3: 'IGWA instantly converts it into a well-structured, dated, and professional case diary entry.',
    point4Title: 'Stress-free Work',
    point4: 'No re-typing after a long duty. No worrying about formatting. And no burden of "we\'ll do it tomorrow".'
  },
  section2: {
    title: 'What IGWA Does',
    subtitle: 'One platform. Every document. Every stage.',
    features: [
      {
        title: 'Smart FIR Drafting',
        description: 'A citizen\'s statement—whether written or recorded via voice—is transformed into an FIR draft in minutes. Initial suggestions of relevant BNS sections are automatically added, which the officer ultimately verifies.'
      },
      {
        title: 'Chargesheets: A process of assembling, not rewriting.',
        description: 'By connecting the FIR, case diary, witness statements, and available documents, IGWA prepares a well-organized chargesheet draft. It tracks filing deadlines. So the officer\'s time is spent on review, not writing.'
      },
      {
        title: 'Case Diary, updated every day.',
        description: 'The first diary entry is prepared based on available documents. After that, officers add daily updates simply by speaking or typing. Once approved, the entry is securely locked, maintaining the integrity of the record.'
      }
    ]
  }
};

export const socialProofData = {
  title: 'Built with the people who do this every day.',
  description1: 'IGWA is not built like a generic AI tool.',
  description2: 'It is developed with the advice of domain experts and, wherever possible, serving police officers, so that every workflow aligns with actual police procedures.',
  description3: 'From FIR to case diary and chargesheet—',
  description4: 'Every document, every format, and every legal section-mapping is tested against actual BNS and BNSS requirements.',
  description5: 'Because reliable technology is the one that understands ground realities.'
};

export const ctaData = {
  title: 'Give your officers their most valuable resource back.',
  subtitle: 'Time.',
  description1: 'The time that goes into typing today.',
  description2: 'So that tomorrow, that same time shows up in better investigations, faster action, and stronger prosecution.',
  description3: 'Whether it\'s registering a new FIR, completing the daily diary, or filing a chargesheet on time—',
  description4: 'IGWA takes over where the real work of your station begins.',
  btnText: 'Implement IGWA in your department'
};

export const faqData = {
  title: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'Does IGWA replace an officer?',
      answer: 'No. IGWA only assists in preparing documents. Every legal decision and final approval remains entirely with the concerned officer.'
    },
    {
      question: 'Does this save time in preparing the case diary?',
      answer: 'Yes. By automating repetitive writing and formatting tasks, officers can dedicate more of their time to the investigation.'
    },
    {
      question: 'Can senior officers review all documents?',
      answer: 'Absolutely. Every draft is available for review, revision, and counter-signature.'
    },
    {
      question: 'Can the suggested legal sections be relied upon?',
      answer: 'Section suggestions are provided based on verified legal databases. However, final confirmation and selection is always done by the police officer.'
    },
    {
      question: 'Can IGWA work with existing police record systems?',
      answer: 'Yes. It can be integrated with departmental workflows and record systems as per requirement.'
    },
    {
      question: 'Is the department\'s data kept secure?',
      answer: 'Yes. Security and privacy are designed with priority in accordance with government use.'
    },
    {
      question: 'Who can see my information?',
      answer: 'Only authorized and permitted users get access to the relevant data.'
    }
  ]
};

export const footerData = {
  productTitle: 'Product',
  productLinks: [
    'How it works',
    'For Citizens',
    'For Police Departments'
  ],
  securityTitle: 'Security',
  securityLinks: [
    'Data Protection',
    'Privacy Policy',
    'Terms of Use'
  ],
  legalTitle: 'Legal',
  legalLinks: [
    'BNS & BNSS Basis',
    'Compliance'
  ],
  contactTitle: 'Contact',
  contactLinks: [
    'Partner with Us',
    'Request a Pilot',
    'Support'
  ],
  importantNoticeTitle: 'Important Notice',
  importantNotice1: 'IGWA is an AI-assisted drafting and decision-support system.',
  importantNotice2: 'It is not a substitute for the legal judgment of a police officer, investigating officer, or judicial authority.',
  importantNotice3: 'Every document generated by AI is only considered official after it has been reviewed and explicitly approved by the concerned officer.',
  tagline: 'AI-assisted drafting. Human-verified justice.',
  copyright: 'Copyright © 2026 IGWA. All rights reserved.'
};

export const footerSitemapData = [
  {
    title: 'Home',
    path: '/',
    links: [
      { name: 'Features', hash: '#features' },
      { name: 'What IGWA Does', hash: '#what-igwa-does' },
      { name: 'Social Proof', hash: '#social-proof' },
      { name: 'FAQ', hash: '#faq' }
    ]
  },
  {
    title: 'About Us',
    path: '/about',
    links: [
      { name: 'Our Story', hash: '#our-story' },
      { name: 'What We Believe', hash: '#what-we-believe' },
      { name: 'What We\'re Building', hash: '#we-are-building' }
    ]
  },
  {
    title: 'Products',
    path: '/products',
    links: [
      { name: 'Under the Hood', hash: '#under-the-hood' },
      { name: 'How Engine Works', hash: '#how-engine-works' },
      { name: 'Why This Matters', hash: '#why-this-matters' },
      { name: 'Human in the Loop', hash: '#human-in-the-loop' }
    ]
  },
  {
    title: 'IGWA for Police',
    path: '/police-dept',
    links: [
      { name: 'The Problem', hash: '#problem' },
      { name: 'How It Works', hash: '#how-it-works' },
      { name: 'Features', hash: '#features' }
    ]
  },
  {
    title: 'Contact Us',
    path: '/contact-us',
    links: [
      { name: 'Contact Form', hash: '#contact-form' },
      { name: 'Contact Info', hash: '#contact-info' }
    ]
  }
];
