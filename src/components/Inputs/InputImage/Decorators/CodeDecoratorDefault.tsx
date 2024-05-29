import { useRef } from 'react'
import { InputImage, InputImageProps, InputImageRef } from '..'
import { Tooltip } from '../../../Texts/Tooltip'
import { Text } from '../../../Texts/Text'

export const CodeDecoratorDefault = () => {
  const codeRef = useRef<HTMLPreElement>(null)

  const handleCopy = () => {
    if (codeRef.current) {
      const code = codeRef.current.innerText
      navigator.clipboard.writeText(code).then(() => {
        console.log('Code copied to clipboard')
      })
    }
  }

  return (
    <div className="relative">
      <button onClick={handleCopy} className="absolute top-4 right-10 ">
        <Tooltip trigger="click" content="Copy code" side="top">
          <Text variant="sm/semibold" className="text-primary-dark">
            Copy
          </Text>
        </Tooltip>
      </button>
      <pre
        ref={codeRef}
        className="bg-secondary-regular font-thin text-neutral-white text-xs py-16"
      >
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
      </pre>
    </div>
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
        <button
          className="bg-primary-medium max-w-32 p-2 rounded-lg"
          onClick={handleClearFiles}
        >
          Clear files
        </button>
      </div>
    </>
  )
}
