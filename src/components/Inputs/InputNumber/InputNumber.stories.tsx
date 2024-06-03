import type { Meta, StoryObj } from '@storybook/react'
import { InputNumber } from '.'
import { CodeDecoratorDefault, DefaultComponent } from './Decorators'
import { Text } from '../../Texts/Text'
import { Icon } from '@iconify/react'

const listIcons = {
  Search: <Icon icon="akar-icons:search" />,
  Check: <Icon icon="akar-icons:check" />,
  Dollar: <Icon icon="twemoji:dollar-banknote" />,
  flag: <Icon icon="twemoji:flag-brazil" />,
  coin: <Icon icon="twemoji:coin" />,
}

const listCurrency = ['BRL', 'USD', 'EUR', 'JPY']

const InputNumberMeta: Meta<typeof InputNumber> = {
  title: 'Components/Inputs/InputNumber',
  component: InputNumber,
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
    icon: {
      control: 'select',
      options: Object.keys(listIcons),
      mapping: listIcons,
      description: 'The icon of the input',
    },
    error: {
      control: 'text',
      description: 'The error message of the input',
    },
    currency: {
      control: 'select',
      options: listCurrency,
      description:
        'The currency of the input, if have currency, the input will be formatted',
    },
    onChangeValue: {
      action: 'onChangeValue',
      description: 'The function to handle the value of the input',
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
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The \`InputNumber\` component is used to get a number from the user. It can be used to get a number with or without currency.`,
      },
    },
  },
}

export default InputNumberMeta

type InputNumberStory = StoryObj<typeof InputNumber>

export const Default: InputNumberStory = {
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
  args: {
    label: 'Label',
    name: 'input',
  },
  render: ({
    label,
    icon,
    className,
    error,
    auxiliary,
    currency,
    dark,
    ...props
  }) => (
    <DefaultComponent
      label={label}
      icon={icon}
      className={className}
      error={error}
      auxiliary={auxiliary}
      currency={currency}
      dark={dark}
      {...props}
    />
  ),
}
