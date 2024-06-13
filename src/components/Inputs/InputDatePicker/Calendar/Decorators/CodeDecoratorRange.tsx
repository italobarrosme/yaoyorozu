import { useState } from 'react'
import { Calendar } from '..'
import { Copy } from '../../../../Texts/Copy'
import { DateRange } from 'react-day-picker'
import { addDays } from 'date-fns'

export const CodeDecoratorRange = () => {
  return (
    <Copy>
      {`
      const [date, setDate] = useState<DateRange | undefined>({
        from: new Date(2024, 5, 4),
        to: addDays(new Date(2024, 5, 20), 20),
      })

      <Calendar
        initialFocus
        mode="range"
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
      />
    `}
    </Copy>
  )
}

export const RangeComponent = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2024, 5, 4),
    to: addDays(new Date(2024, 5, 4), 30),
  })

  return (
    <Calendar
      initialFocus
      mode="range"
      defaultMonth={date?.from}
      selected={date}
      onSelect={setDate}
      numberOfMonths={2}
    />
  )
}
