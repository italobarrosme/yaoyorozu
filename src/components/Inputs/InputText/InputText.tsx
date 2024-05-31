import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../../utils/cn'

export type InputTextProps = {
  label: string
  name: string
  className?: string
  icon?: ReactNode
  error?: string
  auxiliary?: string
} & InputHTMLAttributes<HTMLInputElement>

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ label, icon, auxiliary, className, error, ...props }, ref) => {
    return (
      <div className={cn('relative flex w-full flex-col gap-2', className)}>
        <label className="font-semibold text-xs text-inherit">{label}</label>
        <div className="relative">
          <input
            ref={ref}
            {...props}
            type="text"
            className="h-8 w-full text-inherit rounded-md border-2 border-primary-medium p-2 outline-none placeholder:text-neutral-light"
            aria-describedby={`${name}-error`}
          />
          <i className="absolute top-2 right-2">{icon}</i>
        </div>
        {auxiliary && !error && (
          <span className="text-xs text-inherit">{auxiliary}</span>
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
