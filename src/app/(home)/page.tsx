'use client'

import { ActionSection } from '@/components/sections/action'
import { SectionEcoSolutions } from '@/components/sections/eco-solutions'
import { SectionFeatures } from '@/components/sections/features'
import { SectionHero } from '@/components/sections/hero'
import { SliderReviewSection } from '@/components/sections/reviews'
import { SectionServices } from '@/components/sections/services'

export default function Home() {
  return (
    <main className="relative flex min-h-full w-full flex-col">
      <SectionHero id="home" />
      <SectionEcoSolutions id="products" />
      <SectionServices id="services" />
      <SectionFeatures id="configure" />
      <SliderReviewSection id="reviews" />
      <ActionSection />
      {/* <BackToTopButton /> */}
    </main>
  )
}
