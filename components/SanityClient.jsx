// ./src/utils/sanity/client.ts
import { createClient } from 'next-sanity'

const projectId = process.env.SANITY_PROJECT_ID || 'qhd1ydjp'
const dataset = process.env.SANITY_DATASET || 'production'
const apiVersion = process.env.SANITY_API_VERSION || '2024-04-15'

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true,
  // studioUrl: 'https://locahost.sanity.studio/',
  ignoreDuplicateReads: true,
  stega: {
    enabled: true,
    studioUrl: '/admin',
  },
})
