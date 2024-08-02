import { Copy } from '../../../Texts/Copy'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import { 
          Chip
        } from '@developerskyi/react-components'

        const handleRemove = () => {
          console.log('remove')
        }
        
        <Chip value="Chip" onRemove={handleRemove} />
      `}
    </Copy>
  )
}

export const NotRemovableCode = () => {
  return (
    <Copy>
      {`
        import { 
          Chip
        } from '@developerskyi/react-components'

        <Chip value="Chip" removable={false} />
      `}
    </Copy>
  )
}
