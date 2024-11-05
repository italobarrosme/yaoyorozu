import type { Meta, StoryObj } from '@storybook/react'
import { InputText } from '.'
import { CodeDecoratorDefault, DefaultComponent } from './Decorators'
import { Text } from '../../Texts/Text'
import { Icon } from '@iconify/react'

const listIcons = {
  Search: <Icon icon="akar-icons:search" />,
  Check: <Icon icon="akar-icons:check" />,
  Fox: <Icon icon="twemoji:fox" />,
  hedgehog: <Icon icon="twemoji:hedgehog" />,
  penguin: <Icon icon="twemoji:penguin" />,
}

const InputTextMeta: Meta<typeof InputText> = {
  title: 'Components/Inputs/InputText',
  component: InputText,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label of the input',
      defaultValue: 'Your Name',
    },
    name: {
      control: 'text',
      description: 'The name of the input',
      defaultValue: 'input',
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
    auxiliary: {
      control: 'text',
      description:
        'The auxiliary message of the input, note if have error, this message will be hidden',
    },
    dark: {
      control: 'boolean',
      description: 'The dark mode of the input',
    },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The \`InputText\` component is used to get text input from the user.`,
      },
    },
  },
}

export default InputTextMeta

type InputTextStory = StoryObj<typeof InputText>

export const Default: InputTextStory = {
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
    label: 'Your Name',
    name: 'input-text',
  },
  render: ({
    label,
    name,
    icon,
    className,
    error,
    auxiliary,
    dark,
    ...props
  }) => (
    <DefaultComponent
      label={label}
      name={name}
      icon={icon}
      className={className}
      error={error}
      auxiliary={auxiliary}
      dark={dark}
      {...props}
    />
  ),
}
