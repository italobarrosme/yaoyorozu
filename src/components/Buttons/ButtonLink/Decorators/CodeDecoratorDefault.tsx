import { ButtonLink, type ButtonLinkProps } from '../ButtonLink'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
      import { ButtonLink } from '@developerskyi/react-components'

      <ButtonLink variant="medium/regular" >
        Hello world Link
      </ButtonLink>
    `}
    </Copy>
  )
}

export const DefaultComponent = ({
  children,
  className,
  variant,
  ...props
}: ButtonLinkProps) => {
  return (
    <ButtonLink variant={variant} className={className} {...props}>
      {children}
    </ButtonLink>
  )
}
