import type { Meta, StoryObj } from '@storybook/react'
import { Steps } from '.'
import { DefaultCode, DefaultComponent } from './Decorators'
import { Text } from '../../Texts/Text'
import { Icon } from '@iconify/react'
import { Step } from './Steps'

const mockSteps: Step[] = [
  {
    id: '1',
    title: 'Product',
    description: 'Choose your product',
    icon: (
      <Icon
        className="rounded-full bg-transparent"
        icon="fluent-mdl2:product"
        width={18}
      />
    ),
  },
  {
    id: '2',
    title: 'Billing',
    description: 'Enter billing information',
    icon: (
      <Icon
        className="rounded-full bg-transparent"
        icon="healthicons:coins-outline"
        width={18}
      />
    ),
  },
  {
    id: '3',
    title: 'Delivery',
    description: 'Choose delivery options and confirm address',
    icon: (
      <Icon
        className="rounded-full bg-transparent"
        icon="carbon:delivery"
        width={18}
      />
    ),
  },
]

const StepsMeta: Meta<typeof Steps> = {
  title: 'Components/Buttons/Steps',
  component: Steps,
  tags: ['autodocs'],
  argTypes: {
    steps: {
      description: 'The steps to display',
      defaultValue: mockSteps,
      control: {
        disable: true,
      },
    },
    currentStep: {
      description: 'The current step',
      control: {
        disable: true,
      },
    },
    onStepClick: {
      description: 'The function to call when a step is clicked',
      control: {
        disable: true,
      },
    },
    onStepHover: {
      description: 'The function to call when a step is hovered',
      control: {
        disable: true,
      },
    },
    onStepLeave: {
      description: 'The function to call when a step is leaved',
      control: {
        disable: true,
      },
    },
    onCompleted: {
      description: 'The function to call when all steps are completed',
      control: {
        disable: true,
      },
    },
    layout: {
      description: 'The layout of the steps',
      control: {
        type: 'select',
        options: ['horizontal', 'vertical'],
      },
    },
    size: {
      description: 'The size of the steps',
      control: {
        type: 'select',
        options: ['sm', 'md'],
      },
    },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The \`Steps\` a representation of a user’s progress through a series of discrete steps.`,
      },
    },
  },
}

export default StepsMeta

type StepsStory = StoryObj<typeof Steps>

export const Default: StepsStory = {
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
  args: {
    steps: mockSteps,
    currentStep: 2,
    onStepClick: (index: number) => console.log('Step clicked:', index),
    onStepHover: (index: number) => console.log('Step hovered:', index),
    onStepLeave: () => console.log('Step leaved'),
    onCompleted() {
      console.log('All steps are completed!')
    },
  },
  render: ({
    steps,
    currentStep,
    onStepClick,
    onStepHover,
    onStepLeave,
    onCompleted,
    layout,
    size = 'sm',
  }) => (
    <DefaultComponent
      steps={steps}
      currentStep={currentStep}
      onStepClick={onStepClick}
      onStepHover={onStepHover}
      onStepLeave={onStepLeave}
      onCompleted={onCompleted}
      layout={layout}
      size={size}
    />
  ),
}
