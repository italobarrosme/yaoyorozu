import { Chip, ChipProps } from '..'
import { Copy } from '../../../Texts/Copy'

export const NotRemovableCode = () => {
  return (
    <Copy>
      {`
        import { 
          Chip
        } from '@developerskyi/react-components'

        <Chip value="Chip" />
      `}
    </Copy>
  )
}

export const NotRemovableComponent = ({
  value,
  variant = 'medium/regular',
  ...props
}: ChipProps) => {
  return <Chip value={value} variant={variant} {...props} />
}
