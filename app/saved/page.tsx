import { getJobs } from '@/lib/jobs'
import SavedList from '@/components/SavedList'

export const metadata = { title: 'Saved jobs' }

export default async function SavedPage() {
  const jobs = await getJobs()

  return (
    <section className='mx-auto max-w-3xl p-6'>
      <h1 className='text-2xl font-bold mb-4'>Saved jobs</h1>
      <SavedList jobs={jobs} />
    </section>
  )
}
