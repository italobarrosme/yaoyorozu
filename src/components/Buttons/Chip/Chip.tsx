'use client'

import { useState } from 'react'
import { cn } from '../../../utils/cn'
import { Button, ButtonProps } from '../Button'
import { Icon } from '@iconify/react'

export type ChipProps = {
  value: string
  onRemove?: () => void
  isVisible?: boolean
} & ButtonProps

export const Chip = ({
  value,
  onRemove,
  variant = 'medium/regular',
  ...props
}: ChipProps) => {
  const [isVisible, setIsVisible] = useState(true)

  const handleRemoveClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    if (onRemove) {
      setIsVisible(false)
      onRemove()
    }
  }

  if (!isVisible) {
    return null
  }

  return (
    <Button
      variant={variant}
      {...props}
      className={cn(
        `flex items-center justify-between gap-2 px-4 py-2 rounded-full`,
        props.className
      )}
    >
      {value}

      {onRemove && (
        <Icon
          icon="lucide:circle-x"
          className="cursor-pointer hover:text-feedback-error"
          onClick={handleRemoveClick}
          aria-label="Remove Chip"
          role="button"
        />
      )}
    </Button>
  )
}
