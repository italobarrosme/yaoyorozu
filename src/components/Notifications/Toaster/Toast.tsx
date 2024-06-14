'use client'

import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { Icon } from '@iconify/react'
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactElement,
  useId,
} from 'react'
import { cn } from '../../../utils/cn'

const ToastProvider = ToastPrimitives.Provider

const viewportStyles = cva(
  [
    'fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:flex-col md:max-w-lg',
  ],
  {
    variants: {
      xAxis: {
        right: 'right-4',
        left: 'left-4',
        center: 'left-1/2 -translate-x-1/2 transform',
      },
      yAxis: {
        top: 'top-4',
        bottom: 'bottom-4',
      },
    },
    defaultVariants: {
      xAxis: 'center',
      yAxis: 'bottom',
    },
  }
)

type ViewPortStylesProps = VariantProps<typeof viewportStyles>

export interface ViewPortVariant
  extends Omit<ViewPortStylesProps, 'yAxis' | 'xAxis'> {
  position: `${NonNullable<ViewPortStylesProps['yAxis']>}/${NonNullable<
    ViewPortStylesProps['xAxis']
  >}`
}

const ToastViewport = forwardRef<
  ElementRef<typeof ToastPrimitives.Viewport>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> & ViewPortVariant
>(({ className, position, ...props }, ref) => {
  const [yAxis, xAxis] = position.split('/') as [
    ViewPortStylesProps['yAxis'],
    ViewPortStylesProps['xAxis'],
  ]

  return (
    <ToastPrimitives.Viewport
      ref={ref}
      className={cn(viewportStyles({ yAxis, xAxis }), 'list-toast', className)}
      {...props}
    />
  )
})
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  'border border-neutral-dark p-4 w-full shadow-lg relative group pointer-events-auto relative w-full overflow-hidden rounded-md',
  {
    variants: {
      variant: {
        default: 'bg-neutral-lightest',
        success: 'bg-feedback-success',
        warning: 'bg-feedback-warning',
        info: 'bg-feedback-info',
        error: 'bg-feedback-error',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const ToastBase = forwardRef<
  ElementRef<typeof ToastPrimitives.Root>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  const toastId = useId()

  return (
    <ToastPrimitives.Root
      ref={ref}
      id={toastId}
      className={cn(
        toastVariants({ variant }),
        'duration-500 data-[state=open]:animate-slide-in-from-left data-[state=closed]:animate-slide-out data-[swipe=end]:animate-slide-out',
        className
      )}
      {...props}
    />
  )
})
ToastBase.displayName = ToastPrimitives.Root.displayName

const ToastAction = forwardRef<
  ElementRef<typeof ToastPrimitives.Action>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      ' focus:ring-primary-light shrink-0 rounded-md bg-transparent text-sm font-medium transition-colors hover:text-opacity-70 focus:outline-none focus:ring-1 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = forwardRef<
  ElementRef<typeof ToastPrimitives.Close>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'focus:ring-primary-light absolute right-2 top-4 -translate-y-1/2 rounded-md p-1 opacity-0 transition-all duration-200 hover:text-opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 ',
      className
    )}
    toast-close=""
    {...props}
  >
    <Icon icon={'mdi:close'} className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = forwardRef<
  ElementRef<typeof ToastPrimitives.Title>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('text-sm font-bold', className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = forwardRef<
  ElementRef<typeof ToastPrimitives.Description>,
  ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = {
  title: string
  description: string
  action?: ToastActionElement
} & ComponentPropsWithoutRef<typeof ToastBase>

type ToastActionElement = ReactElement<typeof ToastAction>

const Toast = ({ title, description, action, ...props }: ToastProps) => {
  return (
    <ToastBase {...props} className="flex justify-between p-4 my-2">
      <div className="flex flex-col gap-2">
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
      </div>
      <div className="flex gap-2 items-end">{action}</div>
      <ToastClose />
    </ToastBase>
  )
}

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
