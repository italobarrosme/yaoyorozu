import type { Meta, StoryObj } from '@storybook/react'
import { InputSelect } from '.'
import { CodeDecoratorDefault, DefaultComponent } from './Decorators'
import { Text } from '../../Texts/Text'

const InputSelectMeta: Meta<typeof InputSelect> = {
  title: 'Components/Inputs/InputSelect',
  component: InputSelect,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label of the input',
      defaultValue: 'Label',
    },
    options: {
      control: 'object',
      description: 'The options of the input',
      defaultValue: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
      ],
    },
    disabled: {
      control: 'boolean',
      description: 'The disabled state of the input',
      defaultValue: false,
    },
    hasError: {
      control: 'boolean',
      description: 'The error state of the input',
      defaultValue: false,
    },
    errorMessage: {
      control: 'text',
      description: 'The error message of the input',
    },
    accessoryText: {
      control: 'text',
      description: 'The accessory text of the input',
    },
    onValueChange: {
      action: 'onValueChange',
      table: {
        disable: true,
      },
    },
    isCheck: {
      control: 'boolean',
      description: 'The check state of the input',
      defaultValue: false,
    },
    link: {
      control: 'text',
      description: 'The link of the input',
    },
    dark: {
      control: 'boolean',
      description: 'The dark state of the input',
      defaultValue: false,
    },
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The \`InputSelect\` component is used to get a value from the user.
        It can be used to get a single value or multiple values. It has a list of options that opens when the input is clicked.
        `,
      },
    },
  },
}

export default InputSelectMeta

type InputSelectStory = StoryObj<typeof InputSelect>

export const Default: InputSelectStory = {
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
    label: 'Choose a country',
    options: [
      { label: 'Brazil', value: 'br' },
      { label: 'United States of American', value: 'eua' },
      {
        label: 'United Kingdom of Great Britain and Northern Ireland',
        value: 'uk',
      },
    ],
    disabled: false,
    hasError: false,
    errorMessage: '',
    accessoryText: '',
    isCheck: false,
    link: undefined,
    dark: true,
    onValueChange: (value) => console.log(value),
  },
  render: ({
    label,
    options,
    disabled,
    hasError,
    errorMessage,
    accessoryText,
    isCheck,
    link,
    dark,
    onValueChange,
  }) => (
    <DefaultComponent
      label={label}
      options={options}
      disabled={disabled}
      hasError={hasError}
      errorMessage={errorMessage}
      accessoryText={accessoryText}
      isCheck={isCheck}
      link={link}
      dark={dark}
      onValueChange={onValueChange}
    />
  ),
}
