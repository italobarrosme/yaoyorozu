import { ProgressBar, ProgressBarProps } from '../'

export const DefaultComponent = ({
  displayPercentage,
  progress,
  variant,
}: ProgressBarProps) => {
  return (
    <ProgressBar
      displayPercentage={displayPercentage}
      progress={progress}
      variant={variant}
    />
  )
}
