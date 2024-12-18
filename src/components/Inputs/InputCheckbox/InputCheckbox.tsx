'use client'

import { cn } from '../../../utils/cn'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Icon } from '@iconify/react'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer h-6 w-6 shrink-0 rounded-md bg-neutral-white border-2 border-primary-regular ring-offset-secondary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-regular data-[state=checked]:text-primary-regular',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('flex items-center justify-center text-current')}
    >
      <span>
        <Icon
          icon={'iconamoon:check-bold'}
          className="h-4 w-4 text-neutral-white"
        />
      </span>
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

export type InputCheckboxProps = {
  label?: string
  className?: string
  error?: string
  dark?: boolean
} & React.ComponentProps<typeof Checkbox>

export const InputCheckbox = ({
  label,
  className,
  error,
  dark = false,
  ...props
}: InputCheckboxProps) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className={cn('flex items-center gap-4', className)}>
        <Checkbox id={props.name} {...props} />
        <label
          id={props.name}
          className={cn('font-semibold text-inherit', {
            'text-neutral-white': dark,
          })}
        >
          {label}
        </label>
      </div>
      {error && (
        <span
          className="text-feedback-error text-xs font-semibold"
          aria-live="polite"
          aria-atomic="true"
        >
          {error}
        </span>
      )}
    </div>
  )
}
