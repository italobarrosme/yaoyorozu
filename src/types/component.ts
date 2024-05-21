import { ReactElement, ReactNode } from 'react'

export type ComponentProps<T> = {
  children?: ReactNode
  className?: string
} & T

export type Component<T> = (props: ComponentProps<T>) => ReactElement | null
