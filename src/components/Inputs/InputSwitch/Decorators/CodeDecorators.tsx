import { InputSwitchProps, InputSwitch } from '..'
import { Copy } from '../../../Texts/Copy'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import {
          InputSwitch
        } from '@developerskyi/react-components'

        const handleChange = (value) => {
          console.log(value)
        }

        <InputSwitch id="switch" label="Input Switch" onCheckedChange={handleChange} />
      `}
    </Copy>
  )
}

export const DefaultComponent = ({
  label,
  id,
  onCheckedChange,
  dark,
  ...props
}: InputSwitchProps) => {
  return (
    <InputSwitch
      label={label}
      dark={dark}
      id={id}
      onCheckedChange={onCheckedChange}
      {...props}
    />
  )
}
