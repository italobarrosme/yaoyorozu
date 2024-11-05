import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from '.'
import {
  DefaultCode,
  DefaultComponent,
  ClickCode,
  ClickComponent,
} from './Decorators'
import { Text } from '../Text'
import { Button } from '../../Buttons/Button'

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
      <div className="flex flex-col gap-4 w-full">
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
  args: {
    children: <span className="p-2 rounded-lg w-full">Hover me</span>,
    content: 'Hover me',
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

export const ClickTooltip: TooltipStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-full">
        <Text variant="xs/semibold">
          copy the code below to use the component in your project. You can also
        </Text>
        <ClickCode />
        <hr />
        <Text variant="xl/bold" tag="h3">
          Playground
        </Text>
        <Story />
      </div>
    ),
  ],
  args: {
    children: <Button variant="fit/outline">Show me</Button>,
    content: 'Hello world',
    side: 'top',
    trigger: 'click',
  },
  render: ({ children, content, side, trigger }) => {
    return (
      <ClickComponent
        children={children}
        content={content}
        side={side}
        trigger={trigger}
      />
    )
  },
}
