import type { Meta, StoryObj } from '@storybook/react'
import { Menubar } from '.'
import { CodeDecoratorDefault, DefaultComponent } from './Decorators'
import { Text } from '../../Texts/Text'
import { ButtonLink } from '../ButtonLink'

const MenuProp = [
  {
    trigger: 'Computer store',
    listItems: [
      {
        children: (
          <ButtonLink
            className="text-neutral-white rounded-3xl"
            variant="medium/block"
          >
            Nootbooks
          </ButtonLink>
        ),
      },
      {
        children: (
          <ButtonLink
            className="text-neutral-white rounded-3xl"
            variant="medium/block"
          >
            Memory
          </ButtonLink>
        ),
      },
      {
        children: (
          <ButtonLink
            className="text-neutral-white rounded-3xl"
            variant="medium/block"
          >
            PCs
          </ButtonLink>
        ),
      },
    ],
    subMenus: [
      {
        trigger: 'Games',
        listItems: [
          {
            children: (
              <ButtonLink
                className="text-neutral-white rounded-3xl"
                variant="medium/block"
              >
                Xboxs
              </ButtonLink>
            ),
          },
          {
            children: (
              <ButtonLink
                className="text-neutral-white rounded-3xl"
                variant="medium/block"
              >
                PC
              </ButtonLink>
            ),
          },
          {
            children: (
              <ButtonLink
                className="text-neutral-white rounded-3xl"
                variant="medium/block"
              >
                Playstation
              </ButtonLink>
            ),
          },
        ],
        subMenus: [
          {
            trigger: 'Accessories',
            listItems: [
              {
                children: (
                  <ButtonLink
                    className="text-neutral-white rounded-3xl"
                    variant="medium/block"
                  >
                    Controllers
                  </ButtonLink>
                ),
              },
              {
                children: (
                  <ButtonLink
                    className="text-neutral-white rounded-3xl"
                    variant="medium/block"
                  >
                    Headsets
                  </ButtonLink>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    trigger: 'Smartphones',
    listItems: [
      {
        children: (
          <ButtonLink
            className="text-neutral-white rounded-3xl"
            variant="medium/block"
          >
            Android
          </ButtonLink>
        ),
      },
      {
        children: (
          <ButtonLink
            className="text-neutral-white rounded-3xl"
            variant="medium/block"
          >
            iOS
          </ButtonLink>
        ),
      },
    ],
    subMenus: [
      {
        trigger: 'Accessories',
        listItems: [
          {
            children: (
              <ButtonLink
                className="text-neutral-white rounded-3xl"
                variant="medium/block"
              >
                Cases
              </ButtonLink>
            ),
          },
          {
            children: (
              <ButtonLink
                className="text-neutral-white rounded-3xl"
                variant="medium/block"
              >
                Chargers
              </ButtonLink>
            ),
          },
        ],
      },
      {
        trigger: 'Smartwatches',
        listItems: [
          {
            children: (
              <ButtonLink
                className="text-neutral-white rounded-3xl"
                variant="medium/block"
              >
                Android
              </ButtonLink>
            ),
          },
          {
            children: (
              <ButtonLink
                className="text-neutral-white rounded-3xl"
                variant="medium/block"
              >
                iOS
              </ButtonLink>
            ),
          },
        ],
      },
    ],
  },
  {
    trigger: 'Cameras',
    listItems: [
      {
        children: (
          <ButtonLink
            className="text-neutral-white rounded-3xl"
            variant="medium/block"
          >
            DSLRs
          </ButtonLink>
        ),
      },
      {
        children: (
          <ButtonLink
            className="text-neutral-white rounded-3xl"
            variant="medium/block"
          >
            Mirrorless
          </ButtonLink>
        ),
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
      description: `The menus prop is an array of objects that contains the trigger, listItems, and subMenus properties.
      The trigger property is the name of the menu item.`,
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
        component: `The \`Menubar\` component is used to create a menubar with dropdown menus. .
        For use \`Menubar\` component, you need to pass the prop \`menus\` which is an array of objects.
        `,
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
    menus: MenuProp,
  },
  render: ({ menus, className }) => {
    return <DefaultComponent menus={menus} className={className} />
  },
}
