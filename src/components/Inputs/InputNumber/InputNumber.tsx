'use client'

import { forwardRef, InputHTMLAttributes, ReactNode, useState } from 'react'
import { cn } from '../../../utils/cn'
import { formatCurrency } from '../../../utils/formaters'
import { FormatCurrencyOptions } from '../../../utils/formaters/formatCurrency'

export type InputNumberProps = {
  label: string
  name: string
  className?: string
  icon?: ReactNode
  error?: string
  auxiliary?: string
  currency?: FormatCurrencyOptions
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
        <label className="font-semibold text-xs text-inherit">{label}</label>
        <div className="relative">
          <input
            ref={ref}
            {...props}
            className={cn(
              'h-8 w-full text-inherit rounded-md border-2 border-primary-medium p-2 outline-none placeholder:text-neutral-light',
              {
                'border-feedback-error': error,
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

InputNumber.displayName = 'InputNumber'
