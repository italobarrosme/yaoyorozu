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
      description: 'The content of the accordion',
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The \`Accordion\` component is used to create an accordion component. 
        Based on the title and children props, the component will render the accordion with the title and content.`,
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
    title: 'Question about the product and services',
    children: (
      <>
        <Text variant="md/light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          consectetur, justo eget aliquam ultricies, purus lorem tincidunt
          libero, auctor ultricies odio mauris nec nunc.
        </Text>
      </>
    ),
  },
  render: (props) => <DefaultComponent {...props} />,
}
