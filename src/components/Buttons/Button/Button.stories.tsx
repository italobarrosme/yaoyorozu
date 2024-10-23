import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'
import { CodeDecoratorDefault, DefaultComponent } from './Decorators'
import { Text } from '../../Texts/Text'

const SizeStyleCombinations = [
  'small/regular',
  'small/outline',
  'small/ghost',
  'full/regular',
  'full/outline',
  'full/ghost',
  'fit/regular',
  'fit/outline',
  'fit/ghost',
  'medium/regular',
  'medium/outline',
  'medium/ghost',
  'large/regular',
  'large/outline',
  'large/ghost',
  'rounded/regular',
  'rounded/outline',
  'rounded/ghost',
  'fit/calendar',
  'fit/secondary',
  'large/secondary',
  'medium/secondary',
  'small/secondary',
]

const ButtonMeta: Meta<typeof Button> = {
  title: 'Components/Buttons/Button',
  component: Button,
  tags: ['autodocs', 'buttons'],
  argTypes: {
    variant: {
      control: 'select',
      options: SizeStyleCombinations,
      description: 'The variant of the button combination of size and style.',
      defaultValue: 'medium',
    },
    children: {
      control: 'text',
      description: 'The content of the button',
      defaultValue: 'Click me',
    },
    className: {
      control: 'text',
      description: 'The class name of the button',
    },
    onClick: {
      action: 'clicked',
      description: 'The function to be called when the button is clicked',
    },
  },
  args: {
    onClick: () => console.log('clicked'),
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The \`Button\` component is used to trigger actions. It has the behavior of a \`button\` tag with some styling features`,
      },
    },
  },
}

export default ButtonMeta

type ButtonStory = StoryObj<typeof Button>

export const Default: ButtonStory = {
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
    variant: 'medium/regular',
    children: 'Click me',
  },
  render: ({ children, variant, className, ...props }) => (
    <DefaultComponent variant={variant} className={className} {...props}>
      {children}
    </DefaultComponent>
  ),
}
