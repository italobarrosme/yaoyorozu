import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'
import { CodeDecoratorDefault, DefaultComponent } from './Decorators'
import { Text } from '../../Texts/Text'
import { Icon } from '@iconify/react'
import { Button } from '../Button'

const TabsMeta: Meta<typeof Tabs> = {
  title: 'Components/Buttons/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabsTriggers: {
      description: 'The triggers of the tabs.',
      defaultValue: [
        { value: 'tab1', name: 'Tab 1' },
        { value: 'tab2', name: 'Tab 2' },
        { value: 'tab3', name: 'Tab 3' },
      ],
    },
    typeStyle: {
      control: 'select',
      options: ['default', 'minimal'],
      description: 'The style of the tabs.',
      defaultValue: 'regular',
    },
    tabsContents: {
      description: 'The contents of the tabs.',
      defaultValue: [
        { value: 'tab1', children: <h1> Title 1 </h1> },
        { value: 'tab2', children: <h1> Title 2 </h1> },
        { value: 'tab3', children: <h1> Title 3 </h1> },
      ],
    },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The \`Tabs\` component is used to navigate between different tabs. It accepts an array of objects with the value and name of the tabs triggers and the value and children of the tabs contents.`,
      },
    },
  },
}

export default TabsMeta

type TabsStory = StoryObj<typeof Tabs>

export const Default: TabsStory = {
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
    tabsTriggers: [
      { value: 'product', name: 'Product' },
      { value: 'settings', name: 'Settings' },
      { value: 'terms', name: 'Terms and conditions' },
    ],
    tabsContents: [
      {
        value: 'product',
        children: (
          <div>
            <Text variant="xl/bold" className="mb-8">
              Product
            </Text>
            <Text variant="md/medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
              odio vitae ligula ultrices fermentum. Nullam auctor, nunc nec
              aliquam tincidunt, libero justo fringilla dolor, nec ultricies
              purus nunc et odio. Nulla facilisi. Nullam nec nisi eget nunc
              ultrices fermentum. Nullam auctor, nunc nec aliquam tincidunt,
              libero justo fringilla dolor, nec
            </Text>
          </div>
        ),
      },
      {
        value: 'settings',
        children: (
          <div className="flex flex-col gap-2">
            <Text variant="xl/bold" className="mb-8">
              Settings
            </Text>
            <Button
              variant="fit/regular"
              className="flex gap-2 items-center h-8"
            >
              <Icon icon="bi:camera-video" /> Media
            </Button>
            <Button
              variant="fit/regular"
              className="flex gap-2 items-center h-8"
            >
              <Icon icon="bi:bell" /> Notifications
            </Button>
            <Button
              variant="fit/regular"
              className="flex gap-2 items-center h-8"
            >
              <Icon icon="bi:person" /> Account
            </Button>
          </div>
        ),
      },
      {
        value: 'terms',
        children: (
          <div>
            <Text variant="xl/bold" className="mb-8">
              Terms and Condition
            </Text>
            <Text variant="md/medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
              odio vitae ligula ultrices fermentum. Nullam auctor, nunc nec
              aliquam tincidunt, libero justo fringilla dolor, nec ultricies
              purus nunc et odio. Nulla facilisi. Nullam nec nisi eget nunc
              ultrices fermentum. Nullam auctor, nunc nec aliquam tincidunt,
              libero justo fringilla dolor, nec
            </Text>
          </div>
        ),
      },
    ],
    typeStyle: 'minimal',
    defaultValue: 'settings',
  },
  render: ({ tabsTriggers, tabsContents, typeStyle, defaultValue }) => {
    return (
      <DefaultComponent
        defaultValue={defaultValue}
        typeStyle={typeStyle}
        tabsTriggers={tabsTriggers}
        tabsContents={tabsContents}
      />
    )
  },
}
