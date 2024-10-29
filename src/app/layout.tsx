import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Roboto as FontSans } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { cn } from '@/lib/utils'
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400']
})

export const metadata: Metadata = {
  title: 'soller',
  description: 'The soller service'
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={cn(
          'bg-background h-screen overflow-y-auto font-sans max-w-full antialiased',
          fontSans.variable
        )}
      >
        <div
          className="relative min-h-screen flex flex-col justify-between overflow-y-auto overflow-x-hidden bg-background
     text-brand-text-primary"
        >
          <Header />

          {children}

          <Footer />
        </div>
        {/* <ContainerScroll>{children}</ContainerScroll> */}
      </body>
    </html>
  )
}
