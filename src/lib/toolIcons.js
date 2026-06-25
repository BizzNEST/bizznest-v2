// Maps a case study tool name to its icon file in /public/icons.
// Returns null when there's no matching icon so the caller can fall back to text.
const TOOL_ICONS = {
  'figma': '/icons/figma.svg',
  'react': '/icons/react.svg',
  'node.js': '/icons/nodejs.svg',
  'nodejs': '/icons/nodejs.svg',
  'postgresql': '/icons/postgresql.svg',
  'typescript': '/icons/typescript.svg',
  'tailwind': '/icons/tailwind.svg',
  'tailwind css': '/icons/tailwind.svg',
  'wordpress': '/icons/wordpress.svg',
  'squarespace': '/icons/squarespace.svg',
  'adobe cc': '/icons/adobe-cc.svg',
  'adobe creative cloud': '/icons/adobe-cc.svg',
  'adobe express': '/icons/adobe-express.png',
  'asana': '/icons/asana.svg',
  'hootsuite': '/icons/hootsuite.svg',
  'canva': '/icons/canva.svg',
  'google sheets': '/icons/google-sheets.svg',
  'google docs': '/icons/google-docs.svg',
}

export function getToolIcon(tool) {
  return TOOL_ICONS[tool.trim().toLowerCase()] ?? null
}
