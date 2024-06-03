import { InputText, InputTextProps } from '..'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
        import { InputText } from '@coqueirodigital/react-components'

        <InputText label="Hello World" name="input-name" />
      `}
    </Copy>
  )
}

export const DefaultComponent = ({
  label,
  name,
  icon,
  className,
  error,
  auxiliary,
  ...props
}: InputTextProps) => {
  return (
    <InputText
      label={label}
      name={name}
      icon={icon}
      className={className}
      error={error}
      auxiliary={auxiliary}
      {...props}
    />
  )
}
