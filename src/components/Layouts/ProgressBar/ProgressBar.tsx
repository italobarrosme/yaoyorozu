import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../../../utils/cn'

const progressBarStyles = cva([`h-2`, `bg-primary-regular`, `w-full`], {
  variants: {
    color: {
      primary: 'bg-primary-regular',
      secondary: 'bg-secondary-regular',
      success: 'bg-feedback-success',
      warning: 'bg-feedback-warning',
      error: 'bg-feedback-error',
      neutral: 'bg-neutral-light',
    },
  },
})

type ProgressBarStylesProps = VariantProps<typeof progressBarStyles>

export type ProgressBarVariant = {
  variant: `${NonNullable<ProgressBarStylesProps['color']>}`
}

export type ProgressBarProps = {
  progress: number
  displayPercentage: boolean
  className?: string
} & ProgressBarVariant

export const ProgressBar = ({
  progress,
  displayPercentage,
  variant,
  className,
}: ProgressBarProps) => {
  return (
    <div className="flex w-full items-center gap-4">
      <div className={'w-full bg-neutral-lightest h-2 relative rounded-md'}>
        <div
          className={cn(
            progressBarStyles({ color: variant }),
            'rounded-md absolute left-0 overflow-hidden',
            className
          )}
          style={{ width: `calc(${progress}%)` }}
        ></div>
      </div>
      {displayPercentage && <span aria-label="percentage">{progress}%</span>}
    </div>
  )
}
