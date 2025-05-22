import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'; // Import React

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Panagiotis Papatheodoropoulos Portfolio',
  description: 'A passionate developer creating amazing digital experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
