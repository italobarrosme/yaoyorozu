import { Copy } from '../../../Texts/Copy'
import { InputOTP, InputOTPProps } from '../InputOTP'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import { 
          InputOTP
        } from '@developerskyi/react-components'

        const handleChange = (value) => {
          console.log(value)
        }
        
        <InputOTP maxLength={4} onChange={handleChange} />
      `}
    </Copy>
  )
}

export const DefaultComponent = ({
  maxLength,
  onChange,
}: Pick<InputOTPProps, 'maxLength' | 'onChange'>) => {
  return <InputOTP maxLength={maxLength} onChange={onChange} />
}
