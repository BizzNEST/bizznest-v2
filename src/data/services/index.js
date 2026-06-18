import { designService } from './design'

// Registry mapping URL slug → service data.
// Add new services here: `slug: importedData`.
export const services = {
  design: designService,
}

export function getService(slug) {
  return services[slug] ?? null
}
