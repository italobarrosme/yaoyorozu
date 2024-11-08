import { InputDatePicker, InputDatePickerProps } from '..'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`  
          const handleChange = (value) => {
            console.log(date)
          }
            
          <InputDatePicker label="calendar" emitValue={handleChange} />
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
  dark,
  isRangeDate,
  ...props
}: InputDatePickerProps) => {
  return (
    <>
      <InputDatePicker
        label={isRangeDate ? 'Check-in and check-out' : label}
        icon={icon}
        className={className}
        error={error}
        auxiliary={auxiliary}
        dark={dark}
        isRangeDate={isRangeDate}
        {...props}
      />
    </>
  )
}
