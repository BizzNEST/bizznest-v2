import { adobeNonprofitsCaseStudy } from './adobe-nonprofits'
import { occordCaseStudy } from './occord'
import { seledonCaseStudy } from './seledon'
import { svaecCaseStudy } from './svaec'
import { spinCaseStudy } from './spin'
import { rotorheadCaseStudy } from './rotorhead'
import { pennUnitedCaseStudy } from './penn-united'
import { brownIssuesCaseStudy } from './brown-issues'
import { idBiteThatCaseStudy } from './id-bite-that'

// Registry mapping URL slug → case study data.
// Add new studies here: `slug: importedData`.
export const caseStudies = {
  occord: occordCaseStudy,
  'susie-seledon-literacy-fund': seledonCaseStudy,
  svaec: svaecCaseStudy,
  spin: spinCaseStudy,
  rotorhead: rotorheadCaseStudy,
  'penn-united': pennUnitedCaseStudy,
  'brown-issues': brownIssuesCaseStudy,
  'id-bite-that': idBiteThatCaseStudy,
  'adobe-nonprofits': adobeNonprofitsCaseStudy,
}

export function getCaseStudy(slug) {
  return caseStudies[slug] ?? null
}
