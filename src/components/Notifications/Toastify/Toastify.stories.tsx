import { Meta, StoryObj } from '@storybook/react'
import { Toastify, ToastifyProvider, ToastOptionsProps } from './Toastify'
import { Text } from '../../Texts/Text'
import { CodeDecoratorDefault, DefaultComponent } from './Decorators'

const ToastifyMeta: Meta<{
  option: ToastOptionsProps
  description: string
}> = {
  title: 'Components/Notifications/Toastify',
  component: Toastify,
  subcomponents: { ToastifyProvider },
  tags: ['autodocs'],
  argTypes: {
    description: {
      control: 'text',
      description: 'The message of the toast',
    },
    option: {
      control: 'object',
      description: `Properties of the toast
    - autoClose: number
    - hideProgressBar: boolean
    - closeOnClick: boolean
    - pauseOnHover: boolean
    - draggable: boolean
    - progress: !boolean
    - position: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left'
    - theme: 'colored' | 'dark'
    - type: 'success' | 'error' | 'info' | 'warning'
      `,
    },
  },
  args: {
    description: 'This is a toast message.',
    option: {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: 'success',
    },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The Toastify component is a container provider for the toast component. It is responsible for rendering the toasts and positioning them on the screen.
        You can place it anywhere in your app, but it's recommended to place it at the root of your app.
        The Toastify receives a \`description\` prop that controls the message of the toast.
        The Toastify receives an \`option\` prop that controls the options of the toast.
        The \`<ToastifyProvider />\` component is a container provider for the toast component. It is responsible for rendering the toasts and positioning them on the screen.
        `,
      },
    },
  },
}

export default ToastifyMeta

type ToastifyStory = StoryObj<typeof Toastify>

export const Default: ToastifyStory = {
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
        <ToastifyProvider />
      </div>
    ),
  ],
  args: {
    description: 'This is a toast message.',
    option: {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      position: 'bottom-right',
      theme: 'colored',
      type: 'success',
    },
  },
  render: ({ description, option }) => (
    <DefaultComponent description={description} option={option} />
  ),
}
