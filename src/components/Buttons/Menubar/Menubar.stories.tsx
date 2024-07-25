import type { Meta, StoryObj } from '@storybook/react'
import { Menubar } from '.'
import { CodeDecoratorDefault, DefaultComponent } from './Decorators'
import { Text } from '../../Texts/Text'
import { ButtonLink } from '../ButtonLink'

const MenuProp = [
  {
    trigger: 'File',
    listItems: [
      {
        children: (
          <ButtonLink className="text-neutral-white" variant="fit/block">
            Open
          </ButtonLink>
        ),
      },
      {
        children: (
          <ButtonLink className="text-neutral-white" variant="fit/block">
            Save
          </ButtonLink>
        ),
      },
      {
        children: (
          <ButtonLink className="text-neutral-white" variant="fit/block">
            Save As
          </ButtonLink>
        ),
      },
    ],
    subMenus: [
      {
        trigger: 'Recent Files',
        listItems: [
          {
            children: (
              <ButtonLink className="text-neutral-white" variant="fit/block">
                File 1
              </ButtonLink>
            ),
          },
          {
            children: (
              <ButtonLink className="text-neutral-white" variant="fit/block">
                File 2
              </ButtonLink>
            ),
          },
          {
            children: (
              <ButtonLink className="text-neutral-white" variant="fit/block">
                File 3
              </ButtonLink>
            ),
          },
        ],
      },
    ],
  },
]

const MenubarMeta: Meta<typeof Menubar> = {
  title: 'Components/Buttons/Menubar',
  component: Menubar,
  tags: ['autodocs'],
  argTypes: {
    menus: {
      control: 'object',
      description: 'The menus for the menubar',
      defaultValue: [MenuProp],
    },
    className: {
      control: 'text',
      description: 'The class name of the menubar',
    },
  },
  args: {
    className: 'menubar',
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The \`Menubar\` component is used to create a menubar with dropdown menus. It has the behavior of a \`div\` tag with some styling features`,
      },
    },
  },
}

export default MenubarMeta

type MenubarStory = StoryObj<typeof Menubar>

export const Default: MenubarStory = {
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
    menus: MenuProp,
  },
  render: ({ menus, className }) => {
    return <DefaultComponent menus={menus} className={className} />
  },
}
