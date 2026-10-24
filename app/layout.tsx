import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RegisterSW from '@/components/RegisterSW'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://remotejobs-liard.vercel.app'
const description =
  'Browse remote software jobs, search by keyword and save the ones you like. Jobs from Remotive.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'RemoteJobs', template: '%s | RemoteJobs' },
  description,
  applicationName: 'RemoteJobs',
  openGraph: {
    siteName: 'RemoteJobs',
    title: 'RemoteJobs',
    description,
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='min-h-screen flex flex-col'>
        <RegisterSW />
        <Navbar />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
