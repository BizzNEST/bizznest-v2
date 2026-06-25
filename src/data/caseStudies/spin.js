export const spinCaseStudy = {
  date: 'JAN 2025',
  client: 'Special Parents Information Network (SPINSC)',
  tools: ['Figma', 'Adobe Creative Cloud', 'Squarespace', 'Asana'],
  siteUrl: 'https://www.spinnc.org/',
  siteName: 'spinnc.org',

  heroImage: { src: '/images/spin-hero.webp', alt: 'SPIN Website Redesign' },

  problem: {
    description:
      'The previous SPIN website created friction for users attempting to access programs, support resources, and community information. The site relied heavily on outdated layouts, inconsistent spacing, and downloadable PDF flyers that made navigation feel overwhelming—especially for families searching for information quickly on mobile devices.',
  },

  goalsAndObjectives: {
    intro:
      'At the beginning of the redesign process, our team aligned on several core goals to guide every design decision throughout the project:',
    items: [
      'Simplify navigation and reduce cognitive overload',
      'Improve readability and accessibility across devices',
      'Modernize the visual identity while maintaining a welcoming tone for users',
      'Replace PDF-heavy communication with web-native layouts',
      'Create clearer pathways to resources, events, and participation opportunities',
      'Improve responsiveness for mobile users',
      'Establish stronger visual hierarchy and scalable content structures',
    ],
  },

  research: {
    content: [
      'Due to project timelines and internship constraints, our team focused on rapid iterative design informed by heuristic evaluation, stakeholder feedback, accessibility considerations, and collaborative critique.',
      'To guide the redesign, we focused on understanding:',
      '- Which features experienced the most friction navigating SPIN',
      '- Which information needed clearer prioritization',
      '- How to create a more welcoming and accessible experience for families',
      'Our audit of the previous website revealed recurring usability issues including inconsistent layouts, dense text blocks, unclear hierarchy, and fragmented content organization.',
    ],
  },

  researchMethods: {
    description:
      'Our audit examined the previous SPIN website across navigation patterns, content hierarchy, mobile responsiveness, and accessibility. Screenshots and annotations from this audit were used to document specific friction points and inform our redesign priorities.',
    images: [
      { src: '/images/spin-research-1.webp', alt: 'SPIN old site audit — homepage' },
      { src: '/images/spin-research-2.webp', alt: 'SPIN old site audit — resources page' },
      { src: '/images/spin-research-3.webp', alt: 'SPIN old site audit — mobile view' },
    ],
  },

  keyFindings: {
    content: [
      '- Mobile navigation and readability needed significant improvement and responsiveness',
      '- Dense layouts created unnecessary cognitive overload for users and obstructed user-flow',
      '- Stronger call-to-action placement was needed to guide participation and engagement',
      '- Important resources and information were difficult to locate quickly and were easily lost',
      '- PDF flyers interrupted usability and reduced accessibility',
      '- The site lacked consistent visual structure and spacing systems that discouraged attention-span',
      'These findings confirmed the need for a cleaner, more intuitive experience centered around clarity and accessibility.',
    ],
    image: { src: '/images/spin-key-findings.webp', alt: 'SPIN key findings visual' },
  },

  ourSolution: {
    paragraphs: [
      "Our redesign focused on creating a modern, accessible, and scalable website experience that better supported SPIN's mission and community needs.",
      'We reorganized content into clearer layouts, simplified navigation pathways, and introduced stronger visual hierarchy systems to improve readability across devices. The redesign also replaced fragmented PDF-based communication with more digestible web-native content structures.',
      'By prioritizing accessibility, whitespace, responsiveness, and consistent component design, the final experience became significantly easier to navigate while maintaining a welcoming and community-oriented tone.',
    ],
    image: { src: '/images/spin-solution.webp', alt: 'SPIN redesigned website' },
  },

  visualDirection: {
    description: [
      'Once the overall structure and usability goals were established, the team explored visual directions that balanced professionalism, warmth, and accessibility.',
      'The final direction emphasized:',
      '- bold and readable typography',
      '- stronger spacing systems',
      '- lean mobile-first layouts',
      '- approachable photography',
      '- simplified navigation patterns',
      '- accessible contrast and hierarchy',
      "This visual system helped modernize SPIN's digital presence while creating a more inviting experience for families and community members.",
    ],
    images: [{ src: '/images/spin-visual-direction.webp', alt: 'SPIN visual direction board' }],
  },

  wireframes: {
    title: 'Style Tile Exploration',
    description: [
      'To explore possible visual identities for the redesign, we created multiple style tile concepts that experimented with different approaches to hierarchy, branding, and user experience design.',
      'Each direction tested:',
      '- typography choices',
      '- layout rhythm',
      '- component styling',
      '- visual hierarchy',
      '- accessibility considerations',
      '- emotional tone',
      'These explorations helped align the team and stakeholders before moving into final interface refinement and implementation.',
    ],
    images: [{ src: '/images/spin-style-tiles.webp', alt: 'SPIN style tile explorations' }],
  },

  highFidelityDesigns: {
    description: [
      'After aligning on the visual direction and style system, we refined the experience into fully responsive high-fidelity designs in Figma. The final interface focused on creating a cleaner and more approachable experience through:',
      '- stronger visual hierarchy',
      '- accessible typography',
      '- consistent spacing systems',
      '- responsive layouts',
      '- clearer calls to action',
      '- simplified navigation patterns',
      "The redesign emphasized clarity and usability across both desktop and mobile experiences while modernizing SPIN's digital presence in a way that felt warm and welcoming.",
    ],
    images: [
      { src: '/images/spin-hifi-1.webp', alt: 'SPIN high-fidelity designs' },
      { src: '/images/spin-hifi-2.webp', alt: 'SPIN high-fidelity designs — mobile' },
    ],
  },
}
