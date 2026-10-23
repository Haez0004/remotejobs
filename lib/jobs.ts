import { cacheLife } from 'next/cache'
import sample from '@/data/jobs.sample.json'

export interface Job {
  id: number
  url: string
  title: string
  company_name: string
  category: string
  tags: string[]
  job_type: string
  publication_date: string
  candidate_required_location: string
  salary: string
  description: string
}

const API = 'https://remotive.com/api/remote-jobs'

export async function getJobs(): Promise<Job[]> {
  'use cache'
  cacheLife({ stale: 3600, revalidate: 21600, expire: 86400 })
  try {
    const res = await fetch(API)
    if (!res.ok) throw new Error('Bad response')
    const data = await res.json()
    return data.jobs as Job[]
  } catch {
    return (sample as unknown as { jobs: Job[] }).jobs
  }
}
