import type { Meta, StoryObj } from '@storybook/react'
import {
  DefaultCode,
  DefaultComponent,
  BoxInputComponent,
  BoxInputCode,
} from './Decorators'

import { Text } from '../../Texts/Text'

import { InputOTP, patterns } from '.'

const InputOTPMeta: Meta<typeof InputOTP> = {
  title: 'Components/Inputs/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
  argTypes: {
    maxLength: {
      description: 'The maximum length of the input',
      control: 'number',
    },
    value: {
      description: 'The value of the input',
      control: {
        disable: true,
      },
    },
    onChange: {
      description: 'The function to handle the change event',
      action: 'changed',
      control: {
        disable: true,
      },
    },
    pattern: {
      description: `The pattern to validate the input. 
      - Available patterns:
      ${Object.entries(patterns).map(([key]) => `${key}`)}`,
      control: {
        disable: true,
      },
    },
    textAlign: {
      description: `Where is the text located within the input Affects click-holding or long-press behavior Default: 'left'`,
      control: {
        disable: true,
      },
    },
    onComplete: {
      description:
        'The function to handle the completion event, Callback when the input is complete',
      action: 'completed',
      control: {
        disable: true,
      },
    },
    noScriptCSSFallback: {
      description: `Enabled by default, it's an optional fallback for pages without JS.`,
      control: {
        disable: true,
      },
    },
    containerClassName: {
      description: 'The class name for the root container',
      control: {
        disable: true,
      },
    },
    pushPasswordManagerStrategy: {
      description: `Enabled by default, it's an optional strategy for detecting Password Managers 
      in the page and then shifting their badges to the right side, outside the input.
      -'increase-width' |'none'
      `,
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The InputOTP component is used for entering one-time passwords (OTP) or verification codes. 
        It is commonly utilized in scenarios such as two-factor authentication (2FA) and account verification processes.
        more info: https://github.com/guilhermerodz/input-otp#readme
        `,
      },
    },
  },
}

export default InputOTPMeta

type InputOTPStory = StoryObj<typeof InputOTP>

export const Default: InputOTPStory = {
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
        <DefaultCode />
      </div>
    ),
  ],
  args: {
    maxLength: 4,
    onChange: (value) => {
      console.log('changed', value)
    },
  },
  render: ({ maxLength, onChange }) => {
    return <DefaultComponent maxLength={maxLength} onChange={onChange} />
  },
}

export const BoxInputOTP: InputOTPStory = {
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
        <BoxInputCode />
      </div>
    ),
  ],
  args: {
    maxLength: 4,
    onChange: (value) => {
      console.log('changed', value)
    },
  },
  render: ({ maxLength, onChange }) => {
    return <BoxInputComponent maxLength={maxLength} onChange={onChange} />
  },
}
