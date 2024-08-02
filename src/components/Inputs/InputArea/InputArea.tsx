'use client'

import { cn } from './../../../utils/cn'
import { ReactNode, TextareaHTMLAttributes, forwardRef } from 'react'

export type InputAreaProps = {
  label: string
  className?: string
  error?: string
  auxiliary?: string
  dark?: boolean
  icon?: ReactNode
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const InputArea = forwardRef<HTMLTextAreaElement, InputAreaProps>(
  (
    { className, dark = false, label, error, auxiliary, icon, ...props },
    ref
  ) => {
    return (
      <div className="relative flex w-80 flex-col gap-2 lg:min-w-full">
        <label
          htmlFor={props.name}
          className="relative text-xs font-semibold text-inherit"
        >
          {label}
        </label>
        <div className="flex gap-2">
          <textarea
            name={props.name}
            className={cn(
              'min-h-60 w-full text-neutral-black rounded-md border border-primary-regular p-2 outline-none placeholder:text-neutral-light focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-regular focus-visible:ring-offset-2',
              {
                'border-feedback-error': error,
              },
              {
                'bg-neutral-dark text-neutral-white': dark,
              },
              className
            )}
            aria-describedby={`${props.name}-error`}
            ref={ref}
            {...props}
          />
          <i className="absolute top-8 right-2">{icon}</i>
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
InputArea.displayName = 'InputArea'

export { InputArea }
