import { useRef } from 'react'
import { InputImage, InputImageProps, InputImageRef } from '..'
import { Tooltip } from '../../../Texts/Tooltip'
import { Text } from '../../../Texts/Text'

export const CodeDecorator = () => {
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
      <button onClick={handleCopy} className="absolute top-2 right-10 ">
        <Tooltip trigger="click" content="Copy code" side="top">
          <Text variant="sm/semibold" className="text-primary-dark">
            Copy
          </Text>
        </Tooltip>
      </button>
      <pre
        ref={codeRef}
        className="bg-secondary-regular font-thin text-primary-dark text-xs p-4"
      >
        {`
          export const DefaultComponent = ({
            accept,
            textIndicator,
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
                    accept={accept}
                    textIndicator={textIndicator}
                    onUpload={onUpload}
                  />
                  <button
                    className="bg-primary-medium max-w-32 p-4 rounded-lg"
                    onClick={handleClearFiles}
                  >
                    Clear files
                  </button>
                </div>
              </>
            )
          }
        `}
      </pre>
    </div>
  )
}

export const DefaultComponent = ({
  accept,
  textIndicator,
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
          accept={accept}
          textIndicator={textIndicator}
          onUpload={onUpload}
        />
        <button
          className="bg-primary-medium max-w-32 p-4 rounded-lg"
          onClick={handleClearFiles}
        >
          Clear files
        </button>
      </div>
    </>
  )
}
