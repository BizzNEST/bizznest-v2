import { occordCaseStudy } from './occord'

// Registry mapping URL slug → case study data.
// Add new studies here: `slug: importedData`.
export const caseStudies = {
  occord: occordCaseStudy,
}

export function getCaseStudy(slug) {
  return caseStudies[slug] ?? null
}
