export default function Loading() {
  return (
    <section className='mx-auto max-w-3xl p-6'>
      <div className='h-8 w-40 animate-pulse rounded bg-slate-800' />
      <div className='mt-6 grid gap-4'>
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className='animate-pulse rounded-xl border border-slate-700 bg-slate-800 p-5'
          >
            <div className='h-5 w-3/4 rounded bg-slate-700' />
            <div className='mt-3 h-4 w-1/2 rounded bg-slate-700' />
            <div className='mt-4 flex gap-2'>
              <div className='h-6 w-14 rounded bg-slate-900' />
              <div className='h-6 w-16 rounded bg-slate-900' />
              <div className='h-6 w-12 rounded bg-slate-900' />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
