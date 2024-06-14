'use client'

import {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import { cn } from '../../../utils/cn'
import { addDays, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar, CalendarProps } from './Calendar'
import { DateRange } from 'react-day-picker'

export type InputDatePickerProps = {
  label: string
  className?: string
  icon?: ReactNode
  error?: string
  auxiliary?: string
  dark?: boolean
  isRangeDate?: boolean
  emitValue: (value: string | string[]) => void
  calendarProps?: CalendarProps
} & InputHTMLAttributes<HTMLInputElement>

export const InputDatePicker = forwardRef<
  HTMLInputElement,
  InputDatePickerProps
>(
  (
    {
      label,
      dark = false,
      icon,
      auxiliary,
      className,
      isRangeDate = false,
      error,
      calendarProps,
      emitValue,
      ...props
    },
    ref
  ) => {
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)
    const [date, setDate] = useState<Date | undefined>(new Date())

    const [dateRanged, setDateRanged] = useState<DateRange | undefined>({
      from: new Date(2024, 5, 13),
      to: addDays(new Date(2024, 5, 13), 20),
    })

    useEffect(() => {
      if (isRangeDate && dateRanged) {
        emitValue([
          format(dateRanged.from, 'dd/MM/yyyy', { locale: ptBR }),
          format(dateRanged.to, 'dd/MM/yyyy', { locale: ptBR }),
        ])
      } else {
        emitValue(format(date, 'dd/MM/yyyy', { locale: ptBR }))
      }
    }, [date, dateRanged])

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
            readOnly
            className={cn(
              'h-8 w-full text-inherit cursor-pointer rounded-md border-2 border-primary-regular p-2 outline-none placeholder:text-neutral-light focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-regular focus-visible:ring-offset-2',
              {
                'border-feedback-error': error,
              },
              {
                'bg-neutral-dark text-neutral-white': dark,
              }
            )}
            aria-describedby={`${props.name}-error`}
            value={
              isRangeDate
                ? `${
                    dateRanged.from
                      ? format(dateRanged.from, 'dd/MM/yyyy', { locale: ptBR })
                      : ''
                  } - ${
                    dateRanged.to
                      ? format(dateRanged.to, 'dd/MM/yyyy', { locale: ptBR })
                      : ''
                  }`
                : format(date, 'dd/MM/yyyy', { locale: ptBR })
            }
            onClick={() => setIsCalendarOpen(!isCalendarOpen)}
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
        {isCalendarOpen && isRangeDate ? (
          <Calendar
            {...calendarProps}
            className={cn(
              'absolute z-10 top-20 left-0 shadow-lg bg-neutral-white',
              {
                'bg-neutral-dark text-neutral-white': dark,
              }
            )}
            initialFocus
            mode="range"
            numberOfMonths={2}
            onSelect={(date) => {
              setDateRanged({
                from: date ? date.from : new Date(),
                to: date ? date.to : addDays(new Date(), 1),
              })
            }}
            selected={dateRanged}
          />
        ) : isCalendarOpen ? (
          <Calendar
            {...calendarProps}
            mode="single"
            numberOfMonths={1}
            className={cn(
              'absolute z-10 top-20 left-0 shadow-lg  bg-neutral-white',
              {
                'bg-neutral-dark text-neutral-white': dark,
              }
            )}
            onSelect={(day) => {
              setDate(day)
            }}
            selected={date}
          />
        ) : null}
      </div>
    )
  }
)

InputDatePicker.displayName = 'InputDatePicker'
