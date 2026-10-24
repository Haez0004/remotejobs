'use client'

export default function Offline() {
  return (
    <section className='mx-auto max-w-3xl p-6 text-center'>
      <h1 className='text-2xl font-bold'>You&apos;re offline</h1>
      <p className='mt-2 text-slate-400'>
        This page isn&apos;t saved on your device yet. Reconnect and try again.
      </p>
      <button
        type='button'
        onClick={() => window.location.reload()}
        className='mt-6 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-900'
      >
        Try again
      </button>
    </section>
  )
}
