import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '.'

export const SizeWeightCombinations = [
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
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: SizeWeightCombinations,
      description:
        'The variant of the Text component displayed size and weight. Values are written as `text-size/font-weight`.',
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
    controls: { expanded: true },
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
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

/**
 * A Regular use case of the Text component
 */
export const Preview: TextStory = {
  args: {
    variant: 'md/normal',
  },
}

/**
 * Use case of the Text component with a long text
 */
export const PreviewWithLongText: TextStory = {
  args: {
    variant: 'md/normal',
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
    quos, quibusdam officiis, atque velit, doloremque nobis tenetur
    quae totam dolorem ipsam. Iure, quisquam. Ipsa, cumque
    consequuntur. Consequatur, atque. Quasi, nam`,
  },
}

/**
 * Use case of the Text component with a different variant. In this case, the variant is `2xl/normal`
 */
export const PreviewWithDifferentVariant: TextStory = {
  args: {
    variant: '2xl/normal',
    children: 'Hello, World!',
  },
}
