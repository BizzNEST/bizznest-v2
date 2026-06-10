// DEMO – remove before going to production
export const svaecCaseStudy = {
  date: 'Fall 2025',
  client: 'SVAEC',
  tools: ['Figma', 'Adobe CC', 'WordPress'],
  siteUrl: 'https://svaec.org/',
  siteName: 'SVAEC',

  heroImage: { src: '/images/svaec-hero.webp', alt: 'SVAEC Website Mockup', position: 'center 20%' },

  problem: {
    subtitle: "The previous site's structure and content issues limited usability for adult learners",
    description:
      "When we first looked at the SVAEC website, it was clear the information people needed was technically there, but almost impossible to actually find. The site was full of outdated content, broken links, and long paragraphs that made navigation overwhelming, especially for the audience who relied on it most: adult learners, many from older age groups and with varying literacy levels.",
  },

  goalsAndObjectives: {
    intro: 'Going into the project, our team aligned on a few core goals to guide every decision:',
    items: [
      'Simplify navigation to help learners easily find programs, and resources.',
      'Improve scalability by creating a clear visual hierarchy and simple components that makes content easier to digest.',
      'Strengthen action paths with clear CTAs for finding classes, exploring schools, and taking next steps.',
      'Refresh the visual identity with a modern, minimal look that feels welcoming and easy to use.',
      'This became our north star throughout the project.',
    ],
  },

  research: {
    intro:
      'Before we made any decisions, we wanted to deeply understand what learners were struggling with. To guide the redesign, we focused on answering three core questions:',
    questions: [
      'Who are our users? (age range, tech comfort levels)',
      'What information do they care about most?',
      'How easily can they navigate the current site to find it?',
    ],
  },

  researchMethods: {
    description:
      'To answer these questions, we used a survey research: Quantitative Survey (58 learners): We collected responses through a Google Form that asked learners about their age range, what information they prioritize, and how easy the current site is to navigate:',
    images: [
      { src: '/images/svaec-usability-notes.svg', alt: 'Usability session notes' },
      { src: '/images/svaec-survey-results.svg', alt: 'Survey results chart' },
      { src: '/images/svaec-audit-scorecard.svg', alt: 'Heuristic audit scorecard' },
    ],
  },

  keyFindings: {
    content:
      'As we dug into the data, a few things stood out: Age + Tech literacy: Our users span a wide age range, with most between 35-54 and many 55+, which meant we needed to keep things simple, structured, and tech-friendly. Clear information priorities: Users cared most about course info, followed by career exploration and resources/services. Navigation barriers: Dense text, unclear hierarchy, and hidden CTAs made it hard for learners to find what they needed or complete tasks.',
    image: { src: '/images/svaec-key-findings.webp', alt: 'Old SVAEC homepage with annotated issues' },
  },

  ourSolution: {
    paragraphs: [
      "Create a modern, accessible design that guides learners to programs and resources faster. Our goal wasn't to just 'make it look better.' We wanted to create a site that truly supported learners, guiding them, not confusing them.",
      'We rebuilt the SVAEC website around a simple idea: Help users find what they need in as few steps (and as little text) as possible.',
      'This meant reorganizing content, restructuring pathways, reducing cognitive load, and redesigning patterns that would support the way adult learners actually browse. The result is a modern, intuitive, and accessible website that helps learners move from curiosity to clarity to action without feeling lost.',
    ],
    image: { src: '/images/svaec-solution.webp', alt: 'Annotated new SVAEC homepage' },
  },

  visualDirection: {
    description:
      'Once we aligned on the research and structure, we explored multiple visual directions. My team and I developed four style tile options to help the client choose the tone that best reflected the organization from typography and color all the way down to the feel of the site. Having this direction early made the next steps smoother and more intentional.',
    images: [
      { src: '/images/svaec-visual-direction-1.webp', alt: 'SVAEC style tile explorations' },
      { src: '/images/svaec-visual-direction-2.webp', alt: 'SVAEC design exploration board' },
    ],
  },

  wireframes: {
    description: [
      "Lo-fi wireframes were produced in Figma over five days and reviewed in two rounds with the client's product team. We deliberately kept them in greyscale to focus feedback on layout and flow rather than aesthetics. Key screens included the new onboarding sequence, the unified Spaces dashboard, and the redesigned mobile navigation pattern.",
    ],
    images: [
      { src: '/images/svaec-lofi.webp', alt: 'SVAEC lo-fi wireframes' },
    ],
  },

  highFidelityDesigns: {
    description:
      'High-fidelity designs were delivered as a fully interactive Figma prototype covering all primary user flows. The design system was published as a shared Figma library containing 120+ components across 14 categories, each annotated with usage guidelines. Final screens were handed off with a comprehensive spec document and a recorded walkthrough video for the engineering team.',
    images: [
      { src: '/images/svaec-hifi.webp', alt: 'SVAEC high-fidelity designs' },
    ],
  },
}
