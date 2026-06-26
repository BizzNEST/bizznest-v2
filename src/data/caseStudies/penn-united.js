export const pennUnitedCaseStudy = {
  date: 'March–July 2025',
  client: 'Pennsylvania United',
  tools: ['Figma', 'Adobe Creative Cloud', 'Asana', 'WordPress'],
  siteUrl: 'https://paunited.org/',
  siteName: 'paunited.org',

  heroImage: { src: '/images/penn-united-hero.webp', alt: 'Pennsylvania United Website', position: 'center 60%' },

  problem: {
    subtitle:
      'The client\'s digital presence was outdated and relevant information needed to be streamlined. The website refresh focused on creating new designs based off existing brand guidelines.',
    description: [
      'When we first reviewed the Pennsylvania United website, we found that it contained large bodies of text that felt overwhelming and difficult to scan.',
      'The experience lacked consistency and ease of navigation, making it challenging for users to quickly find the information they needed.',
    ],
  },

  goalsAndObjectives: {
    intro: 'At the start of the project, the team aligned on a set of guiding goals that would shape every design decision throughout the process:',
    items: [
      'Simplify navigation so users can quickly and easily find chapters and resources',
      'Improve scannability by creating a clear visual hierarchy',
      'Strengthen user pathways with clear calls to action that guide users toward next steps',
      'Refresh the visual design by incorporating colors and elements that align with the organization\'s existing brand identity',
      'These goals became the foundation of the redesign, helping ensure every decision supported a more intuitive, accessible, and user-centered experience.',
    ],
  },

  research: {
    content: [
      'To guide the redesign process, the team centered the research around three core questions:',
      '- Who are the users, and what are their age ranges and levels of technical comfort?',
      '- What information and resources matter most to them?',
      '- How easily can they navigate the current site to find what they need?',
    ],
  },

  researchMethods: {
    description:
      'Our audit examined the previous Pennsylvania United website alongside stakeholder input to document friction points, content gaps, and navigation issues that would inform the redesign.',
    images: [
      { src: '/images/penn-united-research-1.webp', alt: 'Pennsylvania United old site audit' },
      { src: '/images/penn-united-research-2.webp', alt: 'Pennsylvania United research — user insight' },
      { src: '/images/penn-united-research-3.webp', alt: 'Pennsylvania United research — content review' },
    ],
  },

  keyFindings: {
    content: [
      '- Brand: Logo and typography was not used consistently throughout the website.',
      '- Navigation challenges: Dense text, unclear hierarchy, and hard-to-find calls to action made it difficult for users to locate information and complete tasks.',
    ],
    image: { src: '/images/penn-united-key-findings.webp', alt: 'Pennsylvania United key findings visual' },
  },

  ourSolution: {
    paragraphs: [
      'The team created an accessible experience that helps users find chapters and resources more quickly by first developing a site map to better understand the existing structure and identify opportunities for improvement of the previous site.',
    ],
    image: { src: '/images/penn-united-solution.webp', alt: 'Pennsylvania United site map and solution' },
  },

  visualDirection: {
    description: [
      'Once we aligned on the research and structure, we explored multiple visual directions.',
      'We created different style tiles to help the client choose the tone that best reflected the organization from typography and color all the way to the feel of the site. Having this direction early made the next steps smoother and more intentional.',
    ],
    images: [{ src: '/images/penn-united-visual-direction.webp', alt: 'Pennsylvania United visual direction' }],
  },

  wireframes: {
    description: [
      'With the site map and site file finalized, we created low-fidelity wireframes that focused purely on structure, content flow, and usability. We shared these with the client early to make sure everyone was aligned before moving forward.',
    ],
    images: [{ src: '/images/penn-united-wireframes.webp', alt: 'Pennsylvania United lo-fi wireframes' }],
  },

  highFidelityDesigns: {
    description: [
      'Once the low-fidelity layouts were approved, the team developed high-fidelity designs for both web and mobile experiences.',
      'Throughout the process, the team collaborated closely with the client to incorporate feedback while maintaining a strong focus on usability and accessibility. The final designs balanced functionality with a clean, colorful visual style that aligned with Pennsylvania United\'s brand identity.',
    ],
    images: [{ src: '/images/penn-united-hifi.webp', alt: 'Pennsylvania United high-fidelity designs' }],
  },

  featureDevelopment: {
    sections: [
      {
        heading: 'Events Integration',
        intro:
          'Pennsylvania United was already using Mobilize.us but the way events were being displayed felt disconnected from their brand and gave users little control over what they were seeing. A custom plugin was built to properly integrate the API and bring the experience in line with the rest of the site.',
        items: [
          'Events are displayed as branded cards consistent with the site\'s design',
          'Users can filter by name, location, date, and virtual or in-person',
          'Virtual event filtering was a deliberate addition reflecting the growth of that sector post-COVID',
          'Events also surface on individual chapter pages so visitors can see upcoming local events without digging through the events page',
        ],
      },
      {
        heading: 'Chapter Management',
        intro:
          'As a regional organization with chapters spread across the east coast, the client needed to manage growth without relying on a developer for every change. A custom post type was built so non-technical staff could handle it entirely from the WordPress dashboard.',
        items: [
          'Adding a chapter is as simple as filling out a form: name, description, and membership information',
          'Each chapter includes a custom tag that connects it to the Mobilize.us API, powering the per-chapter event filtering',
          'For board members, the site staff publish a new chapter page without any developer involvement',
          'All chapters are managed from one centralized section in the dashboard',
        ],
      },
    ],
  },
}
