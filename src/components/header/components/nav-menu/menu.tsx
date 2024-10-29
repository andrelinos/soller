import { ArrowRight } from 'iconoir-react'
import Image from 'next/image'

import { Link } from '@/components/link'
import { menuData } from '../../assets/menu-data'

export function MenuNav() {
  return (
    <nav className="relative z-30 flex w-full flex-1 flex-col items-center justify-between gap-9 px-4 py-6 font-medium xl:flex xl:flex-row xl:px-0">
      <div className="flex w-full flex-col items-center justify-center gap-4 pt-20 xl:flex-row xl:justify-start xl:pt-0">
        {menuData?.map((item, i) => (
          <Link
            key={String()}
            href={item.url}
            variant="ghost"
            className="w-full rounded-full text-xl xl:w-fit xl:text-base"
          >
            {item.title}
          </Link>
        ))}
      </div>

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
  )
}
