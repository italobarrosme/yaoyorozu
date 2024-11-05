import { Copy } from '../../../Texts/Copy'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import { ProgressBar, Text } from '@developerskyi/react-components'

        <ProgressBar
          displayPercentage={displayPercentage}
          progress={progress}
          variant={variant}
        />
        <Text variant="md/semibold" className="text-primary-regular">
          Frontend progress skills
        </Text>
      `}
    </Copy>
  )
}

import { ProgressBar, ProgressBarProps } from '../'
import { Text } from '../../../Texts/Text'

export const DefaultComponent = ({
  displayPercentage,
  progress,
  variant,
}: ProgressBarProps) => {
  return (
    <>
      <ProgressBar
        displayPercentage={displayPercentage}
        progress={progress}
        variant={variant}
      />
      <Text variant="md/semibold" className="text-primary-regular">
        Frontend progress skills
      </Text>
    </>
  )
}
