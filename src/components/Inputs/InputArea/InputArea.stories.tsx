import type { Meta, StoryObj } from '@storybook/react'
import { InputArea } from '.'
import { Icon } from '@iconify/react'
import { Text } from '../../Texts/Text'
import { DefaultCode, DefaultComponent } from './Decorators'

const listIcons = {
  Search: <Icon icon="akar-icons:search" />,
  Check: <Icon icon="akar-icons:check" />,
  Fox: <Icon icon="twemoji:fox" />,
  hedgehog: <Icon icon="twemoji:hedgehog" />,
  penguin: <Icon icon="twemoji:penguin" />,
}

const InputAreaMeta: Meta<typeof InputArea> = {
  title: 'Components/Inputs/InputArea',
  component: InputArea,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label of the input',
      defaultValue: 'Label',
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
        component: `The \`InputArea\` component is used to get text input from the user.`,
      },
    },
  },
}

export default InputAreaMeta

type InputAreaStory = StoryObj<typeof InputArea>

export const Default: InputAreaStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-full text-neutral-black">
        <Text variant="xs/semibold">
          copy the code below to use the component in your project. You can also
        </Text>
        <DefaultCode />
        <hr />
        <Text variant="xl/bold" tag="h3">
          Playground
        </Text>
        <Story />
      </div>
    ),
  ],
  render: ({
    label = 'Label',
    dark,
    error,
    auxiliary,
    icon,
    className,
    name,
    ...props
  }) => {
    return (
      <DefaultComponent
        dark={dark}
        error={error}
        auxiliary={auxiliary}
        label={label}
        icon={icon}
        className={className}
        name={name}
        {...props}
      />
    )
  },
}
