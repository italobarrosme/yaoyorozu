import { Meta, StoryObj } from '@storybook/react'
import { Toaster, Toast } from '.'
import { Text } from '../../Texts/Text'
import { CodeDecoratorDefault, DefaultComponent } from './Decorators'

const toastPositions = [
  'top/left',
  'top/center',
  'top/right',
  'bottom/left',
  'bottom/center',
  'bottom/right',
]

const ToasterMeta: Meta<typeof Toaster> = {
  title: 'Components/Notifications/Toaster',
  component: Toaster,
  subcomponents: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Toast: Toast as any,
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
  argTypes: {
    position: {
      control: 'select',
      options: toastPositions,
      description: 'The position where the toasts will be displayed',
    },
  },
  args: {
    position: 'bottom/center',
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The Toaster component is a container provider for the Toast component. It is responsible for rendering the Toasts and positioning them on the screen.
        You can place it anywhere in your app, but it's recommended to place it at the root of your app.
        The Toaster component uses the Toast component from [Radix UI](https://www.radix-ui.com/docs/primitives/components/toast) .
        The Toaster receives a \`position\` prop that controls where the toasts will be displayed.
        To play with the position of the toasts, use the \`position\` control in the controls panel. Prefer to change the controls on each story instead of changing directly from the docs page.
        To display a toast, you need to use the \`useToast\` hook. It returns a \`toast\` function that you can call to display a toast.
        The \`toast\` function accepts an object with the following properties: 
        \`title\`: The title of the toast
        \`description\`: The description of the toast
        \`action\`: The action of the toast. It can be a button or a link.
            A ToastAction component is provided for convenience. See below for an example.
        \`duration\`: The duration of the toast. It can be a number or \`Infinity\`.
            If it's a number, the toast will be automatically closed after the specified number of milliseconds.
            If it's \`Infinity\`, the toast will not be automatically closed.
        \`variant\`: The variant color scheme of the toast. Default is \`default\`.
        `,
      },
    },
  },
}

export default ToasterMeta

type ToastStory = StoryObj<typeof Toaster>

export const Default: ToastStory = {
  decorators: [
    (Story, context) => (
      <div className="flex flex-col gap-4 w-full">
        <Text variant="xl/bold" tag="h3">
          Playground
        </Text>
        <Story />
        <Toaster position={context.args.position} />
        <hr />
        <Text variant="xs/semibold">
          copy the code below to use the component in your project. You can also
        </Text>
        <CodeDecoratorDefault />
      </div>
    ),
  ],
  render: () => <DefaultComponent />,
}
