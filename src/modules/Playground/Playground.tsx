import { addDays } from 'date-fns'
import { Button } from '../../components/Buttons/Button'
import { Chip } from '../../components/Buttons/Chip'
import { InputArea } from '../../components/Inputs/InputArea'
import { InputSelect } from '../../components/Inputs/InputSelect'
import { Text } from '../../components/Texts/Text'
import { changeHsl } from '../../utils/functions'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { Calendar } from '../../components/Inputs/InputDatePicker'
import { InputCheckbox } from '../../components/Inputs/InputCheckbox'
import { Card } from '../../components/Layouts/Card'
import { ProgressBar } from '../../components/Layouts/ProgressBar'
import { Icon } from '@iconify/react'
import { Menubar } from '../../components/Buttons/Menubar'

export const Playground = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2024, 5, 4),
    to: addDays(new Date(2024, 5, 4), 30),
  })

  return (
    <div className="flex flex-col gap-2">
      <div className="fixed flex flex-wrap gap-2 z-40 top-5 right-0 cursor-pointer">
        <Card className="flex flex-wrap gap-2 w-36 group hover:w-full h-auto text-xs items-center">
          <div className="hidden group-hover:flex flex-wrap gap-2 w-full h-auto text-xs items-center">
            <Button
              variant="fit/regular"
              className="bg-neutral-dark hover:bg-neutral-dark/90 hover:text-white text-xs"
              onClick={() => changeHsl('0', '0%', '50%')}
            >
              <span className="bg-zinc-500 w-5 h-5 rounded-full"></span> Zinc
            </Button>
            <Button
              variant="fit/regular"
              className="bg-neutral-dark hover:bg-neutral-dark/90 hover:text-white text-xs"
              onClick={() => changeHsl('210', '10%', '50%')}
            >
              <span className="bg-slate-500 w-5 h-5 rounded-full"></span> Slate
            </Button>
            <Button
              variant="fit/regular"
              className="bg-neutral-dark hover:bg-neutral-dark/90 hover:text-white text-xs"
              onClick={() => changeHsl('30', '10%', '50%')}
            >
              <span className="bg-stone-500 w-5 h-5 rounded-full"></span> Stone
            </Button>
            <Button
              variant="fit/regular"
              className="bg-neutral-dark hover:bg-neutral-dark/90 hover:text-white text-xs"
              onClick={() => changeHsl('0', '0%', '50%')}
            >
              <span className="bg-gray-500 w-5 h-5 rounded-full"></span> Gray
            </Button>
            <Button
              variant="fit/regular"
              className="bg-neutral-dark hover:bg-neutral-dark/90 hover:text-white text-xs"
              onClick={() => changeHsl('0', '0%', '50%')}
            >
              <span className="bg-neutral-500 w-5 h-5 rounded-full"></span>{' '}
              Neutral
            </Button>
            <Button
              variant="fit/regular"
              className="bg-neutral-dark hover:bg-neutral-dark/90 hover:text-white text-xs"
              onClick={() => changeHsl('0', '100%', '50%')}
            >
              <span className="bg-red-500 w-5 h-5 rounded-full"></span> Red
            </Button>
            <Button
              variant="fit/regular"
              className="bg-neutral-dark hover:bg-neutral-dark/90 hover:text-white text-xs"
              onClick={() => changeHsl('340', '100%', '50%')}
            >
              <span className="bg-rose-500 w-5 h-5 rounded-full"></span> Rose
            </Button>
            <Button
              variant="fit/regular"
              className="bg-neutral-dark hover:bg-neutral-dark/90 hover:text-white text-xs"
              onClick={() => changeHsl('30', '100%', '50%')}
            >
              <span className="bg-orange-500 w-5 h-5 rounded-full"></span>{' '}
              Orange
            </Button>
            <Button
              variant="fit/regular"
              className="bg-neutral-dark hover:bg-neutral-dark/90 hover:text-white text-xs"
              onClick={() => changeHsl('120', '65%', '50%')}
            >
              <span className="bg-green-500 w-5 h-5 rounded-full"></span> Green
            </Button>
            <Button
              variant="fit/regular"
              className="bg-neutral-dark hover:bg-neutral-dark/90 hover:text-white text-xs"
              onClick={() => changeHsl('240', '100%', '50%')}
            >
              <span className="bg-blue-500 w-5 h-5 rounded-full"></span> Blue
            </Button>
            <Button
              variant="fit/regular"
              className="bg-neutral-dark hover:bg-neutral-dark/90 hover:text-white text-xs"
              onClick={() => changeHsl('45', '95%', '50%')}
            >
              <span className="bg-yellow-600 w-5 h-5 rounded-full"></span>{' '}
              Yellow
            </Button>
            <Button
              variant="fit/regular"
              className="bg-neutral-dark hover:bg-neutral-dark/90 hover:text-white text-xs"
              onClick={() => changeHsl('270', '100%', '50%')}
            >
              <span className="bg-violet-500 w-5 h-5 rounded-full"></span>{' '}
              Violet
            </Button>
          </div>
          <Text
            variant="sm/bold"
            className="flex gap-2 justify-between group-hover:hidden"
          >
            <Icon
              icon="mingcute:paint-brush-line"
              width={48}
              className="animate-hue-rotate filter text-red-500"
            />
            Colors Customize
          </Text>
        </Card>
      </div>

      <Text variant="2xl/bold" className="mb-4">
        Examples
      </Text>
      <div className="flex flex-wrap gap-4">
        <Card className="flex gap-2">
          <Menubar
            menus={[
              {
                trigger: 'Home',
                listItems: [
                  {
                    children: (
                      <div className="flex gap-2 items-center hover:text-complementary-highlight">
                        <Icon icon="bx:bx-home" width={24} />
                        Home
                      </div>
                    ),
                  },
                  {
                    children: (
                      <div className="flex gap-2 items-center hover:text-complementary-highlight">
                        <Icon icon="bx:bx-user" width={24} />
                        Profile
                      </div>
                    ),
                  },
                  {
                    children: (
                      <div className="flex gap-2 items-center hover:text-complementary-highlight">
                        <Icon icon="bx:bx-cog" width={24} />
                        Settings
                      </div>
                    ),
                  },
                ],
              },
              {
                trigger: 'About',
                listItems: [
                  {
                    children: (
                      <div className="flex gap-2 items-center hover:text-complementary-highlight">
                        <Icon icon="bx:bx-info-circle" width={24} />
                        About
                      </div>
                    ),
                  },
                  {
                    children: (
                      <div className="flex gap-2 items-center hover:text-complementary-highlight">
                        <Icon icon="bx:bx-help-circle" width={24} />
                        Help
                      </div>
                    ),
                  },
                ],
              },
            ]}
          />
          <InputCheckbox />
          <Button variant="fit/regular">Confirm</Button>
          <Button
            variant="fit/regular"
            className="bg-neutral-lightest text-neutral-dark hover:bg-neutral-lightest/90 hover:text-neutral-dark/90"
          >
            Refused
          </Button>
          <Chip
            variant="fit/regular"
            value="            Bitcoin"
            className="bg-yellow-500 hover:bg-yellow-600"
            onRemove={() => console.log()}
          />
          <Chip
            variant="fit/regular"
            value="Tether"
            className="bg-cyan-700 hover:bg-cyan-800"
            onRemove={() => console.log()}
          />
        </Card>
        <Card className="flex flex-col w-1/2 h-32 gap-2">
          <Text variant="lg/bold">Donwload</Text>
          <ProgressBar progress={77} displayPercentage variant="primary" />
        </Card>
        <Card className="flex bg-neutral-white/20">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </Card>
        <Card className="flex flex-wrap gap-2">
          <InputSelect
            label="Select Country"
            options={[
              { value: 'us', label: 'United States' },
              { value: 'fr', label: 'France' },
              { value: 'es', label: 'Spain' },
              { value: 'de', label: 'Germany' },
            ]}
            onValueChange={() => console.log()}
          />
          <InputArea label="Comments" placeholder="" />
        </Card>
      </div>
    </div>
  )
}
