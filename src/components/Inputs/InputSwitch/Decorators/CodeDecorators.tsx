import { Copy } from '../../../Texts/Copy'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import {
          InputSwitch
        } from '@developerskyi/react-components'

        const handleChange = (value) => {
          console.log(value)
        }

        <InputSwitch id="switch" label="Input Switch" onCheckedChange={handleChange} />
      `}
    </Copy>
  )
}
