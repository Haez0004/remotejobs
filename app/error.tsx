'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className='mx-auto max-w-3xl p-6 text-center'>
      <h1 className='text-2xl font-bold'>Something went wrong</h1>
      <p className='mt-2 text-slate-400'>
        We couldn&apos;t load this page. Please try again.
      </p>
      <div className='mt-6 flex flex-wrap justify-center gap-3'>
        <button
          type='button'
          onClick={() => reset()}
          className='rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-900'
        >
          Try again
        </button>
        <Link
          href='/jobs'
          className='rounded-lg border border-slate-700 px-6 py-3 font-semibold text-cyan-400'
        >
          Browse jobs
        </Link>
      </div>
    </section>
  )
}
