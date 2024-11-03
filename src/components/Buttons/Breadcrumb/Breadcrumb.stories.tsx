import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from './Breadcrumb'
import {
  CodeDecoratorCustomLink,
  CodeDecoratorDefault,
  CustomLinkComponent,
  DefaultComponent,
  CodeDecoratorsManyLinks,
  ManyLinksComponent,
} from './Decorators'
import { Text } from '../../Texts/Text'
import { Icon } from '@iconify/react'

const listIcons = {
  Arrow: <Icon icon="akar-icons:arrow-right" />,
  Chevron: <Icon icon="akar-icons:chevron-right" />,
  penguin: <Icon icon="twemoji:penguin" />,
}

const BreadcrumbMeta: Meta<typeof Breadcrumb> = {
  title: 'Components/Buttons/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'The items to be rendered in the breadcrumb.',
      defaultValue: [],
    },
    iconSeparator: {
      control: 'select',
      options: Object.keys(listIcons),
      mapping: listIcons,
      description: 'The icon of the input',
    },
    customLink: {
      description:
        'Custom link component to be rendered in the breadcrumb. It receives the href and name of the item. If not provided, the default link will be rendered.',
    },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The \`Breadcrumb\` component is used to navigate between pages. It accepts an array of objects with the name and href of the pages to be navigated.`,
      },
    },
  },
}

export default BreadcrumbMeta

type BreadCrumbStory = StoryObj<typeof Breadcrumb>

export const Default: BreadCrumbStory = {
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
    items: [
      { name: 'Home', href: '#' },
      { name: 'Pc Gamer', href: '#' },
      { name: 'Monitors', href: '#' },
    ],
    iconSeparator: 'Chevron',
  },
  render: ({ items, className, iconSeparator }) => {
    return (
      <DefaultComponent
        className={className}
        iconSeparator={iconSeparator}
        items={items}
      />
    )
  },
}

export const CustomLink: BreadCrumbStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-full">
        <Text variant="xs/semibold">
          copy the code below to use the component in your project. You can also
        </Text>
        <CodeDecoratorCustomLink />
        <hr />
        <Text variant="xl/bold" tag="h3">
          Playground
        </Text>
        <Story />
      </div>
    ),
  ],
  args: {
    items: [
      { name: 'Store', href: '#' },
      { name: 'Checkout', href: '#' },
      { name: 'Address', href: '#' },
    ],
    customLink: ({ href, name }) => (
      <a
        className="bg-neutral-lightest text-neutral-dark border-2 border-complementary-highlight px-1 rounded-3xl"
        href={href}
      >
        {name}
      </a>
    ),
  },
  render: ({ items, className, customLink, iconSeparator }) => {
    return (
      <CustomLinkComponent
        className={className}
        customLink={customLink}
        iconSeparator={iconSeparator}
        items={items}
      />
    )
  },
}

export const ManyLinks: BreadCrumbStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-full">
        <Text variant="xs/semibold">
          copy the code below to use the component in your project. You can also
        </Text>
        <CodeDecoratorsManyLinks />
        <hr />
        <Text variant="xl/bold" tag="h3">
          Playground
        </Text>
        <Story />
      </div>
    ),
  ],
  args: {
    items: [
      { name: 'North American', href: '#' },
      { name: 'EUA', href: '#' },
      { name: 'New York', href: '#' },
      { name: 'Brooklyn', href: '#' },
      { name: 'Canarsie', href: '#' },
      { name: 'Avenue J', href: '#' },
      { name: '9613', href: '#' },
    ],
  },
  render: ({ items, className, iconSeparator }) => {
    return (
      <ManyLinksComponent
        className={className}
        iconSeparator={iconSeparator}
        items={items}
      />
    )
  },
}
