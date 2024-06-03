import { Text, TextProps } from '..'
import { Copy } from '../../Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
        import { Text, TextProps } from '@coqueirodigital/react-components'

        <Text variant="md/normal" className="text-secondary-regular">
          Hello, world!
        </Text>
      `}
    </Copy>
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
