import { Chip, ChipProps } from '../'

export const DefaultComponent = ({
  value,
  onRemove,
  variant = 'medium/regular',
  removable = true,
  ...props
}: ChipProps) => {
  return (
    <Chip
      value={value}
      onRemove={onRemove}
      variant={variant}
      removable={removable}
      {...props}
    />
  )
}

export const NotRemovableComponent = ({
  value,
  variant = 'medium/regular',
  ...props
}: ChipProps) => {
  return <Chip value={value} variant={variant} removable={false} {...props} />
}
