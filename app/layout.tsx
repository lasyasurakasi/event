import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cal.com - The better way to schedule your meetings',
  description: 'A fully customizable scheduling software for individuals, businesses taking calls and developers building scheduling platforms where users meet users.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

