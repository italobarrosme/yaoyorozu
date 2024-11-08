import type { Meta, StoryObj } from '@storybook/react'
import { Chip } from '.'
import {
  DefaultComponent,
  DefaultCode,
  NotRemovableCode,
  NotRemovableComponent,
} from './Decorators'
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

const ChipMeta: Meta<typeof Chip> = {
  title: 'Components/Buttons/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The value of the chip',
      defaultValue: 'Chip',
    },
    variant: {
      control: 'select',
      options: SizeStyleCombinations,
      description: 'The variant of the chip',
      defaultValue: 'fit/regular',
    },
    onClick: {
      action: 'clicked',
      description: 'The onClick event of the chip',
    },
    onRemove: {
      action: 'removed',
      description: 'The onRemove event of the chip',
    },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The \`Chip\` component is used to represent a piece of information. It can be used to display tags, categories, or any other type of information.
        He has properties of the \`Button\` component.`,
      },
    },
  },
}

export default ChipMeta

type ChipStory = StoryObj<typeof Chip>

export const Default: ChipStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-full text-neutral-black">
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
  args: {
    onRemove: () => console.log('Chip removed'),
  },
  render({ value = 'Chip', variant = 'fit/regular', onRemove, ...props }) {
    return (
      <DefaultComponent
        value={value}
        variant={variant}
        onRemove={onRemove}
        {...props}
      />
    )
  },
}

export const NotRemovable: ChipStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-full text-neutral-black">
        <Text variant="xl/bold" tag="h3">
          Playground
        </Text>
        <Story />
        <hr />
        <Text variant="xs/semibold">
          copy the code below to use the component in your project. You can also
        </Text>
        <NotRemovableCode />
      </div>
    ),
  ],
  args: {
    onRemove: undefined,
  },
  render({ value = 'Chip', variant = 'medium/regular', ...props }) {
    return <NotRemovableComponent value={value} variant={variant} {...props} />
  },
}
