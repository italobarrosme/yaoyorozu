import { InputSelect, InputSelectProps } from '..'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`  
          const handleChange = (value) => {
            console.log(date)
          }
            
          <InputSelect label="Choose a country" onValueChange={handleChange} />
        `}
    </Copy>
  )
}

export const DefaultComponent = ({
  label,
  options,
  disabled,
  hasError,
  errorMessage,
  accessoryText,
  onValueChange,
  isCheck,
  link,
  dark,
  ...props
}: InputSelectProps) => {
  return (
    <>
      <InputSelect
        label={label}
        options={options}
        disabled={disabled}
        hasError={hasError}
        errorMessage={errorMessage}
        accessoryText={accessoryText}
        isCheck={isCheck}
        link={link}
        dark={dark}
        onValueChange={onValueChange}
        className="text-xs text-neutral-dark"
        {...props}
      />
    </>
  )
}
