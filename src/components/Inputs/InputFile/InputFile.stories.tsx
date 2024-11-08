import type { Meta, StoryObj } from '@storybook/react'
import { InputFile } from '.'
import { DefaultCode, DefaultComponent } from './Decorators'
import { Text } from '../../Texts/Text'

const InputFileMeta: Meta<typeof InputFile> = {
  title: 'Components/Inputs/InputFile',
  component: InputFile,
  tags: ['autodocs'],
  argTypes: {
    acceptOptions: {
      control: 'select',
      options: [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.oasis.opendocument.text',
        'text/plain',
        'text/csv',
        'text/tab-separated-values',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      ],
      description: 'The accepted file formats.',
      defaultValue: 'image/png',
    },
    textIndicator: {
      control: 'text',
      description: 'The text indicator for the input.',
      defaultValue: 'Drag n drop some files here, or click to select files',
    },
    onUpload: {
      action: 'onUpload',
      description: 'The function to be called when the files are uploaded.',
    },
    sizePreview: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the prepreview file.',
    },
  },
  args: {
    onUpload: (files) => console.log(files),
  },
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: 'none' },
      description: {
        component: `The \`InputFile\` component is used to upload docs and text plain. It accepts an \`onUpload\` function to handle the uploaded files.
        by default, the \`<img>\` tag is rendered, but you can create an \`<Image>\` custom component by associating it with the function children and receiving all the image parameters,
        the component has a function called \`clearFiles()\` that can be extracted via \`useRef\`.
        `,
      },
    },
  },
}

export default InputFileMeta

type InputFileStory = StoryObj<typeof InputFile>

export const Default: InputFileStory = {
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
    acceptOptions: [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.oasis.opendocument.text',
      'text/plain',
      'text/csv',
      'text/tab-separated-values',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ],
    textIndicator: 'Drag n drop some files here, or click to select files',
    onUpload: (files) => console.log(files),
  },
  render: ({ acceptOptions, textIndicator, onUpload, sizePreview }) => {
    return (
      <DefaultComponent
        acceptOptions={acceptOptions}
        textIndicator={textIndicator}
        sizePreview={sizePreview}
        onUpload={onUpload}
      />
    )
  },
}
