import Link from 'next/link'
import type { Job } from '@/lib/jobs'
import SaveButton from './SaveButton'

export default function JobCard({ job }: { job: Job }) {
  return (
    <article className='bg-slate-800 border border-slate-700 rounded-xl p-5'>
      <h2 className='font-bold'>
        <Link href={`/jobs/${job.id}`} className='hover:text-cyan-400'>
          {job.title}
        </Link>
      </h2>
      <p className='text-sm text-slate-400 mt-1'>
        {job.company_name} · {job.candidate_required_location || 'Worldwide'}
      </p>
      <div className='mt-3 flex flex-wrap gap-2'>
        {job.tags.slice(0, 4).map((t) => (
          <span key={t} className='text-xs text-cyan-400 bg-slate-900 px-2 py-1 rounded'>
            {t}
          </span>
        ))}
      </div>
      <div className='mt-3 flex items-center justify-between gap-3'>
        <a href={job.url} target='_blank' rel='noopener noreferrer' className='text-xs text-slate-400 hover:underline'>
          Source: Remotive
        </a>
        <SaveButton id={job.id} />
      </div>
    </article>
  )
}
