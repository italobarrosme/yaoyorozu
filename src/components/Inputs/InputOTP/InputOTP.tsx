'use client'

import * as React from 'react'
import { OTPInput, OTPInputContext } from 'input-otp'
import { Icon } from '@iconify/react'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '../../../utils/cn'

const InputOTPprimitive = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      'flex items-center gap-2 has-[:disabled]:opacity-50',
      containerClassName
    )}
    className={cn('disabled:cursor-not-allowed', className)}
    {...props}
  />
))
InputOTPprimitive.displayName = 'InputOTPprimitive'

export type InputOTPProps = React.ComponentPropsWithoutRef<typeof OTPInput>

const InputOTPGroup = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
))
InputOTPGroup.displayName = 'InputOTPGroup'

const inputOTPSlotStyles = cva(
  ['relative flex h-10 w-10 items-center justify-center'],
  {
    variants: {
      variant: {
        default:
          'border-b border-neutral-dark text-sm transition-all mx-2 text-2xl font-semibold',
        box: 'border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

type InputOTPSlotStylesProps = VariantProps<typeof inputOTPSlotStyles>

const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & {
    index: number
  } & InputOTPSlotStylesProps
>(({ index, className, variant, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        inputOTPSlotStyles({ variant }),
        isActive && 'z-10 ring-2 ring-ring ring-offset-background',
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = 'InputOTPSlot'

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Icon icon="mdi:dot" />
  </div>
))
InputOTPSeparator.displayName = 'InputOTPSeparator'

export { InputOTPprimitive, InputOTPGroup, InputOTPSlot, InputOTPSeparator }

type InputOTProps = {
  maxLength?: number
  variant?: 'default' | 'box'
} & Omit<React.ComponentPropsWithoutRef<typeof InputOTPprimitive>, 'children'>

export const InputOTP = ({
  maxLength = 4,
  variant,
  onChange,
  noScriptCSSFallback,
  onComplete,
  pattern,
  value,
  containerClassName,
  pushPasswordManagerStrategy,
  textAlign,
}: InputOTProps) => {
  return (
    <InputOTPprimitive
      maxLength={maxLength}
      onChange={onChange}
      noScriptCSSFallback={noScriptCSSFallback}
      onComplete={onComplete}
      pattern={pattern}
      value={value}
      containerClassName={containerClassName}
      pushPasswordManagerStrategy={pushPasswordManagerStrategy}
      textAlign={textAlign}
    >
      <InputOTPGroup>
        {Array.from({ length: maxLength }, (_, index) => (
          <InputOTPSlot key={index} index={index} variant={variant} />
        ))}
      </InputOTPGroup>
    </InputOTPprimitive>
  )
}
