import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '.'
import { CodeDecoratorDefault, DefaultComponent } from './Decorators'

const SizeWeightCombinations = [
  'xs/light',
  'xs/normal',
  'xs/medium',
  'xs/semibold',
  'xs/bold',
  'xs/black',
  'sm/light',
  'sm/normal',
  'sm/medium',
  'sm/semibold',
  'sm/bold',
  'sm/black',
  'md/light',
  'md/normal',
  'md/medium',
  'md/semibold',
  'md/bold',
  'md/black',
  'lg/light',
  'lg/normal',
  'lg/medium',
  'lg/semibold',
  'lg/bold',
  'lg/black',
  'xl/light',
  'xl/normal',
  'xl/medium',
  'xl/semibold',
  'xl/bold',
  'xl/black',
  '2xl/light',
  '2xl/normal',
  '2xl/medium',
  '2xl/semibold',
  '2xl/bold',
  '2xl/black',
  '3xl/light',
  '3xl/normal',
  '3xl/medium',
  '3xl/semibold',
  '3xl/bold',
  '3xl/black',
]

const TextMeta: Meta<typeof Text> = {
  title: 'Components/Texts/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: SizeWeightCombinations,
      description: 'The font size and weight of the text.',
      defaultValue: 'md/normal',
    },
    tag: {
      control: 'select',
      options: [
        'a',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'label',
        'strong',
        'em',
      ],
      defaultValue: 'p',
      description: 'The HTML tag to use for the component. Defaults to `p`.',
    },
    children: {
      description:
        'The text content to be displayed. It could be a string or a ReactNode.',
    },
    className: {
      control: 'text',
      description:
        'The CSS class name to apply to the component and extend styles. Recommended for advanced use cases. Tailwind classes are supported.',
    },
  },
  args: {
    children: 'Hello world',
    variant: 'md/normal',
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The Text component is used to display any text content. It can render plain text or any ReactNode.
        You can select the font size and weight using the \`variant\` prop.
        The Text component uses the \`text\` utility class from TailwindCSS as variant values.
        The rendered HTML tag can be changed using the \`tag\` prop. The default tag is \`p\`.
        `,
      },
    },
  },
}

export default TextMeta

type TextStory = StoryObj<typeof Text>

export const Default: TextStory = {
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
    variant: 'md/normal',
    children: 'Hello, World!',
  },
  render: ({ children, variant, tag, className }) => (
    <DefaultComponent variant={variant} tag={tag} className={className}>
      {children}
    </DefaultComponent>
  ),
}
