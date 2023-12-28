import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from './(components)/header'
import Footer from './(components)/footer'

// const inter = Inter({ subsets: ['latin'] })
const grotesk = Space_Grotesk({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'BloGarr',
  description: 'Content management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={grotesk.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
