import Link from 'next/link'

export default function Home() {
  return (
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
  )
}
