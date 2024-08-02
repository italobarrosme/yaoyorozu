import { Copy } from '../../../Texts/Copy'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import { 
          InputArea
        } from '@developerskyi/react-components'

        const handleChange = (value) => {
          console.log(value)
        }
        
        <InputArea label="Input Area" onChange={handleChange} />
      `}
    </Copy>
  )
}
