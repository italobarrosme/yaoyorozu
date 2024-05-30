import { useRef } from 'react'
import { Button, ButtonProps } from '..'
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
          import { Button } from '@coqueirodigital/react-components'

          <Button variant='medium/regular' onClick={() => console.log('click')}>
            Hellow World
          </Button>
        
        `}
      </pre>
    </div>
  )
}

export const DefaultComponent = ({
  children,
  className,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <Button variant={variant} className={className} {...props}>
      {children}
    </Button>
  )
}
