import type { Meta, StoryObj } from '@storybook/react'
import { Table } from '.'
import {
  CodeDecoratorDefault,
  CodeDecoratorZebraStriped,
  DefaultComponent,
  ZebraStripedComponent,
} from './Decorators'
import { Text } from '../../Texts/Text'

const TableMeta: Meta<typeof Table> = {
  title: 'Components/Layout/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  parameters: {
    controls: { expanded: true },
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `Table stories represents a collection of components that can be used to build a table.
        It includes the following components: \`Table\`, \`TableHeader\`, \`TableBody\`, \`TableFooter\`, \`TableRow\`, \`TableHead\`, \`TableCell\`, \`TableCaption\`.
        You can compose these components to build a table with the desired functionality.
        Each component can be styled using the className prop which gives you full control over the styling of the component.
        `,
      },
    },
  },
}

export default TableMeta

type TableStory = StoryObj<typeof Table>

export const Default: TableStory = {
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
  render: () => <DefaultComponent />,
}

/**
 * Zebra striped table. This is a common pattern for tables with a lot of data.
 * You can achieve this by using the odd and even child selectors.
 *
 */

export const ZebraStriped: TableStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-full">
        <Text variant="xs/semibold">
          copy the code below to use the component in your project. You can also
        </Text>
        <CodeDecoratorZebraStriped />
        <hr />
        <Text variant="xl/bold" tag="h3">
          Playground
        </Text>
        <Story />
      </div>
    ),
  ],
  render: () => <ZebraStripedComponent />,
}
