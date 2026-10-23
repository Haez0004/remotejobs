export default function JobsSkeleton() {
  return (
    <div className='grid animate-pulse gap-4 md:grid-cols-2'>
      {[1, 2, 3, 4].map((n) => (
        <div
          key={n}
          className='rounded-xl border border-slate-700 bg-slate-800 p-5'
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
  )
}
