'use client'

import { cva, VariantProps } from 'class-variance-authority'
import { Component } from '../../../types/component'
import { cn } from '../../../utils/cn'
import { ButtonHTMLAttributes, ReactNode } from 'react'
const buttonStyles = cva(
  [
    `flex justify-center items-center gap-2 whitespace-nowrap
    text-xs font-bold text-white transition-colors transition ease-in-out delay-150
    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-regular focus-visible:ring-offset-2 
    disabled:cursor-not-allowed disabled:opacity-50`,
  ],
  {
    variants: {
      size: {
        small: 'px-2 py-3 text-sm w-32 h-8',
        medium: 'px-4 py-2 text-base w-60 h-10',
        large: 'px-4 py-3 text-lg w-72 h-10',
        full: 'w-full px-3 py-2 text-base h-10',
        fit: 'px-3 py-2 text-base h-10 w-fit',
        rounded: '!rounded-full w-16 h-16 justify-center items-center',
      },
      style: {
        regular:
          'bg-primary-regular rounded-md hover:border hover:bg-primary-regular/80 hover:text-primary-foreground',
        secondary:
          'bg-secondary-regular rounded-md text-secondary-foreground hover:bg-secondary-regular/80 hover:text-secondary-foreground',
        outline:
          'border border-primary-regular rounded-md text-primary-regular bg-transparent hover:bg-primary-regular hover:text-white',
        ghost:
          'bg-transparent text-primary-regular hover:opacity-80 hover:transparent',
        calendar: 'text-neutral-dark',
      },
    },
  }
)

type ButtonStylesProps = VariantProps<typeof buttonStyles>

export const ButtonVariantStyle = buttonStyles

export type ButtonVariant = Omit<ButtonStylesProps, 'size' | 'style'> & {
  variant: `${NonNullable<ButtonStylesProps['size']>}/${NonNullable<ButtonStylesProps['style']>}`
}

export type ButtonProps = {
  children?: ReactNode
  className?: string
} & ButtonVariant &
  ButtonHTMLAttributes<HTMLButtonElement>

export const Button: Component<ButtonProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  const [size, style] = variant.split('/') as [
    ButtonStylesProps['size'],
    ButtonStylesProps['style'],
  ]

  return (
    <button className={cn(buttonStyles({ size, style }), className)} {...props}>
      {children}
    </button>
  )
}
