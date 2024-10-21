'use client'

import { Icon } from '@iconify/react'
import {
  forwardRef,
  useEffect,
  useState,
  useImperativeHandle,
  useCallback,
} from 'react'
import { useDropzone } from 'react-dropzone'
import { Text } from '../../Texts/Text'
import { cva, VariantProps } from 'class-variance-authority'
import { errorInputFileMessages, ErrorInputFileTypes } from '../types/constants'

const inputFileStyles = cva([], {
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

type InputFileStylesProps = VariantProps<typeof inputFileStyles>

export type FormatTypes =
  | 'application/pdf'
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  | 'application/vnd.oasis.opendocument.text'
  | 'text/plain'
  | 'text/csv'
  | 'text/tab-separated-values'
  | 'application/vnd.ms-excel'
  | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'

export type InputFileRef = {
  clearFiles: () => void
}

export type FileProps = File & {
  preview: string
}

export type AcceptOptionsFile = FormatTypes[]

export type InputFileProps = {
  onUpload: (files: FileProps[]) => void
  acceptOptions?: AcceptOptionsFile
  textIndicator?: string
  sizePreview?: InputFileStylesProps['size']
  multiple?: boolean
}

const InputFile = forwardRef<InputFileRef, InputFileProps>(
  (
    {
      onUpload,
      acceptOptions = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.oasis.opendocument.text',
        'text/plain',
        'text/csv',
        'text/tab-separated-values',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      ],
      textIndicator = `Drag n drop some files here, or click`,
      multiple = false,
    },
    ref
  ) => {
    const [files, setFiles] = useState<FileProps[]>([])
    const { getRootProps, getInputProps, fileRejections } = useDropzone({
      accept: {
        acceptOptions,
      },
      multiple,
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
              'border-2 border-dashed border-feedback-error min-h-48 rounded-md w-full h-full p-4 flex items-center justify-center gap-2 cursor-pointer transition-colors delay-300 hover:border-complementary-highlight',
          })}
        >
          <Icon
            icon="fluent:document-error-20-regular"
            width={32}
            className="text-feedback-error"
          />
          <Text variant="xs/normal" className="text-feedback-error">
            {(errorInputFileMessages[
              fileRejections[0].errors[0].code as ErrorInputFileTypes
            ] as string) || (fileRejections[0].errors[0].message as string)}
          </Text>

          <input
            {...getInputProps()}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-regular focus-visible:ring-offset-2"
          />
        </div>
      )
    }

    return (
      <>
        <div
          {...getRootProps({
            className:
              'border-2 border-dashed border-gray-200 min-h-48 rounded-md w-full h-full p-4 flex items-center justify-center gap-2 cursor-pointer transition-colors delay-300 hover:border-complementary-highlight focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-regular focus-visible:ring-offset-2',
          })}
        >
          <input
            {...getInputProps()}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-regular focus-visible:ring-offset-2"
          />

          {files.length ? (
            <div className="flex gap-2 flex-wrap">
              {files.map((file: FileProps) => (
                <div
                  key={file.name}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="text-2xl uppercase">{file.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <>
              <Icon icon="mdi:file-document-plus-outline" width={24} />
              <Text variant="md/medium">{textIndicator}</Text>
            </>
          )}
        </div>
      </>
    )
  }
)

export { InputFile }
