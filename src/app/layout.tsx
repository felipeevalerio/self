import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { SidebarComponent } from '@/components/sidebar/sidebar'
import { Header } from '@/components/header'

const inter = Poppins({ subsets: ['latin'], weight: ['400', '600'] })

export const metadata: Metadata = {
  title: 'self',
  description: 'Your journey to greatness starts here.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="grid grid-cols-2 min-h-screen">
          <SidebarComponent />
          <div className="pr-24 pt-7 py-6">
            <Header />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
