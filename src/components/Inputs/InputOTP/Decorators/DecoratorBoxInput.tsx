import { Copy } from '../../../Texts/Copy'
import { InputOTP, InputOTPProps } from '../InputOTP'

export const BoxInputCode = () => {
  return (
    <Copy>
      {`
        import { 
          InputOTP
        } from '@developerskyi/react-components'

        const handleChange = (value) => {
          console.log(value)
        }
        
        <InputOTP maxLength={4} variant="box" onChange={handleChange} />
      `}
    </Copy>
  )
}

export const BoxInputComponent = ({
  maxLength,
  onChange,
}: Pick<InputOTPProps, 'maxLength' | 'onChange'>) => {
  return <InputOTP maxLength={maxLength} variant="box" onChange={onChange} />
}
