import type { Meta, StoryObj } from '@storybook/react'
import { Drawer } from '.'
import {
  DefaultComponent,
  CodeDecoratorDefault,
  CodeDecoratorCustom,
  CustomDrawerComponent,
} from './Decorators'

import { Text } from '../../Texts/Text'
import { Button } from '../../Buttons/Button'

const DrawerMeta: Meta<typeof Drawer> = {
  title: 'Components/Layout/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The content of the drawer',
      control: {
        disable: true,
      },
    },
    trigger: {
      description: 'The trigger that opens the drawer',
      control: {
        disable: true,
      },
    },
    scrollLockTimeout: {
      description: `The timeout for the scroll lock. Default is 500ms.`,
      control: {
        type: 'number',
      },
    },
  },
  args: {
    children: 'Drawer content',
    trigger: <Button variant="fit/regular">Open Drawer</Button>,
    direction: 'bottom',
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `Drawer stories represents a collection of components that can be used to build a drawer.
        It includes the following components: Base \`Drawer\`, \`DrawerHeader\`, \`DrawerFooter\`.
        You can compose these components to build a drawer with the desired functionality.
        Each component can be styled using the className prop which gives you full control over the styling of the component.
        You can build granularly all Drawer components are exported:  
        \`DrawerRoot\`, \`DrawerPortal\`, \`DrawerOverlay\`, \`DrawerTrigger\`, \`DrawerClose\`, \`DrawerContent\`, \`DrawerHeader\`, \`DrawerFooter\`
        `,
      },
    },
  },
}

export default DrawerMeta

type DrawerStory = StoryObj<typeof Drawer>

export const Default: DrawerStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-full">
        <Text variant="xs/semibold">
          copy the code below to use the component in your project. You can also
        </Text>
        <CodeDecoratorDefault />
        <hr />
        <Text variant="xl/bold" tag="h3">
          Playground
        </Text>
        <Story />
      </div>
    ),
  ],
  render: ({ children, trigger, direction }) => (
    <DefaultComponent direction={direction} trigger={trigger}>
      {children}
    </DefaultComponent>
  ),
}

export const Custom: DrawerStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-full">
        <Text variant="xs/semibold">
          copy the code below to use the component in your project. You can also
        </Text>
        <CodeDecoratorCustom />
        <hr />
        <Text variant="xl/bold" tag="h3">
          Playground
        </Text>
        <Story />
      </div>
    ),
  ],
  render: () => <CustomDrawerComponent />,
}
