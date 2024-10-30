'use client'

import { gsap } from 'gsap'
import { ArrowRight, Menu } from 'iconoir-react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { Link } from '@/components/link'
import { Button } from '@/components/ui/button'

import { menuData } from '../../assets/menu-data'

export function MenuMobile() {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(
    null,
  ) as React.MutableRefObject<HTMLDivElement | null>
  const [isOpen, setIsOpen] = useState(false)
  const [baseUrl, setBaseUrl] = useState<string>('')

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        containerRef.current,
        { x: '-100%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 0.5, ease: 'power2.out' },
      )
    } else {
      gsap.to(containerRef.current, {
        x: '-100%',
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      })
    }
  }, [isOpen])

  useEffect(() => {
    const currentUrl = window.location.href
    const baseUrl = currentUrl.split('/').slice(0, 3).join('/')
    setBaseUrl(baseUrl)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <Button
        variant="outline"
        className="fixed right-1 top-4 z-30 flex size-10 items-center justify-center p-0 text-3xl text-brand-orange-600"
        onClick={toggleMenu}
      >
        <Menu />
        <span className="sr-only">Menu</span>
      </Button>
      <div
        id="content-menu-mobile"
        className={`fixed inset-0 z-40 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-white shadow-lg`}
        ref={containerRef}
      >
        <div className="relative size-full overflow-hidden">
          <span className="absolute -right-28 -top-28 z-0 size-60 rounded-full bg-brand-blue-400" />
          <span className="absolute -left-44 bottom-[-17rem] z-0 size-80 rounded-full bg-brand-purple-300" />
          <Button
            variant="outline"
            className="absolute right-1 top-4 flex size-10 items-center justify-center p-0 text-3xl text-brand-orange-600"
            onClick={toggleMenu}
          >
            <X className="text-brand-orange-600" />
            <span className="sr-only">Close</span>
          </Button>
          <section className="min-h-screen p-6">
            <header className="mb-8">
              <span className="text-2xl font-bold">soller</span>
            </header>

            <nav className="flex size-full flex-col items-center gap-2 px-8 pt-10">
              <Link
                key={String()}
                href="#home"
                variant="ghost"
                className="h-12 w-full max-w-[320px] rounded-full px-6 py-2 text-center text-xl text-brand-purple-500 transition-transform duration-300 ease-in-out hover:scale-125"
                onClick={() => toggleMenu()}
              >
                Home
              </Link>
              {menuData?.map((item, i) => (
                <Link
                  key={String(i)}
                  variant="ghost"
                  href={item.url}
                  className="h-12 w-full max-w-[320px] rounded-full px-6 py-2 text-center text-xl text-brand-purple-500 transition-transform duration-300 ease-in-out hover:scale-125"
                  onClick={() => toggleMenu()}
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex-col gap-4 pt-8 font-medium xl:flex xl:flex-row xl:justify-end">
                <Link
                  variant="ghost"
                  href="tel:555818282"
                  externalLink
                  size="social"
                  className="flex h-16 items-center gap-4 rounded-full border px-6 text-brand-blue-500"
                  onClick={() => toggleMenu()}
                >
                  <Image
                    src="/assets/images/icons/phone.svg"
                    width={20}
                    height={19}
                    alt="Contact phone"
                    className="h-auto w-5"
                    priority
                  />
                  555 818 282
                </Link>
                <Link
                  variant="outline"
                  href="request-quote"
                  className="group mt-6 flex h-16 w-[306px] items-center justify-center gap-6 rounded-full border border-brand-purple-500 bg-transparent px-6 text-2xl font-bold text-brand-purple-500 hover:bg-brand-purple-500 hover:text-brand-yellow-400 xl:mt-0"
                  onClick={() => toggleMenu()}
                >
                  Request a Quote
                  <ArrowRight width={24} height={24} strokeWidth={2} />
                </Link>
              </div>
              <ul className="mt-4 flex w-full justify-center gap-6 border-t pt-2">
                {menuData?.map((item, i) => (
                  <li key={String(i)}>
                    <Link
                      className="m-0 p-0 text-base text-brand-text-primary"
                      variant="link"
                      href={item.url}
                      onClick={() => toggleMenu()}
                    >
                      Terms
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </div>
  )
}
