'use client'

import { Icon } from '@iconify/react'
import {
  forwardRef,
  ReactNode,
  useEffect,
  useState,
  useImperativeHandle,
  useCallback,
} from 'react'
import { useDropzone } from 'react-dropzone'
import { Text } from '../../Texts/Text'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../../../utils/cn'

const inputImageStyles = cva([], {
  variants: {
    size: {
      sm: 'w-20 h-20',
      md: 'w-24 h-24',
      lg: 'w-32 h-32',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

type InputImageStylesProps = VariantProps<typeof inputImageStyles>

export type FormatTypes =
  | 'image/jpeg'
  | 'image/png'
  | 'image/gif'
  | 'image/bmp'
  | 'image/webp'

export type InputImageRef = {
  clearFiles: () => void
}

export type FileImageProps = File & {
  preview: string
}

export type InputImageProps = {
  onUpload: (files: FileImageProps[]) => void
  acceptOptions?: FormatTypes[]
  textIndicator?: string
  sizePreview?: InputImageStylesProps['size']
  children?: (props: {
    src: string
    alt: string
    className: string
  }) => ReactNode
}

const InputImage = forwardRef<InputImageRef, InputImageProps>(
  (
    {
      onUpload,
      acceptOptions,
      textIndicator = `Drag n drop some files here, or click to select files`,
      children,
      sizePreview = 'md',
    },
    ref
  ) => {
    const [files, setFiles] = useState<FileImageProps[]>([])
    const { getRootProps, getInputProps, fileRejections } = useDropzone({
      accept: {
        acceptOptions,
      },
      onDrop: (acceptedFiles: File[]) => {
        setFiles(
          acceptedFiles.map((file: File) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        )
      },
    })

    useEffect(() => {
      onUpload(files)
      return () => {
        files.forEach((file) => URL.revokeObjectURL(file.preview))
      }
    }, [files, onUpload])

    const clearFiles = useCallback(() => {
      setFiles([])
    }, [])

    useImperativeHandle(ref, () => ({
      clearFiles: clearFiles,
    }))

    if (fileRejections.length) {
      return (
        <div
          {...getRootProps({
            className:
              'border-2 border-dashed border-red-500 min-h-48 rounded-md w-full h-full p-4 flex items-center justify-center gap-2 cursor-pointer transition-colors delay-300 hover:border-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2',
          })}
        >
          <Icon icon="tdesign:image-error" width={24} />
          <Text variant="md/medium" color="red">
            {fileRejections[0].errors[0].message}
          </Text>
          <input {...getInputProps()} />
        </div>
      )
    }

    return (
      <>
        <div
          {...getRootProps({
            className:
              'border-2 border-dashed border-gray-200 min-h-48 rounded-md w-full h-full p-4 flex items-center justify-center gap-2 cursor-pointer transition-colors delay-300 hover:border-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2',
          })}
        >
          <input {...getInputProps()} />

          {files.length ? (
            <div className="flex gap-2 flex-wrap">
              {files.map((file: FileImageProps) => (
                <div
                  key={file.name}
                  className="flex flex-col items-center gap-2"
                >
                  {children ? (
                    children({
                      src: file.preview,
                      alt: file.name,
                      className: `${inputImageStyles({
                        size: sizePreview,
                      })} object-cover rounded-md`,
                    })
                  ) : (
                    <img
                      src={file.preview}
                      alt={file.name}
                      className={cn(
                        inputImageStyles({ size: sizePreview }),
                        'object-cover rounded-md'
                      )}
                    />
                  )}
                  <span className="text-xs">{file.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <>
              <Icon icon="tdesign:image-add" width={24} />
              <Text variant="md/medium">{textIndicator}</Text>
            </>
          )}
        </div>
      </>
    )
  }
)

export { InputImage }
