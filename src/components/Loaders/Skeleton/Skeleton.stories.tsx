import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from '.'

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
    className: 'w-40 h-40',
  },
  parameters: {
    backgrounds: { default: 'dark' },
    controls: { expanded: true },
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'shown' },
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
  args: {
    className: 'w-40 h-40',
  },
}

/**
 * Nested Skeleton components. Ideal for make complex skeletons.
 */

export const Nested: SkeletonStory = {
  args: {
    className: 'w-full h-44',
    animationDuration: 2,
    children: (
      <div className="flex flex-col gap-4 px-6 py-2">
        <div className="flex gap-4">
          <Skeleton className="h-10 w-10 rounded-full" animationDuration={1} />
          <Skeleton className="h-10 w-full" animationDuration={1.2} />
        </div>
        <Skeleton className="h-10 w-full" animationDuration={1.3} />
        <Skeleton className="h-10 w-full" animationDuration={1.4} />
      </div>
    ),
  },
}
