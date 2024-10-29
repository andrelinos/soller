'use client'

import classNames from 'classnames'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'iconoir-react'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

import { Icons } from '@/assets/icons'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { getInitialsFullNameAvatar } from '@/utils/getInitialsNameUser'

import { carouselData } from './assets/data'

interface CarouselItemProps {
  icon: string
  userAvatar: string
  content: string
  userName: string
  kwh: number
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [startPosition, setStartPosition] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)

  const onMouseDown = (e: React.MouseEvent) => {
    if (scrollRef?.current) {
      setIsDragging(true)
      setStartPosition(e.pageX - scrollRef.current.offsetLeft)
      setScrollPosition(scrollRef.current.scrollLeft)
    }
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    if (scrollRef?.current) {
      e.preventDefault()
      const x = e.pageX - scrollRef.current.offsetLeft
      const walk = (x - startPosition) * 2 // Ajustar velocidade de rolagem
      scrollRef.current.scrollLeft = scrollPosition - walk
    }
  }

  const onMouseUp = () => {
    setIsDragging(false)
  }

  const PrevButton = ({ onClick, disabled }: ButtonProps) => (
    <Button
      id="prev-button"
      variant="outline"
      onClick={onClick}
      disabled={disabled}
      className="size-12 rounded-full border-2 border-brand-yellow-400 bg-transparent text-2xl font-bold text-brand-yellow-400 hover:bg-brand-yellow-400 hover:text-brand-orange-600 disabled:cursor-not-allowed"
    >
      <ArrowLeft width={24} height={24} strokeWidth={2} />
    </Button>
  )

  const NextButton = ({ onClick, disabled }: ButtonProps) => (
    <Button
      id="next-button"
      variant="outline"
      onClick={onClick}
      disabled={disabled}
      className="size-12 rounded-full border-2 border-brand-yellow-400 bg-transparent text-2xl font-bold text-brand-yellow-400 hover:bg-brand-yellow-400 hover:text-brand-orange-600 disabled:cursor-not-allowed"
    >
      <ArrowRight width={24} height={24} strokeWidth={2} />
    </Button>
  )

  useEffect(() => {
    if (!emblaApi) return

    const updateButtons = () => {
      setPrevBtnEnabled(emblaApi.canScrollPrev())
      setNextBtnEnabled(emblaApi.canScrollNext())
    }

    emblaApi.on('select', updateButtons)
    updateButtons()
  }, [emblaApi])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && prevBtnEnabled) {
        document.getElementById('prev-button')?.click()
      } else if (event.key === 'ArrowRight' && nextBtnEnabled) {
        document.getElementById('next-button')?.click()
      }
    },
    [prevBtnEnabled, nextBtnEnabled],
  )

  const handleMouseEnter = useCallback(
    (index: number) => {
      if (!emblaApi) return
      if (!emblaApi.slidesInView().includes(index)) {
        console.log('index', index)
        emblaApi.scrollTo(index)
      }
    },
    [emblaApi],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex gap-6">
        {carouselData.map((carousel: CarouselItemProps, index) => {
          return (
            <div
              key={String(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              className="rounded-lg transition-colors duration-300 ease-in-out lg:py-6 lg:hover:bg-white"
            >
              <div
                key={String(index)}
                className="h-[410px] w-[359px] min-w-0 flex-none rounded-lg bg-white p-8 md:h-[442px] md:w-[364px]"
              >
                <div className="flex size-full flex-1 flex-col justify-between">
                  <span
                    className={classNames('text-brand-purple-500', {
                      'opacity-10': !carousel?.icon?.length,
                    })}
                  >
                    <Icons
                      icon={carousel.icon}
                      strokeWidth={carousel?.icon?.length ? 1.5 : 1}
                    />
                  </span>
                  <ScrollArea
                    ref={scrollRef}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseUp}
                    className="flex-1 pb-5 pt-4"
                  >
                    <p className="line-clamp-7 overflow-hidden text-base leading-text-sm transition-all duration-300 ease-in-out hover:line-clamp-none lg:select-none  lg:text-lg">
                      {carousel.content}
                    </p>
                  </ScrollArea>
                  <div className="flex gap-4">
                    <div className="size-16 select-none overflow-hidden rounded-full border border-zinc-400 duration-300 ease-in-out hover:scale-110">
                      {carousel?.userAvatar &&
                      carousel?.userAvatar.length > 1 ? (
                        <Image
                          src={carousel.userAvatar}
                          width={64}
                          height={64}
                          className="object-cover"
                          priority
                          alt={carousel.userName}
                        />
                      ) : (
                        <span className="flex size-16 items-center justify-center rounded-full text-xl font-bold text-zinc-600 shadow-lg">
                          {getInitialsFullNameAvatar(carousel.userName)}
                        </span>
                      )}
                    </div>
                    <div className="flex select-none flex-col justify-center">
                      <span className="text-base leading-text-lg md:text-lg">
                        {carousel.userName}
                      </span>
                      <span className="text-sm leading-text-base text-brand-text-secondary md:text-base">
                        {carousel.kwh ?? '0'} KWh
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex min-h-14 w-full justify-center gap-6 pt-20 md:justify-start">
        <PrevButton
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!prevBtnEnabled}
        />
        <NextButton
          onClick={() => emblaApi?.scrollNext()}
          disabled={!nextBtnEnabled}
        />
      </div>
    </div>
  )
}
