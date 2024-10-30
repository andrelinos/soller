'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

import { Link } from '@/components/link'

interface Props {
  id?: string
}

export function SectionHero({ id }: Props) {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const pRef = useRef(null)
  const imageRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    })

    gsap.from(pRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: pRef.current,
        start: 'top 80%',
        end: 'bottom top',
        toggleActions: 'play none none reset',
      },
    })

    gsap.from(imageRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 0%',
      },
    })

    return () => {
      gsap.killTweensOf(titleRef.current)
      gsap.killTweensOf(pRef.current)
      gsap.killTweensOf(imageRef.current)
    }
  }, [])

  return (
    <section
      id={id || 'hero'}
      className="relative flex min-h-[812px] w-full flex-col px-4 lg:px-20 xl:pt-[139px]"
      ref={sectionRef}
    >
      <div className="size-full h-[358px] overflow-hidden sm:h-[556px] md:h-[664px] lg:h-[502px] xl:h-0">
        <div className="absolute -right-1 top-0">
          <Image
            ref={imageRef}
            src="/assets/images/image-men-worker-desktop.png"
            width={673}
            height={694}
            className="hidden h-auto w-96 sm:w-[32rem] md:w-[48rem] lg:flex lg:w-[42rem] xl:w-[44rem] 2xl:w-[53rem] 3xl:w-[50.2rem]"
            alt=""
          />
          <Image
            src="/assets/images/image-men-worker-mobile.png"
            width={768}
            height={860}
            className="h-auto w-[19.8rem] sm:w-[32rem] md:w-[38.2rem] lg:hidden lg:w-[36rem] xl:w-[44rem] 2xl:w-[53rem] 3xl:w-[53.2rem]"
            alt=""
          />
        </div>
      </div>
      <div className="mx-auto w-full max-w-[600px] pt-12 lg:mx-0">
        <div className="flex w-full flex-col gap-6">
          <h2
            className="text-center text-[40px] font-extrabold leading-text-2xl sm:text-7xl lg:text-left xl:leading-text-4xl"
            ref={titleRef}
          >
            Get the Sun to Power Your Home
          </h2>
          <p
            className="text-center text-2xl leading-text-xl lg:text-left"
            ref={pRef}
          >
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque.
          </p>
          <Link
            variant="outline"
            href="#"
            className="group mx-auto flex h-16 w-[306px] items-center justify-center gap-6 rounded-full border border-brand-purple-500 bg-transparent px-6 text-2xl font-bold text-brand-purple-500 hover:bg-brand-purple-500 hover:text-brand-yellow-400 lg:mx-0"
          >
            Request a Quote
            <ArrowRight size={24} />
          </Link>
        </div>
        <div className="mt-12 flex w-full flex-col gap-4 lg:mt-32">
          <p className="leading-text-lg">
            “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque faucibus.”
          </p>
          <div className="flex gap-4">
            <Image
              src="/assets/images/avatars/rwanda-melflor.png"
              width={64}
              height={64}
              priority
              alt=""
            />
            <div className="flex flex-col justify-center">
              <span className="text-lg leading-text-lg">Rwanda Melflor</span>
              <span className="leading-text-base text-brand-text-secondary">
                zerowaste.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
