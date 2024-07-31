import { InputOTP } from '../InputOTP'

export const DefaultComponent = ({ maxLength, onChange }) => {
  return <InputOTP maxLength={maxLength} onChange={onChange} />
}

export const BoxInputOTPComponent = ({ maxLength, onChange }) => {
  return <InputOTP maxLength={maxLength} variant="box" onChange={onChange} />
}
