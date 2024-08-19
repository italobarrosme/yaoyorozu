import { InputSwitchProps, InputSwitch } from '..'

export const DefaultComponent = ({
  label,
  id,
  onCheckedChange,
  ...props
}: InputSwitchProps) => {
  return (
    <InputSwitch
      label={label}
      id={id}
      onCheckedChange={onCheckedChange}
      {...props}
    />
  )
}
