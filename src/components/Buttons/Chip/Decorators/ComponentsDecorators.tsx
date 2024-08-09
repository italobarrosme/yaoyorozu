import { Chip, ChipProps } from '../'

export const DefaultComponent = ({
  value,
  onRemove,
  variant = 'medium/regular',
  ...props
}: ChipProps) => {
  return <Chip value={value} onRemove={onRemove} variant={variant} {...props} />
}

export const NotRemovableComponent = ({
  value,
  variant = 'medium/regular',
  ...props
}: ChipProps) => {
  return <Chip value={value} variant={variant} {...props} />
}
