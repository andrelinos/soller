import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'iconoir-react'
import Image from 'next/image'
import { useRef } from 'react'

import { Link } from '@/components/link'

gsap.registerPlugin(ScrollTrigger)

export function ActionSection() {
  const imageRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 90%',
          end: 'bottom top',
          scrub: true,
        },
      },
    )
    return () => {
      gsap.killTweensOf(imageRef.current)
    }
  }, [])

  return (
    <section
      id="services"
      className="relative flex w-full flex-col overflow-hidden bg-brand-purple-500 lg:bg-brand-purple-400"
    >
      <div className="relative mx-auto flex w-full flex-col overflow-hidden pt-20">
        <div className="relative flex w-full flex-wrap items-center justify-between px-4 lg:pl-[5%] lg:pr-20 xl:pr-20 2xl:pl-40 3xl:pl-80 3xl:pr-40">
          <div className="z-10 mx-auto flex w-full max-w-[600px] flex-col items-center lg:mx-0 lg:max-w-[790px]">
            <span className="w-full text-center text-xl font-medium leading-text-xl text-brand-yellow-400 lg:text-left">
              Get the Sun to power your home
            </span>
            <h2 className="text-center text-[32px] font-extrabold leading-9 text-white md:text-[3.5rem] md:leading-title lg:text-left">
              All the power that you need for your house is now available
            </h2>
          </div>
          <span className="absolute -z-0 hidden rounded-full bg-brand-purple-200 lg:top-[-26.5rem] lg:size-[780px] lg:bg-brand-purple-300 xl:right-[-20.5rem] xl:flex 2xl:right-[-11.5rem] 3xl:right-[-4.5rem]" />
          <span className="absolute -left-44 bottom-[-30.5rem] -z-0 flex size-[365px] rounded-full bg-brand-purple-200 sm:bottom-[-57.5rem] sm:left-[-27rem] sm:size-[768px] md:bottom-[-60rem] md:left-[-23rem] lg:bottom-[-67rem] lg:left-[-21rem] lg:size-[860px] xl:hidden" />
          <div className="z-10 mx-auto flex h-full flex-col justify-center gap-4 pt-6 md:pt-16 lg:mx-0 xl:pt-0">
            <Link
              variant="outline"
              href="#"
              className="flex h-16 w-[306px] items-center justify-center gap-6 rounded-full border-2 border-brand-yellow-400 bg-transparent px-6 text-2xl font-bold text-brand-yellow-400 hover:bg-brand-yellow-400 hover:text-brand-orange-600"
            >
              Request a Quote
              <ArrowRight width={24} height={24} strokeWidth={2} />
            </Link>
            <p className="text-center text-lg leading-text-sm text-white">
              Egestas fringilla aliquam leo
            </p>
          </div>
        </div>
        <div className="relative z-10 mx-auto pb-[1.2rem] pt-[3.75rem]">
          <Image
            ref={imageRef}
            src="/assets/images/screen-notebook.svg"
            width={1008}
            height={555}
            layout="responsive"
            priority
            className="h-auto w-[1060px]"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
