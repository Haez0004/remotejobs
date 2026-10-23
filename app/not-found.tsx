import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='mx-auto max-w-3xl p-6 text-center'>
      <p className='text-5xl font-bold text-cyan-400'>404</p>
      <h1 className='mt-4 text-2xl font-bold'>Page not found</h1>
      <p className='mt-2 text-slate-400'>
        That page or job doesn&apos;t exist, or the listing has been removed.
      </p>
      <Link
        href='/jobs'
        className='mt-6 inline-block rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-900'
      >
        Browse jobs
      </Link>
    </section>
  )
}
