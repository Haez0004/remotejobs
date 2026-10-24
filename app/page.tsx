import Link from 'next/link'
import JobCard from '@/components/JobCard'
import { getJobs } from '@/lib/jobs'

const FEATURES = [
  ['Search and filter', 'Find roles by title, company, category or tag, and narrow by job type.'],
  ['Save jobs', 'Keep the ones you like on your device and come back to them on the Saved page.'],
  ['Fresh listings', 'Jobs come from Remotive and refresh through the day.'],
]

export default async function Home() {
  const jobs = await getJobs()
  const latest = jobs.slice(0, 3)

  return (
    <>
      <section className='w-full max-w-5xl mx-auto px-4 py-16'>
        <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
          Find your next <span className='text-cyan-400'>remote</span> software job
        </h1>
        <p className='mt-4 text-slate-300 max-w-xl'>
          Search remote developer roles, filter by job type and save the ones you like.
        </p>
        <Link href='/jobs' className='inline-block mt-6 bg-cyan-400 text-slate-900 font-bold px-5 py-3 rounded'>
          Browse jobs
        </Link>
      </section>

      <section className='w-full max-w-5xl mx-auto px-4 pb-12'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-bold'>Latest jobs</h2>
          <Link href='/jobs' className='text-cyan-400 underline'>
            View all jobs
          </Link>
        </div>
        <div className='grid gap-4 md:grid-cols-2'>
          {latest.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      <section className='w-full max-w-5xl mx-auto px-4 pb-8'>
        <div className='grid gap-4 md:grid-cols-3'>
          {FEATURES.map(([title, text]) => (
            <div key={title} className='bg-slate-800 border border-slate-700 rounded-xl p-5'>
              <h3 className='font-bold text-cyan-400'>{title}</h3>
              <p className='mt-2 text-sm text-slate-300'>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
