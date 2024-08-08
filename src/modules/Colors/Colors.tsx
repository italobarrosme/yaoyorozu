import { addDays } from 'date-fns'
import { Button } from '../../components/Buttons/Button'
import { Chip } from '../../components/Buttons/Chip'
import { InputArea } from '../../components/Inputs/InputArea'
import { InputSelect } from '../../components/Inputs/InputSelect'
import { Text } from '../../components/Texts/Text'
import { changeHue } from '../../utils/functions'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { Calendar } from '../../components/Inputs/InputDatePicker'

export const Colors = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2024, 5, 4),
    to: addDays(new Date(2024, 5, 4), 30),
  })

  return (
    <div className="flex flex-col gap-8">
      <Text variant="2xl/bold" className="mb-4">
        Colors Customize
      </Text>
      <div className="flex flex-wrap gap-2">
        <Button
          variant="fit/regular"
          className="bg-black hover:bg-black/90 hover:text-white"
          onClick={() => changeHue('0', '0%', '50%')}
        >
          <span className="bg-zinc-500 w-5 h-5 rounded-full"></span> Zinc
        </Button>
        <Button
          variant="fit/regular"
          className="bg-black hover:bg-black/90 hover:text-white"
          onClick={() => changeHue('210', '10%', '50%')}
        >
          <span className="bg-slate-500 w-5 h-5 rounded-full"></span> Slate
        </Button>
        <Button
          variant="fit/regular"
          className="bg-black hover:bg-black/90 hover:text-white"
          onClick={() => changeHue('30', '10%', '50%')}
        >
          <span className="bg-stone-500 w-5 h-5 rounded-full"></span> Stone
        </Button>
        <Button
          variant="fit/regular"
          className="bg-black hover:bg-black/90 hover:text-white"
          onClick={() => changeHue('0', '0%', '50%')}
        >
          <span className="bg-gray-500 w-5 h-5 rounded-full"></span> Gray
        </Button>
        <Button
          variant="fit/regular"
          className="bg-black hover:bg-black/90 hover:text-white"
          onClick={() => changeHue('0', '0%', '50%')}
        >
          <span className="bg-neutral-500 w-5 h-5 rounded-full"></span> Neutral
        </Button>
        <Button
          variant="fit/regular"
          className="bg-black hover:bg-black/90 hover:text-white"
          onClick={() => changeHue('0', '100%', '50%')}
        >
          <span className="bg-red-500 w-5 h-5 rounded-full"></span> Red
        </Button>
        <Button
          variant="fit/regular"
          className="bg-black hover:bg-black/90 hover:text-white"
          onClick={() => changeHue('340', '100%', '50%')}
        >
          <span className="bg-rose-500 w-5 h-5 rounded-full"></span> Rose
        </Button>
        <Button
          variant="fit/regular"
          className="bg-black hover:bg-black/90 hover:text-white"
          onClick={() => changeHue('30', '100%', '50%')}
        >
          <span className="bg-orange-500 w-5 h-5 rounded-full"></span> Orange
        </Button>
        <Button
          variant="fit/regular"
          className="bg-black hover:bg-black/90 hover:text-white"
          onClick={() => changeHue('120', '65%', '50%')}
        >
          <span className="bg-green-500 w-5 h-5 rounded-full"></span> Green
        </Button>
        <Button
          variant="fit/regular"
          className="bg-black hover:bg-black/90 hover:text-white"
          onClick={() => changeHue('240', '100%', '50%')}
        >
          <span className="bg-blue-500 w-5 h-5 rounded-full"></span> Blue
        </Button>
        <Button
          variant="fit/regular"
          className="bg-black hover:bg-black/90 hover:text-white"
          onClick={() => changeHue('45', '95%', '50%')}
        >
          <span className="bg-yellow-600 w-5 h-5 rounded-full"></span> Yellow
        </Button>
        <Button
          variant="fit/regular"
          className="bg-black hover:bg-black/90 hover:text-white"
          onClick={() => changeHue('270', '100%', '50%')}
        >
          <span className="bg-violet-500 w-5 h-5 rounded-full"></span> Violet
        </Button>
      </div>
      <Text variant="2xl/bold" className="mb-4">
        Example
      </Text>
      <div className="flex flex-wrap gap-4">
        <Button variant="fit/regular"> Button </Button>
        <Chip variant="fit/regular" value="Chip" onRemove={() => console.log()}>
          {' '}
          Chip{' '}
        </Chip>
        <InputArea label="Input Area" placeholder="Input Area" />
        <InputSelect
          label="Input Select"
          options={[
            {
              label: 'Option 1',
              value: 'option1',
            },
            {
              label: 'Option 2',
              value: 'option2',
            },
          ]}
          onValueChange={() => console.log()}
        />

        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
        />
      </div>
    </div>
  )
}
