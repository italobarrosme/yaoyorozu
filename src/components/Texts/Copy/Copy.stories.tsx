import type { Meta, StoryObj } from '@storybook/react'
import { Copy } from '.'
import { DefaultComponent, DefaultCode } from './Decorators'
import { Text } from '../../Texts/Text'

const CopyMeta: Meta<typeof Copy> = {
  title: 'Components/Texts/Copy',
  component: Copy,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The content to be copied',
      defaultValue: 'Copy me',
    },
    language: {
      control: 'text',
      description: 'The language of the code',
    },
  },
  args: {},
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The \`Copy\` component is used to copy, structure and show code snippets. 
        It is used in the documentation to show code snippets.`,
      },
    },
  },
}

export default CopyMeta

export const Default: StoryObj<typeof Copy> = {
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
    children: 'import { Copy } from "@developerskyi/react-components"',
  },
  render: ({ children }) => <DefaultComponent>{children}</DefaultComponent>,
}
