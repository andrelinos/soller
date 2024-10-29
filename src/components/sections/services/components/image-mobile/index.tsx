import Image from 'next/image'

export function ImageMobile() {
  return (
    <>
      <div className="relative mx-auto flex size-full gap-4 lg:hidden">
        <div className="absolute left-[-17.5rem] h-auto w-[600px] sm:left-[-17rem] sm:scale-150 md:-left-40">
          <div className="relative size-full flex-1">
            <Image
              src="/assets/images/rectangle-services-a.svg"
              width={600}
              height={523}
              priority
              className="absolute inset-0"
              alt=""
            />

            <Image
              src="/assets/images/image-services-left-mobile.svg"
              width={509}
              height={900}
              priority
              className="absolute right-[-3.2rem] top-6 z-10 h-auto w-[320px]"
              alt=""
            />
          </div>
        </div>
        <div />
      </div>
    </>
  )
}
