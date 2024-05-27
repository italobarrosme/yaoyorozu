import { useRef } from 'react'
import { Tooltip, TooltipProps } from '..'
import { Text } from '../../Text'

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
    <div className="relative bg-secondary-regular">
      <button onClick={handleCopy} className="absolute top-2 right-10 ">
        <Tooltip trigger="click" content="Copy code" side="top">
          <Text variant="sm/semibold" className="text-primary-dark">
            Copy
          </Text>
        </Tooltip>
      </button>
      <pre ref={codeRef} className="font-thin text-primary-dark text-xs p-4">
        {`
          export const DefaultComponent = ({ children, content, side = 'top', ...props }: TooltipProps) => {
            return (
              <Tooltip content={content} side={side} {...props}>
                {children}
              </Tooltip>
            )
          }
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
