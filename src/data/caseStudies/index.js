import { occordCaseStudy } from './occord'
import { seledonCaseStudy } from './seledon'
import { svaecCaseStudy } from './svaec'

// Registry mapping URL slug → case study data.
// Add new studies here: `slug: importedData`.
export const caseStudies = {
  occord: occordCaseStudy,
  'susie-seledon-literacy-fund': seledonCaseStudy,
  svaec: svaecCaseStudy,
}

export function getCaseStudy(slug) {
  return caseStudies[slug] ?? null
}
