import { InputArea, InputAreaProps } from '..'

export const DefaultComponent = ({
  label,
  dark,
  error,
  auxiliary,
  icon,
  className,
  name,
  ...props
}: InputAreaProps) => {
  return (
    <InputArea
      dark={dark}
      error={error}
      auxiliary={auxiliary}
      label={label}
      icon={icon}
      className={className}
      name={name}
      {...props}
    />
  )
}
