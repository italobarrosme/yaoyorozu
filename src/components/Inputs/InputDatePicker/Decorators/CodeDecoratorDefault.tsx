import { InputDatePicker, InputDatePickerProps } from '..'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
          <InputDatePicker 
            name="date" 
            label="Date" 
            onChange={handleChange} 
          />
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
  rangeDate,
  ...props
}: InputDatePickerProps) => {
  return (
    <>
      <div className="relative">
        <InputDatePicker
          label={label}
          icon={icon}
          className={className}
          error={error}
          auxiliary={auxiliary}
          dark={dark}
          rangeDate={rangeDate}
          {...props}
        />
      </div>
    </>
  )
}
