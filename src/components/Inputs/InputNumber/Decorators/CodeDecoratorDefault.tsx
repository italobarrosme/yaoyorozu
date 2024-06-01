import { useRef } from 'react'
import { InputNumber, InputNumberProps } from '..'
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
          import { InputNumber } from '@coqueirodigital/react-components'

          <InputNumber label="Enter a number" name="number-input" onChangeValue={handleValue} />
        
        `}
      </pre>
    </div>
  )
}

export const DefaultComponent = ({
  label,
  name,
  icon,
  className,
  error,
  auxiliary,
  currency,
  ...props
}: InputNumberProps) => {
  return (
    <InputNumber
      label={label}
      name={name}
      icon={icon}
      className={className}
      error={error}
      auxiliary={auxiliary}
      currency={currency}
      {...props}
    />
  )
}
