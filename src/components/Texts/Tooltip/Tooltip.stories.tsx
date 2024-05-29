import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from '.'
import { CodeDecorator, DefaultComponent } from './Decorators'

const TooltipMeta: Meta<typeof Tooltip> = {
  title: 'Components/Texts/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'The text to be displayed in the tooltip.',
      defaultValue: 'Tooltip',
    },
    side: {
      control: {
        type: 'select',
        options: ['top', 'bottom', 'left', 'right'],
      },
      description: 'The position of the tooltip relative to the element.',
      defaultValue: 'top',
    },
    children: {
      description:
        'The element that will trigger the tooltip when hovered or clicked.',
    },
    trigger: {
      control: {
        type: 'select',
        options: ['hover', 'click'],
      },
      description: 'The event that triggers the tooltip.',
      defaultValue: 'hover',
    },
  },
  args: {
    content: 'Tooltip',
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The Tooltip component is used to display additional information when hovering or click over an element.
        It provides a visually appealing way to display helpful information without cluttering the UI.
        `,
      },
    },
  },
}

export default TooltipMeta

type TooltipStory = StoryObj<typeof Tooltip>

export const Default: TooltipStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-12 items-center">
        <CodeDecorator />
        <Story />
      </div>
    ),
  ],
  args: {
    children: (
      <button className="bg-primary-medium p-4 rounded-lg">Hover me</button>
    ),
    content: 'Tooltip',
    side: 'top',
    trigger: 'hover',
  },
  render: ({ children, content, side, trigger }) => {
    return (
      <DefaultComponent
        children={children}
        content={content}
        side={side}
        trigger={trigger}
      />
    )
  },
}
