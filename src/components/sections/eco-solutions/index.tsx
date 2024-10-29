import Image from 'next/image'

interface Props {
  id?: string
}
export function SectionEcoSolutions({ id }: Props) {
  return (
    <section
      id={id || 'eco-solutions'}
      className="relative flex w-full flex-col justify-center pl-4 pt-24"
    >
      <div className="mx-auto flex w-full flex-col items-center pr-4 lg:px-40 xl:my-20 xl:px-40 2xl:px-32 3xl:px-80">
        <span className="mb-2 text-xl font-medium text-brand-yellow-700">
          No more waste
        </span>
        <h2 className="text-[3.5rem] font-extrabold leading-title">
          Pick the Sun
        </h2>
        <p className="mb-12 mt-6 pl-6 text-center leading-text-base sm:px-12 lg:text-left lg:text-xl lg:leading-9 2xl:px-[200px]">
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>
      <div className="relative flex w-full justify-center pb-20">
        <span className="absolute -left-40 top-[-6.4rem] size-[230px] rounded-full bg-brand-yellow-600 sm:left-[-10.5rem] sm:top-[-6.4rem] sm:size-[290px] lg:-left-52 lg:top-[-7.5rem] lg:size-[460px] xl:-left-72 xl:-top-36 xl:size-[596px] 2xl:-left-80 2xl:-top-44 2xl:size-[710px] 3xl:-left-52 3xl:-top-24" />
        <span className="absolute -top-8 right-[-10.5rem] size-[210px] rounded-full bg-brand-purple-400 sm:right-[-10.5rem] sm:top-[-1.4rem] sm:size-[260px] lg:-right-4  lg:top-2 lg:size-[396px] xl:-right-6 xl:top-[1.6rem] xl:size-[496px] 2xl:size-[596px]" />
        <div className="relative z-10 flex h-auto justify-center overflow-hidden lg:w-full lg:px-20 2xl:px-[120px]">
          <span className="inset-0 -right-3 size-fit h-auto w-[360px] overflow-hidden rounded-lg bg-white p-0 shadow-lg sm:w-[618px] md:w-[736px] lg:w-[950px] lg:bg-transparent lg:shadow-none xl:w-full">
            <Image
              src="/assets/images/desktop-screen.png"
              width={1520}
              height={854}
              priority
              className="object-cover"
              alt=""
            />
          </span>
        </div>
      </div>
    </section>
  )
}
