import { ArrowRight } from 'iconoir-react'

import { Link } from '@/components/link'

import { EmblaCarousel } from './components/crousel'

interface Props {
  id?: string
}

export function SliderReviewSection({ id }: Props) {
  return (
    <section
      id={id ?? 'reviews'}
      className="flex w-full flex-col flex-wrap bg-brand-purple-500 py-12 pl-4 lg:flex-row lg:py-20 lg:pl-20"
    >
      <div className="mb-20 flex w-full flex-wrap justify-between pr-4 lg:pr-20">
        <div className="flex w-full max-w-[814px] flex-col">
          <span className="w-full pb-2 text-center text-xl font-medium text-brand-yellow-400 lg:text-left">
            Join other Sun harvesters
          </span>
          <h2 className="text-center text-[3.5rem] font-extrabold leading-title text-white  lg:text-left">
            Make something awesome
          </h2>
          <p className="mt-6 text-center text-xl leading-9 text-white lg:text-left">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo.
          </p>
        </div>
        <div className="mx-auto mt-6 lg:mx-0">
          <Link
            variant="outline"
            href="request-quote"
            className="flex h-16 w-[306px] items-center justify-center gap-6 rounded-full border-2 border-brand-yellow-400 bg-transparent px-6 text-2xl font-bold text-brand-yellow-400 hover:bg-brand-yellow-400 hover:text-brand-orange-600"
          >
            Request a Quote
            <ArrowRight width={24} height={24} strokeWidth={2} />
          </Link>
        </div>
      </div>
      <EmblaCarousel />
    </section>
  )
}
