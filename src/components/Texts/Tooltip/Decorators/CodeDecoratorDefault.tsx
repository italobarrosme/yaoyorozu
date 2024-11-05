import { Tooltip, TooltipProps } from '..'
import { Copy } from '../../Copy'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import { Tooltip, TooltipProps } from '@developerskyi/react-components'

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

export const ClickCode = () => {
  return (
    <Copy>
      {`
        import { Tooltip, TooltipProps } from '@developerskyi/react-components'

        <Tooltip content="Hello world" trigger="click" side="top" >
          <Button variant="fit/outline">Show me</Button>,
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
