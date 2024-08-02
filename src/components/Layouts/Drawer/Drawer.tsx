'use client'

import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

import { cn } from '../../../utils/cn'

const DrawerRoot = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
DrawerRoot.displayName = 'DrawerRoot'

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black/80', className)}
    {...props}
  />
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        'fixed inset-x-0 z-50 bottom-0 flex h-auto flex-col rounded-t-[10px] border bg-neutral-white',
        className
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-complementary-highlight" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
))
DrawerContent.displayName = 'DrawerContent'

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)}
    {...props}
  />
)
DrawerHeader.displayName = 'DrawerHeader'

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('mt-auto flex flex-col gap-2 p-4', className)}
    {...props}
  />
)
DrawerFooter.displayName = 'DrawerFooter'

export type DrawerProps = React.ComponentProps<typeof DrawerRoot> & {
  children: React.ReactNode
  trigger: React.ReactNode
}

const Drawer = ({ children, trigger, ...props }: DrawerProps) => {
  return (
    <DrawerRoot {...props}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>{children}</DrawerContent>
    </DrawerRoot>
  )
}

export {
  Drawer,
  DrawerRoot,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
}
