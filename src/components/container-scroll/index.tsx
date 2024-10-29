'use client'

import { Footer } from '../footer'
import { Header } from '../header'

export function ContainerScroll({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative min-h-screen overflow-y-auto overflow-x-hidden bg-background
     text-brand-text-primary"
    >
      <Header />

      {children}

      <Footer />
    </div>
  )
}
