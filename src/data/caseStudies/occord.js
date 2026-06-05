// Sample case study — OCCORD. Placeholder copy; swap in real content/images.
export const occordCaseStudy = {
  // ── Meta ─────────────────────────────────────────────────────
  date: 'Spring 2024',
  client: 'OCCORD',
  tools: ['Figma', 'React', 'Node.js', 'PostgreSQL'],
  siteUrl: 'https://occord.org',
  siteName: 'occord.org',

  // ── Hero ─────────────────────────────────────────────────────
  layoutConfig: { heroAspectRatio: '16/6' },
  heroImage: { src: '/occord-desktop.png', alt: 'OCCORD website on desktop' },

  // ── Problem ──────────────────────────────────────────────────
  problem: {
    title: 'Problem',
    subtitle: 'A community organization without a digital home',
    description:
      'OCCORD organizes for economic and racial justice across Orange County, but their outdated site made it hard for residents to find programs, share their stories, or take action. The team needed a platform that matched the energy of their on-the-ground work.',
  },

  // ── Goals & Objectives ───────────────────────────────────────
  goalsAndObjectives: {
    title: 'Goals & Objectives',
    intro: 'At the start of the project we aligned on a few clear objectives:',
    items: [
      'Make it effortless for residents to discover and join programs',
      'Center community voices and member stories throughout the site',
      'Give staff a CMS they can update without a developer',
      'Establish a bold, accessible visual identity online',
    ],
  },

  // ── Research ─────────────────────────────────────────────────
  research: {
    title: 'Research',
    intro:
      'We started by listening — to staff, organizers, and the residents the site is meant to serve. Our goal was to understand how people actually find and engage with community organizations online.',
    questions: [
      'How do residents currently learn about OCCORD programs?',
      'What stops people from taking the next step to get involved?',
      'Which stories and outcomes build the most trust?',
    ],
  },

  // ── Research Methods ─────────────────────────────────────────
  researchMethods: {
    title: 'Research Methods',
    description: [
      'We combined qualitative and quantitative methods to build a full picture:',
      '- Stakeholder interviews with staff and lead organizers',
      '- A short survey distributed through existing member channels',
      '- A competitor audit of peer advocacy organizations',
      '- Analytics review of the legacy site',
    ],
    images: [
      { src: '/case-studies/brown-issues.png', alt: 'Competitor audit board' },
      { src: '/case-studies/svaec.jpg', alt: 'Affinity mapping session' },
    ],
  },

  // ── Key Findings ─────────────────────────────────────────────
  keyFindings: {
    title: 'Key Findings',
    content: [
      'Residents trusted people, not pitches — member stories drove far more engagement than program descriptions alone.',
      'Most traffic came from mobile, often shared peer-to-peer, so the experience had to be fast and effortless on a phone.',
      'Staff were bottlenecked by a rigid site they could not update themselves.',
    ],
    image: { src: '/case-studies/seledon-literacy.jpg', alt: 'Key findings summary' },
  },

  // ── Our Solution ─────────────────────────────────────────────
  ourSolution: {
    title: 'Our Solution',
    paragraphs: [
      'We designed and built a mobile-first platform that leads with community stories and routes residents to action in as few taps as possible.',
      'A lightweight CMS lets staff publish programs, events, and stories on their own — no developer required — so the site stays current with their work.',
    ],
    image: { src: '/occord-desktop.png', alt: 'OCCORD solution overview' },
  },

  // ── Visual Direction ─────────────────────────────────────────
  visualDirection: {
    title: 'Visual Direction',
    description:
      'A bold, high-contrast palette and confident typography reflect the urgency of OCCORD’s organizing work, while generous spacing and clear hierarchy keep the experience approachable and accessible.',
    images: [{ src: '/case-studies/brown-issues.png', alt: 'Style tile and palette' }],
  },

  // ── Wireframes / Lo-Fi Designs ───────────────────────────────
  wireframes: {
    title: 'Wireframes / Lo-Fi Designs',
    description:
      'Low-fidelity wireframes let us test the core flows — discovering a program and taking action — before committing to visual design.',
    images: [{ src: '/case-studies/svaec.jpg', alt: 'Low-fidelity wireframes' }],
  },

  // ── High-Fidelity Designs ────────────────────────────────────
  highFidelityDesigns: {
    title: 'High-Fidelity Designs',
    description:
      'The final designs bring the visual direction to life across key screens, with member stories and clear calls to action front and center.',
    images: [{ src: '/occord-desktop.png', alt: 'Final high-fidelity design' }],
  },
}
