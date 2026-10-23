'use client'

import Link from 'next/link'
import type { Job } from '@/lib/jobs'
import { useSavedIds } from '@/lib/saved'
import JobCard from './JobCard'

export default function SavedList({ jobs }: { jobs: Job[] }) {
  const ids = useSavedIds()
  const saved = jobs.filter((job) => ids.includes(job.id))

  if (saved.length === 0) {
    return (
      <p className='text-slate-400'>
        No saved jobs yet.{' '}
        <Link href='/jobs' className='text-cyan-400 underline'>
          Browse jobs
        </Link>
      </p>
    )
  }

  return (
    <>
      <p className='text-sm text-slate-400'>
        {saved.length} saved {saved.length === 1 ? 'job' : 'jobs'}
      </p>
      <div className='mt-4 grid gap-4'>
        {saved.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  )
}
