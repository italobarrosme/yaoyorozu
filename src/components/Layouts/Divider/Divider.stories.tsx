import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from '.'
import {
  DefaultComponent,
  CodeDecoratorDefault,
  CodeDecoratorVertical,
  ComponentDividerVertical,
} from './Decorators'

const DividerMeta: Meta<typeof Divider> = {
  component: Divider,
  tags: ['autodocs'],
  title: 'Components/Layout/Divider',
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the divider',
      defaultValue: 'horizontal',
    },
    decorative: {
      control: 'boolean',
      description: `When true, signifies that it is purely visual, carries no semantic meaning,
        and ensures it is not present in the accessibility tree.`,
      defaultValue: false,
    },
  },
  args: {},
  parameters: {
    controls: { expanded: true },
    docs: {
      story: { inline: true, height: '300px' },
      canvas: { sourceState: 'none' },
      description: {
        component: `The Divider component is built in on top of the Radix Separator component.
        It is used to visually separate content. It can be used in both horizontal and vertical orientation.
        `,
      },
    },
  },
}
export default DividerMeta

type DividerStory = StoryObj<typeof Divider>

export const Default: DividerStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-full items-center justify-center h-[200px] text-neutral-black">
        <CodeDecoratorDefault />
        <Story />
      </div>
    ),
  ],
  args: {
    orientation: 'horizontal',
  },
  render: ({ orientation }) => <DefaultComponent orientation={orientation} />,
}

export const Vertical: DividerStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-full items-center justify-center h-[300px] text-neutral-black">
        <CodeDecoratorVertical />
        <Story />
      </div>
    ),
  ],
  args: {
    orientation: 'vertical',
  },
  render: (props) => <ComponentDividerVertical {...props} />,
}
