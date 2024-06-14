import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from '.'
import { Text } from '../../../Texts/Text'
import {
  CodeDecoratorDefault,
  DefaultComponent,
  CodeDecoratorRange,
  RangeComponent,
} from './Decorators'

const CalendarMeta: Meta<typeof Calendar> = {
  title: 'Components/Inputs/InputDatePicker/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    showOutsideDays: {
      control: 'boolean',
      description: 'Show days outside the current month',
      defaultValue: true,
    },
    className: {
      control: 'text',
      description: 'The class name of the calendar',
    },
    classNames: {
      control: 'object',
      description: 'The class names of the calendar',
    },
  },
  args: {},
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The \`Calendar\` component is used to display a calendar with a date picker,
        which has dependencies on the [\`react-day-picker\`](https://react-day-picker.js.org/) library and you also need to use [\`date-fns\`](https://date-fns.org/) to manipulate dates, 
        To use it, you need to capture the value of the \`selected\` property using the \`onSelect\` property.
        `,
      },
    },
  },
}

export default CalendarMeta

type CalendarStory = StoryObj<typeof Calendar>

export const Default: CalendarStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-full">
        <Text variant="xs/semibold">
          copy the code below to use the component in your project. You can also
        </Text>
        <CodeDecoratorDefault />
        <hr />
        <Text variant="xl/bold" tag="h3">
          Playground
        </Text>
        <Story />
      </div>
    ),
  ],
  args: {},
  render: () => <DefaultComponent />,
}

export const Range: CalendarStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-full">
        <Text variant="xs/semibold">
          copy the code below to use the component in your project. You can also
        </Text>
        <CodeDecoratorRange />
        <hr />
        <Text variant="xl/bold" tag="h3">
          Playground
        </Text>
        <Story />
      </div>
    ),
  ],
  args: {},
  render: () => <RangeComponent />,
}
