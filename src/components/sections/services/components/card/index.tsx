import { Icons } from '@/assets/icons'
import { cn } from '@/lib/utils'

interface CardProps {
  icon?: string
  title: string
  size?: number
  content: string
  iconStyle?: string
  strokeWidth?: number
}

export function Card({
  icon,
  title,
  size,
  content,
  iconStyle,
  strokeWidth,
}: CardProps) {
  return (
    <div className="relative flex flex-col items-center gap-4 lg:items-start">
      <span
        className={cn(
          'flex size-16 max-w-16 overflow-hidden rounded-lg p-2',
          iconStyle,
        )}
      >
        <Icons icon={icon} size={size} strokeWidth={strokeWidth} />
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
