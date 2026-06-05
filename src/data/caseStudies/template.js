// ---------------------------------------------------------------------------
// CASE_STUDY_TEMPLATE
// A ready-to-copy object with every field present and clearly labelled.
// Duplicate this into a new file in src/data/caseStudies/, fill in real
// content, and register it in index.js under a slug.
//
// Field notes:
// - Any image with src omitted renders a gray rounded placeholder.
// - `description` / `content` accept a string OR an array of strings.
//   Array items beginning with "-" or "*" render as bullet points.
// - `tools` is a plain array of strings, rendered as text chips.
// - Optional sections (visualDirection, wireframes, highFidelityDesigns)
//   can be omitted entirely and simply won't render.
// ---------------------------------------------------------------------------

export const CASE_STUDY_TEMPLATE = {
  // ── Meta ─────────────────────────────────────────────────────
  date: 'Month Year',
  client: 'Client Name',
  tools: ['Figma', 'React'],
  siteUrl: 'https://example.com',
  siteName: 'example.com',

  // ── Hero ─────────────────────────────────────────────────────
  // layoutConfig.heroAspectRatio: '16/6' (cropped banner) or 'natural' (full image)
  layoutConfig: { heroAspectRatio: '16/6' },
  heroImage: { src: undefined, alt: 'Project hero image' },

  // ── Problem ──────────────────────────────────────────────────
  problem: {
    title: 'Problem',
    subtitle: 'A brief secondary heading for the problem',
    description:
      'Describe the core problem or challenge the client faced and why it mattered.',
  },

  // ── Goals & Objectives ───────────────────────────────────────
  goalsAndObjectives: {
    title: 'Goals & Objectives',
    intro: 'At the start of the project we defined the following objectives:',
    items: [
      'Goal or objective one',
      'Goal or objective two',
      'Goal or objective three',
    ],
    // Alternatively, supply `content: [...]` instead of intro/items.
  },

  // ── Research ─────────────────────────────────────────────────
  research: {
    title: 'Research',
    intro:
      'Describe the research phase — methods, sources, and what we were trying to learn.',
    questions: [
      'What problem are users actually trying to solve?',
      'What are the key pain points in the current experience?',
      'What does success look like for the client and for users?',
    ],
    // Alternatively, supply `content: [...]` instead of intro/questions.
  },

  // ── Research Methods ─────────────────────────────────────────
  researchMethods: {
    title: 'Research Methods',
    description:
      'Describe the specific research methods used — interviews, surveys, analytics, competitor analysis, etc.',
    images: [
      { src: undefined, alt: 'Research method 1' },
      { src: undefined, alt: 'Research method 2' },
    ],
  },

  // ── Key Findings ─────────────────────────────────────────────
  keyFindings: {
    title: 'Key Findings',
    content:
      'Summarise the most important insights discovered during research and how they shaped the direction of the project.',
    image: { src: undefined, alt: 'Key findings visual' },
  },

  // ── Our Solution ─────────────────────────────────────────────
  ourSolution: {
    title: 'Our Solution',
    paragraphs: [
      'First paragraph describing the solution at a high level.',
      'Second paragraph going deeper into the technical or design approach.',
    ],
    image: { src: undefined, alt: 'Our solution visual' },
  },

  // ── Visual Direction (optional) ──────────────────────────────
  visualDirection: {
    title: 'Visual Direction',
    description:
      'Describe the visual language chosen — colour palette, typography, tone, and why these choices serve the project goals.',
    images: [{ src: undefined, alt: 'Moodboard or style tile' }],
  },

  // ── Wireframes / Lo-Fi Designs (optional) ────────────────────
  wireframes: {
    title: 'Wireframes / Lo-Fi Designs',
    description:
      'Walk through the low-fidelity wireframes and the rationale behind key layout decisions.',
    images: [{ src: undefined, alt: 'Wireframe 1' }],
  },

  // ── High-Fidelity Designs (optional) ─────────────────────────
  highFidelityDesigns: {
    title: 'High-Fidelity Designs',
    description:
      'Describe the final high-fidelity designs, key screens, and how they solved the identified problems.',
    images: [{ src: undefined, alt: 'Final design 1' }],
  },
}
