import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'

export const metadata: Metadata = {
  title: 'Offbeat Coffee + Tea — Sacramento',
  description: 'Vietnamese-owned specialty coffee and matcha café in Midtown Sacramento. Wed–Sun 7AM–4PM at 600 Broadway Ste A.',
  keywords: ['matcha', 'coffee', 'sacramento', 'vietnamese', 'offbeat', 'midtown', 'twice matcha'],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Offbeat Coffee + Tea',
    description: 'Coffee + tea, made slowly. Vietnamese-owned, Sacramento-grown.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar/>
          <main className="min-h-screen">{children}</main>
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
