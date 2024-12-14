import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation // Cache les requêtes pendant 60s, pendant ce temps le contenu est délivré via Snanity. C'est le ISR data fetch stratégie.
})
