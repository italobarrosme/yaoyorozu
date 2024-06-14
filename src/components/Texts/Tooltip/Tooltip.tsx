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
import { motion } from 'framer-motion'
import { cn } from '../../../utils/cn'
import { Text } from '../Text'

const TooltipProvider = TooltipPrimitive.Provider

const TooltipBase = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = forwardRef<
  ElementRef<typeof TooltipPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ ease: 'easeOut', duration: 3 }}
  >
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
      <TooltipPrimitive.Arrow className="border-primary-regular" />
    </TooltipPrimitive.Content>
  </motion.div>
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
      }, 9000)
    }
  }, [open, trigger])

  return (
    <TooltipProvider>
      <TooltipBase open={open} onOpenChange={handleOpenChange} {...props}>
        <TooltipTrigger asChild>
          <button
            className="w-fit cursor-pointer"
            onClick={handleClick}
            tabIndex={trigger === 'click' ? 0 : undefined}
          >
            {children}
          </button>
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
