'use client'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import NextLink from 'next/link'
import * as React from 'react'

import { cn } from '@/lib/utils'

const linkVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        social:
          'h-12 rounded-full bg-primary text-2xl font-light text-primary-foreground hover:bg-primary/90',
        unstyled: 'bg-transparent',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        social: 'h-12 px-4 py-2',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean
  href?: string
  externalLink?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      href = '#',
      externalLink,
      ...props
    },
    ref,
  ) => {
    const [baseUrl, setBaseUrl] = React.useState<string>('')
    const Comp = asChild ? Slot : NextLink

    React.useEffect(() => {
      const currentUrl = window.location.href
      const baseUrl = currentUrl.split('/').slice(0, 3).join('/')
      setBaseUrl(baseUrl)
    }, [])
    return (
      <Comp
        className={cn(linkVariants({ variant, size, className }))}
        ref={ref}
        href={externalLink ? href : `${baseUrl}/${href}`}
        {...props}
      />
    )
  },
)

Link.displayName = 'Link'

export { Link, linkVariants }
