import Image from 'next/image'

export function ImageMobile() {
  return (
    <>
      <div className="relative mx-auto flex size-full gap-4 lg:hidden">
        <div className="absolute right-[-17.10rem] top-[-60px] h-auto w-[600px] sm:right-[-17rem] sm:scale-150 md:-right-40 lg:right-[-35.8125rem]">
          <div className="relative size-full flex-1">
            <Image
              src="/assets/images/rectangle-services-b.svg"
              width={1146}
              height={1000}
              priority
              className="absolute inset-0"
              alt=""
            />

            <Image
              src="/assets/images/image-services-right.svg"
              width={509}
              height={900}
              priority
              className="absolute left-[0.85rem] top-12 z-10 h-auto w-[260px]"
              alt=""
            />
          </div>
        </div>
        <div />
      </div>
    </>
  )
}
