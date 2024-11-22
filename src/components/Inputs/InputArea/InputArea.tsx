'use client'

import { cn } from './../../../utils/cn'
import {
  ReactNode,
  TextareaHTMLAttributes,
  forwardRef,
  useRef,
  useEffect,
} from 'react'

export type InputAreaProps = {
  label: string
  className?: string
  error?: string
  auxiliary?: string
  dark?: boolean
  icon?: ReactNode
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const setTextAreaHeight = (element: HTMLTextAreaElement) => {
  if (element) {
    element.style.height = '0'
    element.style.height = `${element.scrollHeight + 10}px`
  }
}

const InputArea = forwardRef<HTMLTextAreaElement, InputAreaProps>(
  (
    { className, dark = false, label, error, auxiliary, icon, ...props },
    ref
  ) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
      if (textAreaRef.current) {
        setTextAreaHeight(textAreaRef.current)
      }
    }, [])

    return (
      <div className="relative flex w-80 flex-col gap-2 lg:min-w-full">
        <label
          htmlFor={props.name}
          className={cn('font-semibold text-inherit', {
            'text-neutral-white': dark,
          })}
        >
          {label}
        </label>
        <div className="flex gap-2">
          <textarea
            name={props.name}
            className={cn(
              'h-10 w-full text-neutral-dark rounded-md border border-primary-regular p-2 outline-none placeholder:text-neutral-light focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-regular focus-visible:ring-offset-2',
              {
                'border-feedback-error': error,
              },
              {
                'bg-neutral-dark text-neutral-white': dark,
              },
              className
            )}
            aria-describedby={`${props.name}-error`}
            ref={ref || textAreaRef}
            onInput={(e) => setTextAreaHeight(e.currentTarget)}
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
