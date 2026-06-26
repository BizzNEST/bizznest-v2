export const seledonCaseStudy = {
  date: 'Spring 2026',
  client: 'Susie Seledon Literacy Fund',
  tools: ['Figma', 'React', 'TypeScript', 'Tailwind'],
  siteUrl: 'https://seledonliteracyfund.org',
  siteName: 'Susie Seledon Literacy Fund',

  heroImage: {
    src: '/images/seledon-hero.webp',
    alt: 'Susie Seledon Literacy Fund Website Mockup',
    position: 'top',
  },

  problem: {
    subtitle:
      'The Susie Seledon Literacy Fund was launched and needed a website to increase visibility and promote a free book program for children ages 0-5.',
    description:
      'Our client requested a website about a new literacy program, which was established in partnership with the Dolly Parton Imagination Library and the Gilroy Foundation, providing free books to children in Gilroy, CA. Starting with just a provided logo, we designed a brand identity and a responsive website that kept a playful and user friendly experience in mind.',
  },

  goalsAndObjectives: {
    content: [
      'At the start of the project, the team aligned on a set of guiding goals to inform every decision:',
      '- Create a user friendly website that encourages users to sign up their children for literacy program',
      '- Define Susie Seledon\'s legacy in the website',
      '- Promote the importance of literacy',
      '- Establish a clear privacy claim so users aren\'t discouraged to sign up due to data concerns',
      'These goals served as the foundation for the project moving forward.',
    ],
  },

  research: {
    content: [
      'Before we made any decisions, we wanted to deeply understand what how to tell a story, reach parents and donors, and convey a welcoming image.',
      'To guide the design, we focused on answering three core questions:',
      '- Who are our users? (age range, tech comfort levels)',
      '- What information do they care about most?',
      '- How easily can they navigate the current site to find it?',
      '- How can we uplift the legacy of Susie Seledon and incorporate a personal touch and dedication?',
    ],
  },

  researchMethods: {
    description:
      'We researched similar organizations with a similar goal of connecting parents and children through reading and took inspirations from programs such as Dolly Parton\'s Imagination Library.',
    images: [
      { src: '/images/seledon-persona.webp', alt: 'User Persona — Ashley, New Mom' },
      { src: '/images/seledon-research-2.webp', alt: 'Competitor Benchmark Analysis & Information Architecture Plan' },
    ],
  },

  keyFindings: {
    content: [
      '- Age and technology comfort: Users represented a broad age range, with many in mid-to-later career stages, highlighting the need for simple, structured, and accessible experiences.',
      '- Information priorities: Users most valued course information, followed by career exploration and available resources.',
      '- Navigation challenges: Dense text, unclear hierarchy, and hard-to-find calls to action made it difficult for users to locate information and complete tasks.',
    ],
  },

  ourSolution: {
    paragraphs: [
      'Develop a modern and user friendly website that informs residents of Gilroy of the Susie Seledon Foundation\'s initiative to provide free books for children ages 0–5 and build a foundation for users to enroll their child.',
      'The goal was to create a concise and cohesive interface that makes the process of enrolling easier and provides credibility through testimonials and statistics.',
      'This included structuring content into a minimalist approach that includes a clear headline about free books, a simple three-step guide to enrolling, and a collapsible FAQ section at the bottom to answer quick questions without cluttering the page. To build immediate trust, the design trades long paragraphs for big, bold impact numbers and recognizable community logos. Finally, by using consistent colors, clear spacing, and bright, repeatable sign-up buttons, the final look ensures that anyone looking for books can navigate the site and register their child in just a few clicks.',
    ],
    image: {
      src: '/images/seledon-solution.webp',
      alt: 'Susie Seledon Literacy Fund Responsive Solution',
    },
  },

  visualDirection: {
    description:
      'We drew inspiration from websites aimed at adults, guardians, and parents. Our goal was to evoke a sense of colorful whimsy, reminiscent of classic children\'s book designs. We incorporated a playful handwritten font for the headings and a clean sans-serif typeface for the body text, enhancing the storybook feel without sacrificing readability.',
    images: [
      { src: '/images/seledon-visual-direction.webp', alt: 'Color Swatches, Iconography, and Typography Direction' },
    ],
  },

  wireframes: {
    title: 'Initial Designs',
    description: [
      'With an established visual direction, we collaborated closely with our client through multiple homepage iterations. Having a continuous feedback loop allowed us to strategically map the fund\'s narrative with the website\'s core function: motivating users to register their child.',
      'These conversations helped us ensure that the website convey the clients vision perfectly without sacrificing user-needs.',
    ],
    images: [
      { src: '/images/seledon-init-designs1.webp', alt: 'Initial Content Flow & Responsive Wireframes' },
      { src: '/images/seledon-init-designs2.webp', alt: 'Responsive Wireframes — Mobile & Tablet' },
    ],
  },

  highFidelityDesigns: {
    description: [
      'Once we received approval for the page layouts, we created the hi-fidelity designs for both web and mobile. The prominent information on the home page consists of the three simple steps to enroll, paired with a bold CTA button promotes an easy action item for users to complete.',
      'All components and cards are stylistically consistent with soft rounded corners, a playful bubble background, and warm yet simple color palette. We refined our typography choices and updated our colors to be WCAG compliant, maintaining the joyful design choices while keeping usability at the center.',
    ],
    images: [
      { src: '/images/seledon-hifi-designs.webp', alt: 'Final Interactive High-Fidelity Interface Layout' },
    ],
  },
}
