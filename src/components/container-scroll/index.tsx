'use client'

import { useRef, useState } from 'react'

import { Footer } from '../footer'
import { Header } from '../header'

export function ContainerScroll({ children }: { children: React.ReactNode }) {
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const [scrollInfo, setScrollInfo] = useState({
    scrollTop: 0,
    scrollHeight: 0,
  })

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
