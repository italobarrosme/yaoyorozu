import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'
import { CodeDecoratorDefault, DefaultComponent } from './Decorators'
import { Text } from '../../Texts/Text'

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
  args: {
    tabsTriggers: [
      { value: 'tab1', name: 'Tab 1' },
      { value: 'tab2', name: 'Tab 2' },
      { value: 'tab3', name: 'Tab 3' },
    ],
    tabsContents: [
      { value: 'tab1', children: <h1> Title 1 </h1> },
      { value: 'tab2', children: <h1> Title 2 </h1> },
      { value: 'tab3', children: <h1> Title 3 </h1> },
    ],
    defaultValue: 'tab1',
  },
  render: ({ tabsTriggers, tabsContents, defaultValue }) => {
    return (
      <DefaultComponent
        defaultValue={defaultValue}
        tabsTriggers={tabsTriggers}
        tabsContents={tabsContents}
      />
    )
  },
}
