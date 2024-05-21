import { Component } from '../../types/component'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from './../../utils/cn'
import { ElementType, HTMLProps } from 'react'

const textStyles = cva([], {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      black: 'font-black',
    },
  },
  defaultVariants: {
    size: 'md',
    weight: 'normal',
  },
})

type TextStylesProps = VariantProps<typeof textStyles>

export type TextVariant = Omit<TextStylesProps, 'size' | 'weight'> & {
  variant: `${NonNullable<TextStylesProps['size']>}/${NonNullable<
    TextStylesProps['weight']
  >}`
}

type SelectedTags = keyof JSX.IntrinsicElements extends infer K
  ? K extends
      | 'h1'
      | 'h2'
      | 'h3'
      | 'h4'
      | 'h5'
      | 'h6'
      | 'p'
      | 'label'
      | 'strong'
      | 'em'
      | 'small'
    ? K
    : never
  : never

export type TextProps = {
  tag?: SelectedTags
} & TextVariant &
  HTMLProps<HTMLElement>

export const Text: Component<TextProps> = ({
  variant = 'md/medium',
  children,
  className,
  tag = 'p',
  ...props
}) => {
  const [size, weight] = variant.split('/') as [
    TextStylesProps['size'],
    TextStylesProps['weight'],
  ]

  const Tag = tag as ElementType

  return (
    <Tag className={cn(textStyles({ size, weight }), className)} {...props}>
      {children}
    </Tag>
  )
}
