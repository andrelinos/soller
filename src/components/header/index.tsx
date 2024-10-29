'use client'

import Link from 'next/link'

import { MenuMobile } from './components/nav-menu'
import { MenuNav } from './components/nav-menu/menu'

export function Header() {
  return (
    <header className="absolute z-50 flex w-full items-center justify-center">
      <div className="relative mx-auto flex h-28 w-full items-center justify-between px-4 lg:px-20 lg:pt-6 xl:pt-0">
        <Link href="#home" className="h-full xl:h-fit xl:py-12 xl:pr-9">
          <span className="text-[2rem] font-bold">soller</span>
        </Link>

        <div className="hidden w-full flex-1 xl:block">
          <MenuNav />
        </div>
        <div className="absolute -top-4 right-1 py-6 lg:top-1 xl:hidden">
          <MenuMobile />
        </div>
      </div>
    </header>
  )
}
