import { Copy } from '../../../Texts/Copy'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import { 
          InputArea
        } from '@developerskyi/react-components'

        const handleChange = (value) => {
          console.log(value)
        }
        
        <InputArea label="Comments" onChange={handleChange} />
      `}
    </Copy>
  )
}

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
