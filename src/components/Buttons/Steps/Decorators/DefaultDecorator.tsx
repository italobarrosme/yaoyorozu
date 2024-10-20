import { useState } from 'react'
import { Copy } from '../../../Texts/Copy'
import { Steps, StepsProps } from '../Steps'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import { Steps } from '@developerskyi/react-components'
        import { Icon } from '@iconify/react'

        
        const steps = [
          {
            id: '1',
            title: 'Product',
            description: 'Choose your product',
            icon: <Icon className='rounded-full bg-transparent' icon="fluent-mdl2:product" width={18} />,
          },
          {
            id: '2',
            title: 'Billing',
            description: 'Enter billing information',
            icon: <Icon className='rounded-full bg-transparent' icon="healthicons:coins-outline" width={18} />,

          },
          {
            id: '3',
            title: 'Delivery',
            description: 'Choose delivery options and confirm address',
            icon: <Icon className='rounded-full bg-transparent' icon="carbon:delivery" width={18} />,
          },
        ]

        const [currentStepValue, setCurrentStepValue] = useState(currentStep)

        const handleStepClick = (index: number) => {
          setCurrentStepValue(index)
        }

        return (
          <Steps
            steps={steps}
            currentStep={currentStepValue}
            onStepClick={handleStepClick}
            onCompleted={() => console.log('Completed')}
          />
        )

      `}
    </Copy>
  )
}

export const DefaultComponent = ({
  steps,
  currentStep,
  onStepClick,
  onStepHover,
  onStepLeave,
  onCompleted,
  layout = 'horizontal',
  size = 'sm',
}: StepsProps) => {
  const [currentStepValue, setCurrentStepValue] = useState(currentStep)

  const handleStepClick = (index: number) => {
    setCurrentStepValue(index)
    onStepClick?.(index)
  }

  return (
    <Steps
      steps={steps}
      currentStep={currentStepValue}
      onStepClick={handleStepClick}
      onStepHover={onStepHover}
      onStepLeave={onStepLeave}
      onCompleted={onCompleted}
      layout={layout}
      size={size}
    />
  )
}
