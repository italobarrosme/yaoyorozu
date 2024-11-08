import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from '.'
import { Text } from '../../Texts/Text'
import {
  CodeDecoratorDefault,
  DefaultComponent,
  NestedCode,
  NestedComponent,
} from './Decorators'

const SkeletonMeta: Meta<typeof Skeleton> = {
  title: 'Components/Loaders/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    animationDuration: {
      control: 'number',
      description: `Specifies the duration of the animation for the skeleton loading effect. The default value is 1.6 seconds.`,
      defaultValue: 1.6,
    },
    size: {
      control: {
        type: 'select',
        options: ['circle', 'line', 'extendLine'],
      },
      description: `Specifies the size of the Skeleton component. The default value is 'line'.`,
      defaultValue: 'line',
    },
    className: {
      description: `CSS classes are essential for achieving a satisfactory visual result, with particular importance placed on the width and height styles.
        Additionally, other classes can be utilized to further customize the appearance.
        Tailwind classes are fully supported in this context.`,
    },
    children: {
      description: `The content of the Skeleton component. It can be another Skeleton or any other component. Ideal for make complex skeletons.`,
    },
  },
  args: {
    animationDuration: 1.6,
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The Skeleton component can be used to display a skeleton loading effect while content is being loaded or fetched asynchronously.
        It provides a visually appealing placeholder that mimics the expected layout and structure of the content.
        `,
      },
    },
  },
}

export default SkeletonMeta

type SkeletonStory = StoryObj<typeof Skeleton>

/**
 * Default use case of the Skeleton component. The default animation duration is 1.6 seconds.
 * Note that the width and height styles are essential for achieving a satisfactory visual result.
 */

export const Default: SkeletonStory = {
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
        <CodeDecoratorDefault />
      </div>
    ),
  ],
  args: {
    size: 'line',
    animationDuration: 1.6,
  },
  render: ({ animationDuration, size, ...props }) => {
    return (
      <DefaultComponent
        animationDuration={animationDuration}
        size={size}
        {...props}
      />
    )
  },
}

export const Nested: SkeletonStory = {
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
        <NestedCode />
      </div>
    ),
  ],
  args: {
    className: 'w-full h-full',
    animationDuration: 2,
    size: 'extendLine',
  },
  render: ({ animationDuration, size, ...props }) => {
    return (
      <NestedComponent
        animationDuration={animationDuration}
        size={size}
        {...props}
      />
    )
  },
}
