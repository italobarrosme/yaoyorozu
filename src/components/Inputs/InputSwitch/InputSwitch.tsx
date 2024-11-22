'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'

import { cn } from '../../../utils/cn'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      `peer inline-flex h-6 w-11 shrink-0 cursor-pointer 
      items-center rounded-full border-2 border-transparent transition-colors 
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
      focus-visible:ring-offset-complementary-highlight disabled:cursor-not-allowed disabled:opacity-50 
      data-[state=checked]:bg-primary-regular data-[state=unchecked]:bg-neutral-light`,
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        `pointer-events-none block h-5 w-5 rounded-full bg-primary-foreground shadow-lg ring-0 transition-transform 
        data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0`
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export type InputSwitchProps = {
  id: string
  label?: string
  className?: string
  dark?: boolean
} & React.ComponentProps<typeof Switch>

export const InputSwitch = ({
  id,
  label,
  className,
  onCheckedChange,
  dark = false,
  ...props
}: InputSwitchProps) => {
  return (
    <div className={cn(`flex gap-4`, className)}>
      <Switch id={id} onCheckedChange={onCheckedChange} {...props} />
      <label
        htmlFor={id}
        className={cn('font-semibold text-inherit', {
          'text-neutral-white': dark,
        })}
      >
        {label}
      </label>
    </div>
  )
}
