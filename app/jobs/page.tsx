import { Suspense } from 'react'
import type { Metadata } from 'next'
import JobCard from '@/components/JobCard'
import { getJobs } from '@/lib/jobs'

export const metadata: Metadata = { title: 'Remote software jobs' }

async function JobList() {
  const jobs = await getJobs()
  return (
    <div className='grid gap-4 md:grid-cols-2'>
      {jobs.map((j) => (
        <JobCard key={j.id} job={j} />
      ))}
    </div>
  )
}

export default function JobsPage() {
  return (
    <section className='w-full max-w-5xl mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold mb-6'>Remote software jobs</h1>
      <Suspense fallback={<p className='text-slate-400'>Loading jobs…</p>}>
        <JobList />
      </Suspense>
    </section>
  )
}
