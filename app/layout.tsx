import type { Metadata } from 'next'
import { Courier_Prime } from 'next/font/google'
import './globals.css'

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Disrupt House',
  description: 'Building the innovation ecosystem that keeps talent in St. Louis',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={courierPrime.className}>{children}</body>
    </html>
  )
}
