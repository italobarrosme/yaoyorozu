import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '.'

import { Text } from '../../Texts/Text'
import { DefaultCode, DefaultComponent } from './Decorators'

const AccordionMeta: Meta<typeof Accordion> = {
  title: 'Components/Texts/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the accordion',
      defaultValue: 'Title',
    },
    children: {
      control: 'text',
      description: 'The content of the accordion',
      defaultValue: 'Content',
    },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The \`Accordion\` component is used to create an accordion component.`,
      },
    },
  },
}

export default AccordionMeta

type AccordionStory = StoryObj<typeof Accordion>

export const Default: AccordionStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-full text-neutral-black">
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
    title: 'Title',
    children: 'Content',
  },
  render: (props) => <DefaultComponent {...props} />,
}
