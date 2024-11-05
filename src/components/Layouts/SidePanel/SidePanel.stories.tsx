/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Meta, StoryObj } from '@storybook/react'
import { SidePanel, SidePanelButtonClose } from '.'
import { DefaultComponent, DefaultCode } from './Decorators'

import { Text } from '../../Texts/Text'
import { Button } from '../../Buttons/Button'
import {} from './SidePanel'

const SidePanelMeta: Meta<typeof SidePanel> = {
  title: 'Components/Layout/SidePanel',
  component: SidePanel,
  subcomponents: {
    SidePanelButtonClose: SidePanelButtonClose as any,
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The content of the side panel',
      control: {
        disable: true,
      },
    },
    trigger: {
      description: 'The trigger that opens the side panel',
      control: {
        disable: true,
      },
    },
    orientation: {
      description: 'The orientation of the side panel',
      control: {
        type: 'radio',
        options: ['left', 'right'],
      },
    },
  },
  args: {
    children: 'Side panel content',
    trigger: (
      <Button variant="fit/regular">Article Frontend Development 2024</Button>
    ),
    orientation: 'right',
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `Side panel stories represents a collection of components that can be used to build a side panel.
        It includes the following components: Base \`SidePanel\`.
        You can compose these components to build a side panel with the desired functionality.
        Each component can be styled using the className prop which gives you full control over the styling of the component.
        You can build granularly all SidePanel components are exported:  
        \`DialogOverlaySidePanel\`, \`DialogContentSidePanel\`
        `,
      },
    },
  },
}

export default SidePanelMeta

type SidePanelStory = StoryObj<typeof SidePanel>

export const Default: SidePanelStory = {
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
  render: ({ children, trigger, orientation }) => (
    <DefaultComponent trigger={trigger} orientation={orientation}>
      {children}
    </DefaultComponent>
  ),
}
