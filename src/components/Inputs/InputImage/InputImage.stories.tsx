import type { Meta, StoryObj } from '@storybook/react'
import { InputImage } from '.'
import {
  CodeDecoratorCustomImage,
  CustomImageComponent,
  CodeDecoratorDefault,
  DefaultComponent,
} from './Decorators'
import { Text } from '../../Texts/Text'

const InputImageMeta: Meta<typeof InputImage> = {
  title: 'Components/Inputs/InputImage',
  component: InputImage,
  tags: ['autodocs'],
  argTypes: {
    accept: {
      control: 'object',
      description:
        'The accept format for the image. The key is the mime type and the value is the array of format types.',
      defaultValue: {
        'image/**': ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'],
      },
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
    children: {
      description: 'Choose to render a custom component for the image preview.',
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
        component: `The \`InputImage\` component is used to upload images. It accepts an \`onUpload\` function to handle the uploaded files.
        by default, the \`<img>\` tag is rendered, but you can create an \`<Image>\` custom component by associating it with the function children and receiving all the image parameters,
        the component has a function called \`clearFiles()\` that can be extracted via \`useRef\`.
        `,
      },
    },
  },
}

export default InputImageMeta

type InputImageStory = StoryObj<typeof InputImage>

export const Default: InputImageStory = {
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
    accept: {
      'image/**': ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'],
    },
    textIndicator: 'Drag n drop some files here, or click to select files',
    onUpload: (files) => console.log(files),
  },
  render: ({ accept, textIndicator, onUpload }) => {
    return (
      <DefaultComponent
        accept={accept}
        textIndicator={textIndicator}
        onUpload={onUpload}
      />
    )
  },
}

export const CustomImage: InputImageStory = {
  decorators: [
    (Story) => (
      <div className="flex flex-col gap-4 w-full">
        <Text variant="xs/semibold">
          copy the code below to use the component in your project. You can also
        </Text>
        <CodeDecoratorCustomImage />
        <hr />
        <Text variant="xl/bold" tag="h3">
          Playground
        </Text>
        <Story />
      </div>
    ),
  ],
  args: {
    accept: {
      'image/**': ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'],
    },
    textIndicator: 'Drag n drop some files here, or click to select files',
    onUpload: (files) => console.log(files),
  },
  render: ({ accept, textIndicator, onUpload }) => {
    return (
      <CustomImageComponent
        accept={accept}
        textIndicator={textIndicator}
        onUpload={onUpload}
      />
    )
  },
}
