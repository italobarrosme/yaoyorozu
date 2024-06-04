import { useRef } from 'react'
import { InputImage, InputImageProps, InputImageRef } from '..'
import { Copy } from '../../../Texts/Copy'
import { Button } from '../../../Buttons/Button'
export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
          import { InputImage, InputImageProps, InputImageRef } from '@coqueirodigital/react-components'

          
            const inputImageRef = useRef<InputImageRef>(null)
          
            const handleClearFiles = () => {
              if (inputImageRef.current) {
                inputImageRef.current.clearFiles()
              }
            }

            const onUpload: InputImageProps['onUpload'] = async (files) => {
              console.log(files)
            }
          
            <InputImage
                ref={inputImageRef}
                acceptOptions={['image/jpeg' , 'image/png' , 'image/gif' , 'image/bmp' , 'image/webp']}
                textIndicator='Drag n drop some files here, or click to select files'
                onUpload={onUpload}
              />
              <button
                onClick={handleClearFiles}
              >
                Clear files
              </button>
          }
        `}
    </Copy>
  )
}

export const DefaultComponent = ({
  acceptOptions,
  textIndicator,
  sizePreview,
  onUpload,
}: InputImageProps) => {
  const inputImageRef = useRef<InputImageRef>(null)

  const handleClearFiles = () => {
    if (inputImageRef.current) {
      inputImageRef.current.clearFiles()
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4 items-center p-4">
        <InputImage
          ref={inputImageRef}
          acceptOptions={acceptOptions}
          sizePreview={sizePreview}
          textIndicator={textIndicator}
          onUpload={onUpload}
        />
        <Button
          variant="small/regular"
          className="bg-primary-regular max-w-32 p-2 rounded-lg"
          onClick={handleClearFiles}
        >
          Clear files
        </Button>
      </div>
    </>
  )
}
