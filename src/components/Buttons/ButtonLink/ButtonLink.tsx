'use client'

import { MotionProps, motion } from 'framer-motion'
import { cn } from '../../../utils/cn'
import { cva, VariantProps } from 'class-variance-authority'

const buttonLinkStyles = cva(
  [
    `flex justify-center items-center gap-2 whitespace-nowrap rounded text-xs font-bold text-white transition-colors delay-300 hover:bg-secondary 
    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-regular focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
  ],
  {
    variants: {
      size: {
        small: 'px-2 py-3 text-xs w-32 h-4',
        medium: 'px-2 py-2 text-sm w-40 h-8',
        large: 'px-2 py-3 text-lg w-72 h-10',
        full: 'w-full px-3 py-2 text-sm h-8',
        fit: 'p-2 text-sm h-8 w-fit',
        rounded: 'rounded-full w-16 h-16 justify-center items-center',
      },
      style: {
        regular:
          'bg-transparent text-neutral-dark hover:text-secondary-regular underline',
        outline:
          'border border-primary-regular text-neutral-dark bg-transparent hover:bg-primary-regular hover:text-white underline',
        block:
          'text-neutral-dark bg-primary-regular hover:text-complementary-highlight underline',
      },
    },
  }
)

type ButtonLinkStylesProps = VariantProps<typeof buttonLinkStyles>

export type ButtonLinkVariant = Omit<
  ButtonLinkStylesProps,
  'size' | 'style'
> & {
  variant: `${NonNullable<ButtonLinkStylesProps['size']>}/${NonNullable<ButtonLinkStylesProps['style']>}`
}

export type ButtonLinkProps = {
  children: React.ReactNode
  className?: string
} & ButtonLinkVariant &
  MotionProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>

export const ButtonLink = ({
  children,
  className,
  variant,
  ...props
}: ButtonLinkProps) => {
  const [size, style] = variant.split('/') as [
    ButtonLinkStylesProps['size'],
    ButtonLinkStylesProps['style'],
  ]

  return (
    <motion.a
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 0.95 }}
      className={cn(buttonLinkStyles({ size, style }), className)}
      {...props}
      href={props.href}
    >
      {children}
    </motion.a>
  )
}
