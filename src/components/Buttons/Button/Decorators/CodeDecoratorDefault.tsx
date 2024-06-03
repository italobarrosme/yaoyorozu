import { Button, ButtonProps } from '..'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
      import { Button } from '@coqueirodigital/react-components'

      <Button variant='medium/regular' onClick={() => console.log('click')}>
        Hellow World
      </Button>
    `}
    </Copy>
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
