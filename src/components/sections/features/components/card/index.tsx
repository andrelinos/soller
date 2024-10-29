import Image from 'next/image'

interface CardProps {
  title: string
  content: string
  imageIcon?: string
}

export function Card({ title, imageIcon, content }: CardProps) {
  return (
    <div className="relative flex flex-col items-center gap-4 lg:items-start">
      <span className="flex size-16 max-w-16 overflow-hidden rounded-lg p-2">
        <Image
          src={imageIcon ?? '/assets/images/default-image.jpg'}
          width={100}
          height={100}
          className="rounded-lg object-cover opacity-70"
          alt=""
        />
      </span>
      <span className="text-center text-xl font-medium leading-text-sm lg:text-left lg:font-bold">
        {title}
      </span>
      <p className="text-center text-base lg:text-left lg:text-lg lg:leading-text-lg">
        {content}
      </p>
    </div>
  )
}
