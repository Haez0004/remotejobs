import { Suspense } from 'react'
import type { Metadata } from 'next'
import JobCard from '@/components/JobCard'
import { getJobs } from '@/lib/jobs'

export const metadata: Metadata = { title: 'Remote jobs' }

type Props = { searchParams: Promise<{ q?: string; type?: string; category?: string }> }

const TYPES = [
  ['', 'All types'],
  ['full_time', 'Full time'],
  ['part_time', 'Part time'],
  ['contract', 'Contract'],
  ['freelance', 'Freelance'],
]

async function JobsView({ searchParams }: Props) {
  const { q = '', type = '', category = '' } = await searchParams
  const jobs = await getJobs()
  const categories = Array.from(new Set(jobs.map((j) => j.category))).sort()
  const needle = q.trim().toLowerCase()
  const shown = jobs.filter((j) => {
    const text = `${j.title} ${j.company_name} ${j.category} ${j.tags.join(' ')}`.toLowerCase()
    return (
      text.includes(needle) &&
      (!type || j.job_type === type) &&
      (!category || j.category === category)
    )
  })

  return (
    <>
      <form action='/jobs' className='flex flex-col sm:flex-row gap-2 mb-6'>
        <input name='q' defaultValue={q} placeholder='Search title, company, category or tag' aria-label='Search jobs' className='flex-1 p-3 rounded bg-slate-900 border border-slate-700' />
        <select name='category' defaultValue={category} aria-label='Category' className='p-3 rounded bg-slate-900 border border-slate-700'>
          <option value=''>All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select name='type' defaultValue={type} aria-label='Job type' className='p-3 rounded bg-slate-900 border border-slate-700'>
          {TYPES.map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        <button className='bg-cyan-400 text-slate-900 font-bold px-5 py-3 rounded'>Search</button>
      </form>
      <p className='text-sm text-slate-400 mb-4'>{shown.length} jobs</p>
      <div className='grid gap-4 md:grid-cols-2'>
        {shown.map((j) => (
          <JobCard key={j.id} job={j} />
        ))}
      </div>
    </>
  )
}

export default function JobsPage({ searchParams }: Props) {
  return (
    <section className='w-full max-w-5xl mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold mb-6'>Remote jobs</h1>
      <Suspense fallback={<p className='text-slate-400'>Loading jobs…</p>}>
        <JobsView searchParams={searchParams} />
      </Suspense>
    </section>
  )
}
