'use client'

import { useEffect } from 'react'
import { cn } from '../../../utils/cn'
import { Divider } from '../../Layouts/Divider'
import { Button } from '../Button'

export type Step = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

export type StepsProps = {
  steps: Step[]
  currentStep: number
  onStepClick: (index: number) => void
  onStepHover?: (index: number) => void
  onStepLeave?: () => void
  onCompleted?: () => void
  layout?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md'
}

export const Steps = ({
  steps,
  currentStep,
  onStepClick,
  onStepHover,
  onStepLeave,
  onCompleted,
  layout = 'horizontal',
  size = 'sm',
}: StepsProps) => {
  useEffect(() => {
    const isCompleted = currentStep === steps.length - 1

    if (isCompleted && onCompleted) {
      onCompleted()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep])

  return (
    <div
      className={cn(
        'w-full h-full flex  p-16',
        `${layout === 'horizontal' ? 'flex items-center' : 'flex-col items-center'}`
      )}
    >
      {steps.map((step, index) => (
        <>
          <Button
            variant="rounded/regular"
            key={step.id}
            onClick={() => onStepClick(index)}
            onMouseEnter={() => onStepHover(index)}
            onMouseLeave={onStepLeave}
            className={cn(
              'relative group',
              `${size === 'sm' ? 'w-8 h-8' : 'w-16 h-16'}`,
              `${currentStep === index || currentStep > index ? 'bg-primary-regular' : 'bg-neutral-lightest'}`
            )}
          >
            <div
              className={cn(
                'flex items-center hover:bg-transparent group-hover:bg-transparent transition-colors ease-in-out delay-150 rounded-full',
                `${currentStep === index || currentStep > index ? 'bg-primary-regular text-primary' : 'bg-neutral-lightest text-neutral-dark hover:text-primary-foreground'}`
              )}
            >
              <span
                className={cn(
                  'transition-colors ease-in-out delay-150 bg-transparent rounded-full',
                  `${size === 'sm' ? 'text-sm' : 'text-md'}`,
                  `${currentStep === index || currentStep > index ? 'text-primary group-hover:text-primary-foreground' : 'group-hover:text-primary-foreground'}`
                )}
              >
                {step.icon}
              </span>
            </div>
            <span
              className={cn(
                'absolute transition-colors ease-in-out delay-150',
                `${size === 'sm' && layout === 'horizontal' ? 'text-xs -top-6' : ''}`,
                `${size === 'md' && layout === 'horizontal' ? 'text-sm -top-10' : ''}`,
                `${size === 'sm' && layout === 'vertical' ? 'text-sm left-10' : ''}`,
                `${size === 'md' && layout === 'vertical' ? 'text-sm left-20' : ''}`,
                `${currentStep === index || currentStep > index ? 'text-primary-regular hover:text-primary-regular/90' : 'text-neutral-black group-hover:text-primary-regular/90'}`
              )}
            >
              <h3 className="max-w-32">{step.title}</h3>
            </span>
            <span
              className={cn(
                'absolute transition-colors ease-in-out delay-150 w-32 text-wrap',
                `${size === 'sm' && layout === 'horizontal' ? 'text-xs top-10' : ''}`,
                `${size === 'md' && layout === 'horizontal' ? 'text-sm top-20' : ''}`,
                `${size === 'sm' && layout === 'vertical' ? 'text-xs top-10 left-10' : ''}`,
                `${size === 'md' && layout === 'vertical' ? 'text-xs top-16 left-20' : ''}`,
                `${currentStep === index || currentStep > index ? 'text-primary-regular hover:text-primary-regular/90' : 'text-neutral-black group-hover:text-primary-regular/90'}`
              )}
            >
              <p
                className={cn(
                  'max-w-32 flex justify-center items-center',
                  `${layout === 'horizontal' ? 'text-xs' : 'text-xs text-left'}`
                )}
              >
                {step.description}
              </p>
            </span>
          </Button>
          {index < steps.length - 1 && (
            <Divider
              className={cn(
                `${layout === 'horizontal' ? 'h-1 w-56' : 'h-56 w-1'}`,
                `${currentStep === index + 1 || currentStep > index + 1 ? 'bg-primary-regular' : 'bg-neutral-lightest'}`
              )}
            />
          )}
        </>
      ))}
    </div>
  )
}
