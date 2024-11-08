import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '.'
import { DefaultComponent, DefaultCode } from './Decorators'

import { Text } from '../../Texts/Text'

const CardMeta: Meta<typeof Card> = {
  title: 'Components/Layout/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  parameters: {
    controls: { expanded: true },
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `Card stories represents a collection of components that can be used to build a card.
        It includes the following components: \`Card\`, \`CardHeader\`, \`CardFooter\`, \`CardTitle\`, \`CardDescription\`, \`CardContent\`.
        You can compose these components to build a card with the desired functionality.
        Each component can be styled using the className prop which gives you full control over the styling of the component.
        `,
      },
    },
  },
}

export default CardMeta

type CardStory = StoryObj<typeof Card>

export const Default: CardStory = {
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
        <DefaultCode />
      </div>
    ),
  ],
  render: () => <DefaultComponent />,
}
