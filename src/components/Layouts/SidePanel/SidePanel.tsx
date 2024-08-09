'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { cn } from '../../../utils/cn'
import { Dialog, DialogPortal, DialogTrigger } from '../Dialog'
import { Icon } from '@iconify/react'

const DialogOverlaySidePanel = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    data-testid="overlay"
    className={cn(
      'fixed inset-0 z-50 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
))
DialogOverlaySidePanel.displayName = DialogPrimitive.Overlay.displayName

type DialogContentSidePanelProps = {
  orientation: 'left' | 'right'
}

const DialogContentSidePanel = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
    DialogContentSidePanelProps
>(({ className, children, orientation, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlaySidePanel />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed z-50 top-0 min-h-screen h-full bg-white overflow-y-auto flex flex-col justify-between w-full max-w-full md:max-w-[70%] gap-4 border p-6 shadow-lg duration-200  data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        orientation === 'left'
          ? 'left-0 data-[state=open]:animate-slide-in-from-left data-[state=closed]:animate-slide-out-from-left'
          : 'right-0 data-[state=open]:animate-slide-in-from-right data-[state=closed]:animate-slide-out-from-right',
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <Icon className="h-4 w-4" icon="tabler:x" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContentSidePanel.displayName = DialogPrimitive.Content.displayName

export type SidePanelProps = {
  children: React.ReactNode
  orientation: 'left' | 'right'
  trigger: React.ReactNode
  className?: string
}

export const SidePanel = ({
  orientation = 'right',
  children,
  trigger,
  ...props
}: SidePanelProps) => {
  return (
    <Dialog {...props}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContentSidePanel orientation={orientation}>
        {children}
      </DialogContentSidePanel>
    </Dialog>
  )
}

export { DialogOverlaySidePanel, DialogContentSidePanel }
