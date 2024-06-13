import { useState } from 'react'
import { Calendar } from '..'
import { Copy } from '../../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
      const [date, setDate] = useState<Date | undefined>(new Date())

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
      />
    `}
    </Copy>
  )
}

export const DefaultComponent = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return <Calendar mode="single" selected={date} onSelect={setDate} />
}
