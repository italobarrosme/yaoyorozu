import type { Meta, StoryObj } from '@storybook/react'
import { InputSwitch } from '.'
import { Text } from '../../Texts/Text'
import { DefaultCode, DefaultComponent } from './Decorators'

const InputSwitchMeta: Meta<typeof InputSwitch> = {
  title: 'Components/Inputs/InputSwitch',
  component: InputSwitch,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label of the input',
      defaultValue: 'Label',
    },
    id: {
      control: 'text',
      description: 'The id of the input',
      defaultValue: 'input',
    },
    dark: {
      control: 'boolean',
      description: 'The dark mode of the input',
    },
    className: {
      control: 'text',
      description: 'The class name of the input',
    },
    onCheckedChange: {
      action: 'onCheckedChange',
      description: 'The function to handle the change event',
    },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The \`InputSwitch\` component is used to get switch input from the user.`,
      },
    },
  },
}

export default InputSwitchMeta

type InputSwitchStory = StoryObj<typeof InputSwitch>

export const Default: InputSwitchStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-full text-neutral-black">
        <Text variant="xl/bold" tag="h3">
          Playground
        </Text>
        <Story />
        <hr />
        <Text variant="xs/semibold">
          copy the code below to use the component in your project. You can also
        </Text>
        <DefaultCode />
      </div>
    ),
  ],
  args: {
    onCheckedChange: (value) => {
      console.log('changed', value)
    },
  },
  render: ({ label, id, onCheckedChange, dark, ...props }) => {
    return (
      <DefaultComponent
        label={label}
        id={id}
        dark={dark}
        onCheckedChange={onCheckedChange}
        {...props}
      />
    )
  },
}
