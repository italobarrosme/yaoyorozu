import type { Meta, StoryObj } from '@storybook/react'
import { InputCheckbox } from '.'
import { CodeDecoratorDefault, DefaultComponent } from './Decorators'
import { Text } from '../../Texts/Text'

const InputCheckboxMeta: Meta<typeof InputCheckbox> = {
  title: 'Components/Inputs/InputCheckbox',
  component: InputCheckbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label of the checkbox',
      defaultValue: 'I agree to the terms and conditions',
    },
    className: {
      control: 'text',
      description: 'The class name of the checkbox',
    },
    error: {
      control: 'text',
      description: 'The error message of the checkbox',
    },
    onCheckedChange: {
      action: '',
      description: 'The function that is called when the checkbox is checked',
    },
  },
  parameters: {
    docs: {
      story: {
        inline: true,
      },
      canvas: {
        sourceState: 'none',
      },
      description: {
        component: 'The InputCheckbox component is a checkbox input field.',
      },
    },
  },
}

export default InputCheckboxMeta

type InputCheckboxStory = StoryObj<typeof InputCheckbox>

export const Default: InputCheckboxStory = {
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
    label: 'I agree to the terms and conditions',
    name: 'checkbox',
  },
  render: ({ label, className, error, ...props }) => (
    <DefaultComponent
      label={label}
      name={props.name}
      error={error}
      className={className}
      {...props}
    />
  ),
}
