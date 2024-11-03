import type { Meta, StoryObj } from '@storybook/react'
import { ButtonLink } from '.'
import {
  CodeDecoratorDefault,
  DefaultComponent,
} from './Decorators/CodeDecoratorDefault'
import { Text } from '../../Texts/Text'

const SizeStyleCombinations = [
  'small/regular',
  'small/outline',
  'small/block',
  'medium/regular',
  'medium/outline',
  'medium/block',
  'large/regular',
  'large/outline',
  'large/block',
  'full/regular',
  'full/outline',
  'full/block',
  'fit/regular',
  'fit/outline',
  'fit/block',
  'rounded/regular',
  'rounded/outline',
  'rounded/block',
]

const NextLink = ({ children, ...props }) => (
  <span {...props} className="text-primary-regular">
    {children}
  </span>
)

const listChildren = {
  'Terms and conditions': 'Terms and conditions',
  'Privacy policy': (
    <span>
      Privacy policy <br />{' '}
      <span className="text-xs">Last updated: 2021-10-10</span>
    </span>
  ),
  'Cookie policy': <NextLink href="#">Cookie policy</NextLink>,
}

const ButtonLinkMeta: Meta<typeof ButtonLink> = {
  title: 'Components/Buttons/ButtonLink',
  component: ButtonLink,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: SizeStyleCombinations,
      description: 'The variant of the button combination of size and style.',
      defaultValue: 'medium',
    },
    children: {
      control: 'select',
      options: Object.keys(listChildren),
      description: 'The content of the button',
      mapping: listChildren,
    },
    className: {
      control: 'text',
      description: 'The class name of the button',
    },
    href: {
      control: 'text',
      description: 'The href of the button',
      defaultValue: '#',
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
        component: `The \`ButtonLink\` component is used to trigger actions. It has the behavior of an \`a\` tag with some styling features`,
      },
    },
  },
}

export default ButtonLinkMeta

type ButtonLinkStory = StoryObj<typeof ButtonLink>

export const Default: ButtonLinkStory = {
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
    children: 'Terms and conditions',
  },
  render: ({ children, variant, className, ...props }) => (
    <DefaultComponent variant={variant} className={className} {...props}>
      {children}
    </DefaultComponent>
  ),
}
