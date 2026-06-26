import { designService } from './design'
import { softwareDevelopmentService } from './software-development'
import { marketingService } from './marketing'

// Registry mapping URL slug → service data.
// Add new services here: `slug: importedData`.
export const services = {
  design: designService,
  'software-development': softwareDevelopmentService,
  marketing: marketingService,
}

export function getService(slug) {
  return services[slug] ?? null
}
