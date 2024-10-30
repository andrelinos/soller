import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Roboto as FontSans } from 'next/font/google'

import { BackToTopButton } from '@/components/back-to-top-button'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { cn } from '@/lib/utils'
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'soller',
  description:
    'The Soller project is a web application aimed at promoting the use of sustainable energy. This application provides information on how solar energy can be an efficient and economical solution for homes and businesses.',
  keywords:
    'solar energy, sustainable energy, solar panels, energy solutions, renewable energy',
  openGraph: {
    title: 'Soller - Sustainable Solar Energy Solutions',
    description:
      'Discover sustainable solar energy solutions for your home with Soller.',
    url: 'https://soller-andrelinos.vercel.app',
    type: 'website',
    images: [
      {
        url: 'https://soller-andrelinos.vercel.app/assets/images/og-image.png',
        width: 800,
        height: 600,
        alt: 'Soller Solar Energy',
      },
    ],
  },
}

export default async function RootLayout({
  children,
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
          fontSans.variable,
        )}
      >
        <div className="relative flex min-h-screen flex-col justify-between overflow-y-auto overflow-x-hidden bg-background text-brand-text-primary">
          <Header />

          {children}

          <Footer />
          <BackToTopButton />
        </div>
      </body>
    </html>
  )
}
