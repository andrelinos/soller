import Image from 'next/image'

export function ImagePC() {
  return (
    <>
      <div className="relative mx-auto hidden size-full gap-4 lg:flex">
        <div className="absolute right-[-39.15rem] top-[-60px] h-[1000px] w-[1147px] lg:right-[-35.8125rem]">
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
              className="absolute left-[3.3rem] top-32 z-10 h-auto w-[482px]"
              alt=""
            />
          </div>
        </div>
        <div />
      </div>
    </>
  )
}
