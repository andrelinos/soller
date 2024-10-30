import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

import { Card } from '../services/components/card'
import { ImageMobile } from './components/image-mobile'
import { ImagePC } from './components/image-pc'

interface Props {
  id?: string
  ref?: React.RefObject<HTMLDivElement> | null
}

export function SectionFeatures({ id, ref }: Props) {
  const pageRef = useRef(null)
  const spanRef = useRef(null)
  const h2Ref = useRef(null)
  const pRef = useRef(null)

  useGSAP(() => {
    gsap.from(spanRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'bounce.out',
      scrollTrigger: {
        trigger: spanRef.current,
        start: 'top 85%',
        end: 'bottom top',
        toggleActions: 'play none none reset',
      },
    })

    gsap.from(h2Ref.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1.2,
      delay: 0.3,
      ease: 'elastic.out(1, 0.3)',
      scrollTrigger: {
        trigger: h2Ref.current,
        start: 'top 85%',
        end: 'bottom top',
        toggleActions: 'play none none reset',
      },
    })

    gsap.from(pRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: pRef.current,
        start: 'top 85%',
        end: 'bottom top',
        toggleActions: 'play none none reset',
      },
    })

    gsap.registerPlugin(ScrollTrigger)
    gsap.to(pageRef.current, {
      opacity: 1,
      duration: 0.2,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: pageRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reset',
      },
    })

    return () => {
      gsap.killTweensOf(spanRef.current)
      gsap.killTweensOf(h2Ref.current)
      gsap.killTweensOf(pRef.current)

      gsap.killTweensOf(pageRef.current)
    }
  }, [])

  return (
    <section
      id={id ?? 'features'}
      className="relative flex w-full flex-col items-center pb-[523px] opacity-0 sm:pb-[800px] lg:flex-row lg:pb-72"
      ref={pageRef}
    >
      <div className="mx-auto size-full max-w-[1920px] grid-cols-[auto_562px] lg:grid lg:grid-cols-[auto_656px]">
        <div className="flex-1 px-4 lg:pl-20 lg:pr-0">
          <div className="my-20 flex w-full max-w-[1180px] flex-1 flex-col">
            <div className="flex w-full flex-col lg:mt-20">
              <span
                ref={spanRef}
                className="mb-2 text-center text-xl font-medium text-brand-yellow-700 lg:text-left"
              >
                System features
              </span>
              <h2
                ref={h2Ref}
                className="text-center text-[3.5rem] font-extrabold leading-title lg:text-left"
              >
                Powerful features
              </h2>
              <p
                ref={pRef}
                className="text-center text-xl leading-9 lg:text-left"
              >
                Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et
                et. Auctor turpis semper id sit ornare maecenas lectus sed.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-12 pt-12">
              <Card
                title="Erat sit"
                icon="tournament"
                iconStyle="text-brand-purple-500"
                content="Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis."
              />
              <Card
                title="Ullamcorper arcu"
                icon="thumbs-up"
                iconStyle="text-brand-purple-500"
                content="Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum."
              />
              <Card
                title="Et pellentesque"
                icon="transition-up"
                iconStyle="text-brand-purple-500"
                content="Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate."
              />
              <Card
                title="Amet egestas"
                icon="perspective-view"
                iconStyle="text-brand-purple-500"
                content="Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. "
              />
            </div>
          </div>
        </div>
        <ImagePC />
        <ImageMobile />
      </div>
    </section>
  )
}
