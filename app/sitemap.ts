import type { MetadataRoute } from 'next'
import { getJobs } from '@/lib/jobs'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const jobs = await getJobs()

  const pages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/jobs`, lastModified: new Date() },
  ]

  const jobPages: MetadataRoute.Sitemap = jobs.map((job) => ({
    url: `${siteUrl}/jobs/${job.id}`,
    lastModified: new Date(job.publication_date),
  }))

  return [...pages, ...jobPages]
}
