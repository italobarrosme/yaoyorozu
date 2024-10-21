import { useRef } from 'react'
import { InputFile, InputFileProps, InputFileRef } from '..'
import { Copy } from '../../../Texts/Copy'
import { Button } from '../../../Buttons/Button'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
          import { InputFile, InputFileRef } from '@developerskyi/react-components'

          const inputImageRef = useRef<InputFileRef>(null)

          const handleClearFiles = () => {
            if (inputImageRef.current) {
              inputImageRef.current.clearFiles()
            }
          }

          return (
            <>
              <div className="flex flex-col gap-4 items-center p-4">
                <InputFile
                  ref={inputImageRef}
                  sizePreview="md"
                  textIndicator="Drop your image here"
                  onUpload={(files) => console.log(files)}
                />
                <Button
                  variant="small/regular"
                  className="bg-primary-regular max-w-32 p-2 rounded-lg h-10"
                  onClick={handleClearFiles}
                >
                  Clear files
                </Button>
              </div>
            </>
        `}
    </Copy>
  )
}

export const DefaultComponent = ({
  acceptOptions,
  textIndicator,
  sizePreview,
  onUpload,
}: InputFileProps) => {
  const inputImageRef = useRef<InputFileRef>(null)

  const handleClearFiles = () => {
    if (inputImageRef.current) {
      inputImageRef.current.clearFiles()
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4 items-center p-4">
        <InputFile
          ref={inputImageRef}
          acceptOptions={acceptOptions}
          sizePreview={sizePreview}
          textIndicator={textIndicator}
          onUpload={onUpload}
        />
        <Button
          variant="small/regular"
          className="bg-primary-regular max-w-32 p-2 rounded-lg h-10"
          onClick={handleClearFiles}
        >
          Clear files
        </Button>
      </div>
    </>
  )
}
