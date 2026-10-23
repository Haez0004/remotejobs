export default function Loading() {
  return (
    <article className='mx-auto max-w-3xl animate-pulse p-6'>
      <div className='h-8 w-3/4 rounded bg-slate-800' />
      <div className='mt-3 h-5 w-1/3 rounded bg-slate-800' />
      <div className='mt-5 h-4 w-2/3 rounded bg-slate-800' />
      <div className='mt-5 flex flex-wrap gap-2'>
        <div className='h-8 w-16 rounded-md bg-slate-800' />
        <div className='h-8 w-20 rounded-md bg-slate-800' />
        <div className='h-8 w-14 rounded-md bg-slate-800' />
        <div className='h-8 w-24 rounded-md bg-slate-800' />
      </div>
      <div className='mt-8 space-y-3'>
        <div className='h-4 w-full rounded bg-slate-800' />
        <div className='h-4 w-full rounded bg-slate-800' />
        <div className='h-4 w-5/6 rounded bg-slate-800' />
        <div className='h-4 w-full rounded bg-slate-800' />
        <div className='h-4 w-2/3 rounded bg-slate-800' />
      </div>
      <div className='mt-8 h-12 w-48 rounded-lg bg-slate-800' />
    </article>
  )
}
