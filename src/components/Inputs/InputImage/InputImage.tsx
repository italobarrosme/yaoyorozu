'use client'

import { Icon } from '@iconify/react'
import {
  forwardRef,
  ReactNode,
  useEffect,
  useState,
  useImperativeHandle,
} from 'react'
import { useDropzone } from 'react-dropzone'
import { Text } from '../../Texts/Text'

type FormatTypes = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp']

export type AcceptFormat = {
  'image/**': FormatTypes
}

export type InputImageRef = {
  clearFiles: () => void
}

export type FileImageProps = File & {
  preview: string
}

export type InputImageProps = {
  onUpload: (files: FileImageProps[]) => void
  accept: AcceptFormat
  textIndicator?: string
  children?: (props: {
    src: string
    alt: string
    width: number
    height: number
  }) => ReactNode
}

const InputImage = forwardRef<InputImageRef, InputImageProps>(
  (
    {
      onUpload,
      accept,
      textIndicator = `Drag n drop some files here, or click to select files`,
      children,
    },
    ref
  ) => {
    const [files, setFiles] = useState<FileImageProps[]>([])
    const { getRootProps, getInputProps } = useDropzone({
      accept: accept,
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

    const clearFiles = () => {
      setFiles([])
    }

    useImperativeHandle(ref, () => ({
      clearFiles: clearFiles,
    }))

    return (
      <>
        <div
          {...getRootProps({
            className:
              'border-2 border-dashed border-gray-200 min-h-48 rounded-md w-full h-full p-4 flex items-center justify-center gap-2 cursor-pointer transition-colors delay-300 hover:border-brand-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2',
          })}
        >
          <input {...getInputProps()} />
          <Icon icon="photo" width={24} />

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
                      width: 220,
                      height: 220,
                    })
                  ) : (
                    <img
                      src={file.preview}
                      alt={file.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                  )}
                  <span className="text-xs">{file.name}</span>
                </div>
              ))}
            </div>
          ) : (
            <Text variant="md/medium">{textIndicator}</Text>
          )}
        </div>
      </>
    )
  }
)

export { InputImage }
