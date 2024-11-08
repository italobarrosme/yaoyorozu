import { InputNumber, InputNumberProps } from '..'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
          import { InputNumber } from '@developerskyi/react-components'

          const handleValue = (value: number) => {
            console.log(value)
          }


          <InputNumber label="Enter a number" name="number-input" onChangeValue={handleValue} />
        `}
    </Copy>
  )
}

export const DefaultComponent = ({
  label,
  icon,
  className,
  error,
  auxiliary,
  currency,
  dark,
  ...props
}: InputNumberProps) => {
  const handlerValue = (value: number) => {
    console.log(value, 'value number')
  }

  return (
    <InputNumber
      label={label}
      icon={icon}
      className={className}
      error={error}
      auxiliary={auxiliary}
      currency={currency}
      dark={dark}
      onChangeValue={handlerValue}
      {...props}
    />
  )
}
