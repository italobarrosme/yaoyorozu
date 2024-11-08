import { useState } from 'react'
import { InputSlider, InputSliderProps } from '..'
import { Copy } from '../../../Texts/Copy'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import { InputSlider } from '@developerskyi/react-components'
        
        const handlerValue = (value: number[]) => {
          console.log(value)
        }

        <InputSlider label="Enter a number" name="slider-input" onChangeValue={handlerValue} />
        `}
    </Copy>
  )
}

export const DefaultComponent = ({
  label,
  name,
  className,
  isShowValue,
  defaultValue,
  max = 100,
  step = 1,
  ...props
}: InputSliderProps) => {
  const [value, setValue] = useState<number[]>(defaultValue)

  const handlerValue = (value: number[]) => {
    setValue(value)
  }

  return (
    <InputSlider
      label={label}
      name={name}
      className={className}
      isShowValue={isShowValue}
      defaultValue={value}
      max={max}
      step={step}
      onChangeValue={handlerValue}
      {...props}
    />
  )
}
