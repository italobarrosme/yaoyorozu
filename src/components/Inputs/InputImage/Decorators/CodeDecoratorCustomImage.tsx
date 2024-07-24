import { useRef } from 'react'
import { Copy } from '../../../Texts/Copy'
import { InputImage, InputImageProps, InputImageRef } from '..'

export const CodeDecoratorCustomImage = () => {
  return (
    <Copy>
      {`
          import { InputImage, InputImageProps, InputImageRef } from '@developerskyi/react-components'

          
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
              acceptOptions={['image/jpeg']}
              textIndicator='Drag n drop some files here, or click to select files'
              onUpload={onUpload}
              children={({src, alt, className }) => (
                <img src={src} alt={alt} className={className}  />
              )}
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

export const CustomImageComponent = ({
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
          textIndicator={textIndicator}
          onUpload={onUpload}
          sizePreview={sizePreview}
          children={({ src, alt, className }) => (
            <img src={src} alt={alt} className={className} />
          )}
        />
        <button
          className="bg-primary-regular max-w-32 p-2 rounded-lg"
          onClick={handleClearFiles}
        >
          Clear files
        </button>
      </div>
    </>
  )
}
