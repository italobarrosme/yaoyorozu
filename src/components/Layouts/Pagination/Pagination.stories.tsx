import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from '.'
import { DefaultComponent, CodeDecoratorDefault } from './Decorators'
import { useArgs } from '@storybook/preview-api'

import { Text } from '../../Texts/Text'

const PaginationMeta: Meta<typeof Pagination> = {
  title: 'Components/Layout/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalCount: {
      description: 'The total number of items',
      control: {
        type: 'number',
      },
    },
    currentPage: {
      description: 'The current page',
      control: {
        type: 'number',
      },
    },
    pageSize: {
      description: 'The number of items per page',
      control: {
        type: 'number',
      },
    },
    onPageChange: {
      description: 'The function that is called when the page changes',
      control: {
        disable: true,
      },
    },
    siblingCount: {
      description: 'The number of siblings to show',
      control: {
        type: 'number',
      },
    },
  },
  args: {
    totalCount: 50,
    currentPage: 1,
    pageSize: 5,
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The Pagination component enables navigation through a list of items. 
        It takes the total item count, items per page, and the current page number. 
        A function for handling page changes is required. 
        You can customize the number of adjacent pages displayed using the \`siblingCount\` prop. 
        If there are fewer than 2 pages, the component won’t render. 
        When the total pages exceed the visible ones, DOTS will be shown to indicate hidden pages.`,
      },
    },
  },
}

export default PaginationMeta

type PaginationStory = StoryObj<typeof Pagination>

export const Default: PaginationStory = {
  decorators: [
    (Story) => {
      return (
        <div className="flex flex-col gap-4 w-full">
          <Text variant="xs/semibold">
            copy the code below to use the component in your project. You can
            also
          </Text>
          <CodeDecoratorDefault />
          <hr />
          <Text variant="xl/bold" tag="h3">
            Playground
          </Text>
          <Story />
        </div>
      )
    },
  ],
  render: function Render(args) {
    const [{ currentPage }, updateArgs] = useArgs()

    function onPageChange(page: number) {
      updateArgs({ currentPage: page })
    }

    return (
      <DefaultComponent
        {...args}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    )
  },
}
