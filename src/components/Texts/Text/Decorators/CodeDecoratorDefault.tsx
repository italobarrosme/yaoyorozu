import { useRef } from 'react'
import { Tooltip } from '../../Tooltip'
import { Text, TextProps } from '..'
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
    <div className="relative bg-secondary-regular w-full">
      <Button
        variant="small/ghost"
        onClick={handleCopy}
        className="absolute top-4 right-10 w- "
      >
        <Tooltip trigger="click" content="Copy code" side="top">
          <Text variant="sm/semibold" className="text-primary-dark">
            Copy
          </Text>
        </Tooltip>
      </Button>
      <pre ref={codeRef} className="font-thin text-neutral-white text-xs py-16">
        {`
          import { Text, TextProps } from '@coqueirodigital/react-components'

          <Text variant="md/normal" className="text-secondary-regular">
            Hello, world!
          </Text>
        `}
      </pre>
    </div>
  )
}

export const DefaultComponent = ({
  children,
  variant = 'md/normal',
  className,
}: TextProps) => {
  return (
    <Text variant={variant} className={className}>
      {children}
    </Text>
  )
}
