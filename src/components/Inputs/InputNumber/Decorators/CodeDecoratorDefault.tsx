import { InputNumber, InputNumberProps } from '..'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
          import { InputNumber } from '@coqueirodigital/react-components'

          <InputNumber label="Enter a number" name="number-input" onChangeValue={handleValue} />
        
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
  currency,
  ...props
}: InputNumberProps) => {
  return (
    <InputNumber
      label={label}
      name={name}
      icon={icon}
      className={className}
      error={error}
      auxiliary={auxiliary}
      currency={currency}
      {...props}
    />
  )
}
