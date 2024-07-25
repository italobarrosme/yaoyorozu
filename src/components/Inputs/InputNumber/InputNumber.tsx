'use client'

import { forwardRef, InputHTMLAttributes, ReactNode, useState } from 'react'
import { cn } from '../../../utils/cn'
import { formatCurrency } from '../../../utils/formaters'
import { FormatCurrencyOptions } from '../../../utils/formaters/formatCurrency'

export type InputNumberProps = {
  label: string
  className?: string
  icon?: ReactNode
  error?: string
  auxiliary?: string
  currency?: FormatCurrencyOptions
  dark?: boolean
  onChangeValue?: (value: string | number) => void
} & InputHTMLAttributes<HTMLInputElement>

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (
    {
      label,
      icon,
      auxiliary,
      className,
      error,
      currency,
      dark = false,
      onChange,
      onChangeValue,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (currency) {
        const { parsedValue, numericValue } = formatCurrency(
          e.target.value,
          currency
        )
        setValue(parsedValue)

        if (onChange) onChange(e)
        if (onChangeValue) onChangeValue(numericValue)
      } else {
        const inputNumber = Number(e.target.value)
        setValue(inputNumber.toString())

        if (onChange) onChange(e)
        if (onChangeValue) onChangeValue(inputNumber)
      }
    }

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
            className={cn(
              'h-10 w-full text-inherit rounded-md border border-primary-regular p-2 outline-none placeholder:text-neutral-light focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-regular focus-visible:ring-offset-2',
              {
                'border-feedback-error': error,
              },
              {
                'bg-neutral-dark text-neutral-white': dark,
              }
            )}
            aria-describedby={`${props.name}-error`}
            value={value}
            onChange={handleChange}
            maxLength={15}
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

InputNumber.displayName = 'InputNumber'
