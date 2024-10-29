import Image from 'next/image'

export function ImagePC() {
  return (
    <>
      <div className="relative mx-auto hidden size-full gap-4 lg:flex">
        <div className="absolute left-[-39.15rem] top-[27px] h-[1000.13] w-[1147px] lg:left-[-36.15rem]">
          <div className="relative size-full flex-1">
            <Image
              src="/assets/images/rectangle-services-a.svg"
              width={1146}
              height={1000}
              priority
              className="absolute inset-0"
              alt=""
            />

            <Image
              src="/assets/images/image-services-left.svg"
              width={509}
              height={900}
              priority
              className="absolute -right-14 top-10 z-10 h-auto w-[564px]"
              alt=""
            />
          </div>
        </div>
        <div />
      </div>
    </>
  )
}
