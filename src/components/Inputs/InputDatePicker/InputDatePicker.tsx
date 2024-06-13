import { forwardRef, InputHTMLAttributes, ReactNode, useState } from 'react'
import { cn } from '../../../utils/cn'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Calendar } from './Calendar'

export type InputDatePickerProps = {
  label: string
  className?: string
  icon?: ReactNode
  error?: string
  auxiliary?: string
  dark?: boolean
  rangeDate?: boolean
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
      rangeDate = false,
      error,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState(new Date())
    const [valueRanged, setValueRanged] = useState({
      from: new Date(),
      to: new Date(),
    })

    const [date, setDate] = useState<Date | undefined>(new Date())

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (rangeDate) {
        setValueRanged({
          ...valueRanged,
          [e.target.name]: e.target.value,
        })
      } else {
        setValue({
          ...value,
          [e.target.name]: e.target.value,
        })
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
            type="text"
            readOnly
            className={cn(
              'h-8 w-full text-inherit rounded-md border-2 border-primary-regular p-2 outline-none placeholder:text-neutral-light focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-regular focus-visible:ring-offset-2',
              {
                'border-feedback-error': error,
              },
              {
                'bg-neutral-dark text-neutral-white': dark,
              }
            )}
            aria-describedby={`${props.name}-error`}
            value={
              rangeDate
                ? `${format(valueRanged.from, 'dd/MM/yyyy', { locale: ptBR })} - 
            ${format(valueRanged.to, 'dd/MM/yyyy', { locale: ptBR })}`
                : format(value, 'dd/MM/yyyy', { locale: ptBR })
            }
            onChange={handleChange}
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
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="absolute top-16 left-0 z-30 bg-neutral-white rounded-md shadow-lg"
        />
      </div>
    )
  }
)

InputDatePicker.displayName = 'InputDatePicker'
