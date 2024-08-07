'use client'

import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { cn } from '../../../utils/cn'
import { Text } from '../Text'

const TooltipProvider = TooltipPrimitive.Provider

const TooltipBase = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <div>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 overflow-hidden rounded-md bg-primary-regular px-3 py-1.5 text-sm text-neutral-white shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className
      )}
      {...props}
    >
      {props.children}
      <TooltipPrimitive.Arrow
        width={12}
        height={6}
        className="fill-primary-regular"
      />
    </TooltipPrimitive.Content>
  </div>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { TooltipBase, TooltipTrigger, TooltipContent, TooltipProvider }

export type TooltipProps = ComponentProps<typeof TooltipBase> & {
  children: ReactNode
  content: ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  trigger?: 'hover' | 'click'
}

export const Tooltip = ({
  children,
  content,
  side = 'top',
  trigger = 'hover',
  ...props
}: TooltipProps) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    if (trigger === 'click') {
      setOpen((prev) => !prev)
    }
  }

  const handleOpenChange = (isOpen: boolean) => {
    if (trigger === 'hover') {
      setOpen(isOpen)
    }
  }

  useEffect(() => {
    if (trigger === 'click') {
      setTimeout(() => {
        setOpen(false)
      }, 30000)
    }
  }, [open, trigger])

  return (
    <TooltipProvider>
      <TooltipBase open={open} onOpenChange={handleOpenChange} {...props}>
        <TooltipTrigger asChild>
          <span
            className="w-fit cursor-pointer"
            onClick={handleClick}
            tabIndex={trigger === 'click' ? 0 : undefined}
          >
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent side={side}>
          <Text variant="sm/semibold" tag="p">
            {content}
          </Text>
        </TooltipContent>
      </TooltipBase>
    </TooltipProvider>
  )
}
