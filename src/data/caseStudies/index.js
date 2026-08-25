import { adobeNonprofitsCaseStudy } from './adobe-nonprofits'
import { seledonCaseStudy } from './seledon'
import { svaecCaseStudy } from './svaec'
import { spinCaseStudy } from './spin'
import { rotorheadCaseStudy } from './rotorhead'
import { pennUnitedCaseStudy } from './penn-united'
import { brownIssuesCaseStudy } from './brown-issues'
import { idBiteThatCaseStudy } from './id-bite-that'

// Registry mapping URL slug → case study data.
// Add new studies here: `slug: importedData`.
//
// occord.js is deliberately absent: it holds placeholder copy and is kept on
// disk as a filled-in reference alongside template.js. Registering it would
// publish that copy at /work/occord.
export const caseStudies = {
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
