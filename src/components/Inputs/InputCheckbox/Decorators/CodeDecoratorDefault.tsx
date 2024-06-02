import { useRef } from 'react'
import { InputCheckbox, InputCheckboxProps } from '..'
import { Tooltip } from '../../../Texts/Tooltip'
import { Text } from '../../../Texts/Text'
import { Button } from '../../../Buttons/Button'

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
      <Button
        variant="small/ghost"
        onClick={handleCopy}
        className="absolute top-4 right-10"
      >
        <Tooltip trigger="click" content="Copy code" side="top">
          <Text variant="sm/semibold" className="text-primary-dark">
            Copy
          </Text>
        </Tooltip>
      </Button>
      <pre
        ref={codeRef}
        className="bg-secondary-regular font-thin text-neutral-white text-xs py-16"
      >
        {`
          import { InputCheckbox } from "./components/Inputs/InputCheckbox"

          <InputCheckbox 
            name="checkbox" 
            label="I agree to the terms and conditions" 
            onCheckedChange={handleChange} 
          />
        `}
      </pre>
    </div>
  )
}

export const DefaultComponent = ({
  label,
  name,
  className,
  error,
  ...props
}: InputCheckboxProps) => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center p-4">
        <InputCheckbox
          name={name}
          label={label}
          className={className}
          error={error}
          {...props}
        />
      </div>
    </>
  )
}
