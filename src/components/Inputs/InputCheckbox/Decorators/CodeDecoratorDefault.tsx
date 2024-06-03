import { InputCheckbox, InputCheckboxProps } from '..'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
          import { InputCheckbox } from "./components/Inputs/InputCheckbox"

          <InputCheckbox 
            name="checkbox" 
            label="I agree to the terms and conditions" 
            onCheckedChange={handleChange} 
          />
        `}
    </Copy>
  )
}

export const DefaultComponent = ({
  label,
  className,
  error,
  ...props
}: InputCheckboxProps) => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center p-4">
        <InputCheckbox
          name={props.name}
          label={label}
          className={className}
          error={error}
          {...props}
        />
      </div>
    </>
  )
}
