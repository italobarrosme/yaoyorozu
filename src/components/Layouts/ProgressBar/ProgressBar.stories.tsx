import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from '.'
import { DefaultComponent, CodeDecoratorDefault } from './Decorators'

const ProgressBarMeta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  tags: ['autodocs'],
  title: 'Components/Layout/ProgressBar',
  argTypes: {
    displayPercentage: {
      control: 'boolean',
      description: 'Whether to display the percentage of the progress',
      defaultValue: true,
    },
    variant: {
      control: 'radio',
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'neutral',
      ],
      description: 'The variant of the progress bar',
      defaultValue: 'line/primary',
    },
    progress: {
      control: 'number',
      description: 'The progress of the progress bar',
      defaultValue: 50,
    },
  },
  args: {},
  parameters: {
    controls: { expanded: true },
    docs: {
      story: { inline: true, height: '300px' },
      canvas: { sourceState: 'none' },
      description: {
        component: `The ProgressBar component A horizontal bar or circle indicating the current completion status of a long-running task, 
        usually updated continuously as the task progresses, instead of in discrete steps.
        `,
      },
    },
  },
}

export default ProgressBarMeta

type ProgressBarStory = StoryObj<typeof ProgressBar>

export const Default: ProgressBarStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-full items-center justify-center h-[200px] text-neutral-black">
        <CodeDecoratorDefault />
        <Story />
      </div>
    ),
  ],
  args: {
    displayPercentage: true,
    progress: 50,
  },
  render: ({ displayPercentage, variant, progress }) => (
    <DefaultComponent
      progress={progress}
      displayPercentage={displayPercentage}
      variant={variant}
    />
  ),
}
