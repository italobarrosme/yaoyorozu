import type { Meta, StoryObj } from '@storybook/react'
import { InputDatePicker } from '.'
import { CodeDecoratorDefault, DefaultComponent } from './Decorators'
import { Text } from '../../Texts/Text'

const InputDatePickerMeta: Meta<typeof InputDatePicker> = {
  title: 'Components/Inputs/InputDatePicker',
  component: InputDatePicker,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label of the input',
      defaultValue: 'Label',
    },
    className: {
      control: 'text',
      description: 'The class name of the input',
    },
    error: {
      control: 'text',
      description: 'The error message of the input',
    },
    auxiliary: {
      control: 'text',
      description:
        'The auxiliary message of the input, note if have error, this message will be hidden',
    },
    dark: {
      control: 'boolean',
      description: 'The dark mode of the input',
      defaultValue: false,
    },
    isRangeDate: {
      control: 'boolean',
      description: 'The range date of the input',
      defaultValue: false,
    },
    icon: {
      control: 'text',
      description: 'The icon of the input',
    },
    emitValue: {
      action: 'emitValue',
      table: {
        disable: true,
      },
    },
    defaultValue: {
      description: `The default value of the input, the format must be 'dd/MM/yyyy'`,
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The \`InputDatePicker\` component is used to get a date from the user.
        It can be used to get a date with or without a range.It has a calendar that opens when the input is clicked. 
        The \`Calendar\` component was used, which has dependencies on the \`react-day-picker\` library.
        The calendarProps property can be used to implement modifications to the calendar.
        `,
      },
    },
  },
}

export default InputDatePickerMeta

type InputDatePickerStory = StoryObj<typeof InputDatePicker>

export const Default: InputDatePickerStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-full">
        <Text variant="xl/bold" tag="h3">
          Playground
        </Text>
        <Story />
        <hr />
        <Text variant="xs/semibold">
          copy the code below to use the component in your project. You can also
        </Text>
        <CodeDecoratorDefault />
      </div>
    ),
  ],
  args: {
    label: 'Select your date born',
    name: 'input',
    defaultValue: '04/06/1992',
  },
  render: ({
    label,
    icon,
    className,
    error,
    auxiliary,
    dark,
    isRangeDate,
    defaultValue,
    ...props
  }) => (
    <DefaultComponent
      label={label}
      icon={icon}
      className={className}
      error={error}
      auxiliary={auxiliary}
      dark={dark}
      defaultValue={defaultValue}
      isRangeDate={isRangeDate}
      {...props}
    />
  ),
}
