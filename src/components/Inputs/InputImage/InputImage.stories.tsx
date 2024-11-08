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
    acceptOptions: {
      control: 'select',
      options: [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/bmp',
        'image/webp',
      ],
      description: 'The accepted file formats.',
      defaultValue: 'image/png',
    },
    textIndicator: {
      control: 'text',
      description: 'The text indicator for the input.',
      defaultValue: 'Drag n drop some images here, or click to select images',
    },
    onUpload: {
      action: 'onUpload',
      description: 'The function to be called when the images are uploaded.',
    },
    sizePreview: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the prepreview image.',
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
    acceptOptions: [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/bmp',
      'image/webp',
    ],
    textIndicator: 'Drag n drop some images here, or click to select images',
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
    acceptOptions: ['image/jpeg'],
    textIndicator: 'Drag n drop some files here, or click to select files',
    onUpload: (files) => console.log(files),
  },
  render: ({ acceptOptions, textIndicator, onUpload, sizePreview }) => {
    return (
      <CustomImageComponent
        acceptOptions={acceptOptions}
        sizePreview={sizePreview}
        textIndicator={textIndicator}
        onUpload={onUpload}
      />
    )
  },
}
