export const adobeNonprofitsCaseStudy = {
  date: 'May–August 2024',
  client: 'Adobe for Nonprofits',
  tools: ['Figma', 'Adobe Express', 'Adobe Creative Cloud'],
  siteUrl: 'https://youtu.be/pdhpUhbOTE0',
  siteName: 'View on YouTube',

  heroImage: {
    src: '/images/adobe-nonprofits-hero.webp',
    alt: 'Adobe for Nonprofits video tutorial series',
  },

  problem: {
    subtitle: 'Nonprofits didn\'t need another tool. They needed to see why a new one was worth their time.',
    description:
      'Adobe for Nonprofits partnered with us to create a getting-started video series for nonprofit teams using Adobe Express. Those teams run lean, often a single coordinator handling design, content, and social all at once. The barrier was never the software itself; it was the **perceived time cost of learning something new** on top of an already full workload. The series had to clear that hurdle, showing busy staff that Express fit the work they were already doing rather than adding to it.',
  },

  goalsAndObjectives: {
    intro: 'We built the series around four core outcomes:',
    items: [
      'Make Adobe Express approachable for staff at any skill level, not just designers.',
      'Demonstrate real use cases relevant to nonprofit work, from social content to brand consistency.',
      'Keep the learning quick and actionable so a single video could turn into immediate use.',
      'Encourage genuine adoption into the workflows teams already rely on.',
    ],
    images: [
      { src: '/images/adobe-nonprofits-goals-1.webp', alt: 'Adobe for Nonprofits series goal 1' },
      { src: '/images/adobe-nonprofits-goals-2.webp', alt: 'Adobe for Nonprofits series goal 2' },
      { src: '/images/adobe-nonprofits-goals-3.webp', alt: 'Adobe for Nonprofits series goal 3' },
    ],
  },

  research: {
    title: 'Research',
    layout: 'stacked',
    content: [
      'Before planning a single video, we needed to understand how nonprofit teams actually create content. We interviewed three nonprofits across different sizes and missions: a small community-programs group, a mid-sized photography and storytelling nonprofit, and a large global humanitarian organization. We started from three questions:',
      '- **How** do teams currently create and manage their content?',
      '- **Where** do they get stuck, and what makes them avoid new tools?',
      '- **What** would make Adobe Express feel relevant to their actual work?',
      'A few things came up in every conversation:',
      '- **Context over features:** teams didn\'t struggle to learn the tool, they struggled to see how it applied to their work, so feature walkthroughs weren\'t the answer.',
      '- **Capacity anxiety:** most teams are stretched thin, and any new tool feels like a risk if the learning curve isn\'t clear upfront.',
      '- **Visual confidence gap:** many staff didn\'t consider themselves designers and needed permission to feel like they could use a design tool.',
    ],
  },

  personas: {
    title: 'Personas',
    intro: 'The interviews surfaced three distinct user types. We built a persona around each to keep the content strategy grounded in real needs.',
    cards: [
      {
        name: 'Maya Torres',
        emoji: '👩‍💻',
        scale: 'Small Nonprofit',
        quote: 'I\'m the designer, the marketer, and the social media person. I need something I can actually learn fast.',
        tags: ['Speed', 'Simplicity'],
        blurb: 'She wears every hat. Tutorials need to show her how to do something useful in under five minutes.',
      },
      {
        name: 'Jordan Kim',
        emoji: '👨‍🎨',
        scale: 'Mid-Sized Nonprofit',
        quote: 'We have a small team but a lot of content to push out. I need something scalable.',
        tags: ['Efficiency', 'Scalability'],
        blurb: 'Has a small team but high output demands. Needs workflows they can repeat without starting from scratch.',
      },
      {
        name: 'Sarah Patel',
        emoji: '👩‍💼',
        scale: 'Large Nonprofit',
        quote: 'We have staff across multiple regions. Consistency is everything for us.',
        tags: ['Consistency', 'Collaboration'],
        blurb: 'Needs brand guardrails and team features. Tutorials should address templates and sharing.',
      },
    ],
  },

  ourSolution: {
    title: 'Content Strategy',
    paragraphs: [
      'Rather than organizing the series around Adobe Express features in sequence, we structured it around **the work nonprofits already do**: social content, brand consistency, and team collaboration. Framing each video around a real use case let viewers connect a capability to a problem they were already trying to solve, so the learning felt relevant instead of theoretical.',
      'Every video was storyboarded step by step before production, emphasizing demonstration over explanation, and Adobe for Nonprofits reviewed and approved each concept before filming. The result was nine tightly scoped videos, from getting started and UI navigation to the Resize tool, brand kits, generative AI, and collaboration.',
    ],
    image: { src: '/images/adobe-nonprofits-storyboarding.webp', alt: 'Adobe for Nonprofits video series storyboard and production notes' },
  },

  visualDirection: {
    title: 'Production',
    description: [
      'Videos were shot in a screen-recording and voiceover format, with short live-action intros to set the use-case context before diving into the tool.',
      'We handled recording (QuickTime), voiceover, editing in Premiere Pro, and thumbnails for all 9 videos, producing the live-action intros with our video team.',
    ],
    images: [
      { src: '/images/adobe-nonprofits-production.webp', alt: 'Adobe for Nonprofits production details' },
    ],
  },

  results: {
    outcomes: [
      { value: '11,044+', label: 'Total views across the series' },
      { value: '2.7K+', label: 'Views on top video: Resize Tool' },
      { value: '9', label: 'Videos produced, approved, and published' },
    ],
    whatHappenedAfter: [
      'The series shipped on Adobe Express\'s YouTube channel and drew strong positive feedback from the Adobe for Nonprofits team, particularly around the production quality and the use-case-first training approach. The nonprofits interviewed for the series responded the same way. Leading with a real use case before introducing each feature made the tool feel far less intimidating, and the project\'s success opened the door to expanded collaboration with the Adobe for Nonprofits team.',
      'Three lessons carried through the work. **Context beats completeness:** grounding instruction in real scenarios outperformed exhaustive feature coverage. **Research is a decision-making tool:** the personas gave us the confidence to push back on generic approaches. And **production quality is a trust signal:** clean audio, pacing, and clarity established credibility with a skeptical audience.',
    ],
    images: [
      { src: '/images/adobe-nonprofits-results.webp', alt: 'Adobe for Nonprofits results' },
    ],
  },
}
