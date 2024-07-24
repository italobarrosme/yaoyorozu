import { Tooltip, TooltipProps } from '..'
import { Copy } from '../../Copy'

export const CodeDecoratorClick = () => {
  return (
    <Copy>
      {`
        import { Tooltip, TooltipProps } from '@developerskyi/react-components'

        <Tooltip content="Click me" trigger="click" side="top" >
          Hello world
        </Tooltip>
      `}
    </Copy>
  )
}

export const ClickComponent = ({
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
