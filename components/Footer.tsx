export default function Footer() {
  return (
    <footer className='w-full max-w-5xl mx-auto px-4 py-8 mt-12 border-t border-slate-800 text-sm text-slate-400'>
      Jobs from{' '}
      <a href='https://remotive.com' target='_blank' rel='noopener noreferrer' className='text-cyan-400 hover:underline'>
        Remotive
      </a>
      . Listings are delayed by 24 hours. Built by Haez.
    </footer>
  )
}
