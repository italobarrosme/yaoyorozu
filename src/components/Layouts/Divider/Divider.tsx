'use client'

import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { cn } from '../../../utils/cn'

export type DividerProps = {
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
} & React.ComponentProps<typeof SeparatorPrimitive.Root>

export const Divider = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-neutral-light shrink-0',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      data-testid="divider"
      {...props}
    />
  )
)
Divider.displayName = SeparatorPrimitive.Root.displayName
