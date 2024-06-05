'use client'

import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../../utils/cn'

export type InputTextProps = {
  label: string
  className?: string
  icon?: ReactNode
  error?: string
  auxiliary?: string
  dark?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    { label, dark = false, icon, auxiliary, className, error, ...props },
    ref
  ) => {
    return (
      <div className={cn('relative flex w-full flex-col gap-2', className)}>
        <label
          id={props.name}
          className={cn('font-semibold text-xs text-inherit', {
            'text-neutral-white': dark,
          })}
        >
          {label}
        </label>
        <div className="relative">
          <input
            ref={ref}
            {...props}
            type="text"
            className={cn(
              'h-10 w-full text-inherit rounded-md border-2 border-primary-regular p-2 outline-none placeholder:text-neutral-light',
              {
                'border-feedback-error': error,
              },
              {
                'bg-neutral-dark text-neutral-white': dark,
              }
            )}
            aria-describedby={`${props.name}-error`}
          />
          <i className="absolute top-2 right-2">{icon}</i>
        </div>
        {auxiliary && !error && (
          <span
            className={cn('text-xs text-inherit', {
              'text-neutral-white': dark,
            })}
          >
            {auxiliary}
          </span>
        )}
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
)

InputText.displayName = 'InputText'
