import { Menu } from 'iconoir-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { MenuNav } from './menu'

export function MenuMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild className="z-50 p-0">
        <Button
          variant="outline"
          className="size-10 p-0 text-7xl text-brand-orange-600"
        >
          <Menu />
          {/* <span className="sr-only">Menu</span> */}
        </Button>
      </SheetTrigger>
      <SheetContent className="min-h-screen w-full border-0">
        <SheetHeader>
          <SheetTitle className="text-left">
            <span className="text-[2rem] font-bold">soller</span>
          </SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="absolute inset-0 z-0 overflow-hidden overflow-y-auto">
          <div className="relative size-full flex-1 overflow-hidden rounded-tl-lg">
            <span className="absolute -right-28 -top-28 z-0 size-60 rounded-full bg-brand-blue-400" />
            <span className="absolute -bottom-32 -left-24 z-0 size-80 rounded-full bg-brand-purple-300" />
            <MenuNav />
          </div>
        </div>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  )
}
