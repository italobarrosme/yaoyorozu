'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '../../../utils/cn'

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-lightest cursor-pointer">
      <SliderPrimitive.Range className="absolute h-full bg-primary-regular" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary-regular bg-primary-regular ring-offset-complementary-highlight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }

export type InputSliderProps = {
  label?: string
  name: string
  max?: number
  step?: number
  isShowValue?: boolean
  defaultValue?: number[]
  onChangeValue: (value: number[]) => void
  percentage?: boolean
  dark?: boolean
} & React.ComponentProps<typeof Slider>

export const InputSlider = ({
  label,
  name,
  defaultValue = [0],
  isShowValue,
  onChangeValue,
  max = 100,
  step = 1,
  dark = false,
  percentage = false,
  ...props
}: InputSliderProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        {label && (
          <label
            htmlFor={name}
            className={cn('font-semibold text-inherit', {
              'text-neutral-white': dark,
            })}
          >
            {label}
          </label>
        )}
        {isShowValue && (
          <span
            className={cn(
              'text-lg font-bold text-inherit mb-1 w-full flex justify-end items-center',
              {
                'text-neutral-white': dark,
              }
            )}
          >
            {defaultValue} {percentage ? '%' : ''}
          </span>
        )}
      </div>
      <Slider
        defaultValue={defaultValue}
        max={max}
        step={step}
        onValueChange={(value) => onChangeValue(value)}
        {...props}
      />
    </div>
  )
}
