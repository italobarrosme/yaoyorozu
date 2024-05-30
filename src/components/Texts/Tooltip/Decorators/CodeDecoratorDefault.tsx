import { useRef } from 'react'
import { Tooltip, TooltipProps } from '..'
import { Text } from '../../Text'
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
          import { Tooltip, TooltipProps } from '@coqueirodigital/react-components'

          <Tooltip content="Hover me" side="top" >
            Hello world
          </Tooltip>
        `}
      </pre>
    </div>
  )
}

export const DefaultComponent = ({
  children,
  content,
  side,
  trigger,
  ...props
}: TooltipProps) => {
  return (
    <Tooltip content={content} side={side} trigger={trigger} {...props}>
      {children}
    </Tooltip>
  )
}
