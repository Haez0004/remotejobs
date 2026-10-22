import { getJobs } from '@/lib/jobs'

export default async function Home() {
  const jobs = await getJobs()
  return (
    <main className='p-6'>
      Loaded {jobs.length} jobs. First: {jobs[0]?.title}
    </main>
  )
}
