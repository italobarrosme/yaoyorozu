import { Copy } from '../../../Texts/Copy'
import { Chip, type ChipProps } from '../Chip'

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

export const DefaultComponent = ({
  value,
  onRemove,
  variant = 'medium/regular',
  ...props
}: ChipProps) => {
  return <Chip value={value} onRemove={onRemove} variant={variant} {...props} />
}
