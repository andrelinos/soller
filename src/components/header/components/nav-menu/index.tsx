'use client'

import { ArrowRight, Menu } from 'iconoir-react'
import { useState } from 'react'

import { Link } from '@/components/link'
import { Button } from '@/components/ui/button'

import { X } from 'lucide-react'
import Image from 'next/image'
import { menuData } from '../../assets/menu-data'

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <Button
        variant="outline"
        className="fixed size-10 top-4 right-1 p-0 flex justify-center items-center text-3xl text-brand-orange-600 z-30"
        onClick={toggleMenu}
      >
        <Menu />
        <span className="sr-only">Menu</span>
      </Button>
      <div
        className={`fixed inset-0 z-40 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-white shadow-lg`}
      >
        <div className="size-full overflow-hidden relative">
          <span className="absolute -right-28 -top-28 z-0 size-60 rounded-full bg-brand-blue-400" />
          <span className="absolute -bottom-[17rem] -left-[11rem] z-0 size-80 rounded-full bg-brand-purple-300" />
          <Button
            variant="outline"
            className="absolute top-4 size-10 flex justify-center items-center right-1 p-0 text-3xl text-brand-orange-600"
            onClick={toggleMenu}
          >
            <X className="text-brand-orange-600" />
            <span className="sr-only">Close</span>
          </Button>
          <section className="min-h-screen p-6">
            <header className="mb-8">
              <span className="text-2xl font-bold">soller</span>
            </header>

            <nav className="flex size-full flex-col items-center pt-10 gap-4">
              <Link
                key={String()}
                href="#home"
                variant="ghost"
                className="w-full p-4 text-xl text-center text-brand-purple-500 hover:bg-brand-purple-200"
                onClick={toggleMenu}
              >
                Home
              </Link>
              {menuData?.map((item, i) => (
                <Link
                  key={String()}
                  href={item.url}
                  variant="ghost"
                  className="w-full p-4 text-xl text-center text-brand-purple-500 hover:bg-brand-purple-200"
                  onClick={toggleMenu}
                >
                  {item.title}
                </Link>
              ))}
              <div className="flex-col gap-6 font-medium xl:flex xl:flex-row xl:justify-end">
                <Link
                  variant="ghost"
                  href="#"
                  size="social"
                  className="flex h-16 items-center gap-4 rounded-full border px-6 text-brand-blue-500"
                >
                  <Image
                    src="/assets/images/icons/phone.svg"
                    width={20}
                    height={19}
                    alt="Contact phone"
                    priority
                  />
                  555 818 282
                </Link>
                <Link
                  variant="outline"
                  href="tel:555818282"
                  className="group mt-6 flex h-16 w-[306px] items-center justify-center gap-6 rounded-full border border-brand-purple-500 bg-transparent px-6 text-2xl font-bold text-brand-purple-500 hover:bg-brand-purple-500 hover:text-brand-yellow-400 xl:mt-0"
                >
                  Request a Quote
                  <ArrowRight width={24} height={24} strokeWidth={2} />
                </Link>
              </div>
            </nav>
          </section>
        </div>
      </div>
    </div>
  )
}
