import Header from '@/components/NavBar/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cajun App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className='h-screen w-screen flex flex-col items-center'>
        <Header/>
        <div className='w-full h-[100px] flex-shrink-0'></div>
        {children}
      </body>
    </html>
  )
}
