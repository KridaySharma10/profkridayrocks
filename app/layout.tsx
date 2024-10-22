import { Inter } from 'next/font/google'
import { ReactNode } from "react"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Voices of Change',
  description: 'Creating a better India through grassroots initiatives',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 to-white">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}