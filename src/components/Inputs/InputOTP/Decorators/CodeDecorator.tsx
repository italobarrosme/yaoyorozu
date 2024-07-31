import { Copy } from '../../../Texts/Copy'

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

export const BoxInputOTPCode = () => {
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
