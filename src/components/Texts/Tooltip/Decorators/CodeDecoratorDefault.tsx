import { Tooltip, TooltipProps } from '..'
import { Copy } from '../../Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
        import { Tooltip, TooltipProps } from '@coqueirodigital/react-components'

        <Tooltip content="Hover me" side="top" >
          Hello world
        </Tooltip>
      `}
    </Copy>
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
