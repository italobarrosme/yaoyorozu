import type { Meta, StoryObj } from '@storybook/react'
import { InputSlider } from './'
import { DefaultCode, DefaultComponent } from './Decorators'
import { Text } from '../../Texts/Text'

const InputSliderMeta: Meta<typeof InputSlider> = {
  title: 'Components/Inputs/InputSlider',
  component: InputSlider,
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
    defaultValue: {
      control: 'number',
      description: 'The default value of the input',
      defaultValue: [0],
    },
    max: {
      control: 'number',
      description: 'The maximum value of the input',
      defaultValue: 100,
    },
    step: {
      control: 'number',
      description: 'The step value of the input',
      defaultValue: 1,
    },
    isShowValue: {
      control: 'boolean',
      description: 'Show the value of the input',
      defaultValue: true,
    },
    className: {
      control: 'text',
      description: 'The class name of the input',
    },
    dark: {
      control: 'boolean',
      description: 'The dark mode of the input',
    },
    percentage: {
      control: 'boolean',
      description:
        'The percentage view of the input, needs to be used with isShowValue',
    },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The \`InputSlider\` component is used to get slider input from the user.`,
      },
    },
  },
}

export default InputSliderMeta

type InputSliderStory = StoryObj<typeof InputSlider>

export const Default: InputSliderStory = {
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
        <DefaultCode />
      </div>
    ),
  ],
  render: ({
    label,
    name,
    className,
    isShowValue,
    max,
    defaultValue,
    step,
    dark,
    percentage,
    ...props
  }) => (
    <DefaultComponent
      isShowValue={isShowValue}
      defaultValue={defaultValue}
      dark={dark}
      max={max}
      step={step}
      label={label}
      name={name}
      percentage={percentage}
      className={className}
      {...props}
    />
  ),
}
