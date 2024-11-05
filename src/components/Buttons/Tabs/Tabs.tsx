'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '../../../utils/cn'
import { cva, VariantProps } from 'class-variance-authority'

const TabsBase = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-transparent text-inherit',
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsStyles = cva(
  [
    `inline-flex items-center justify-center whitespace-nowrap rounded-md border-primary-regular h-10 w-full
      text-sm font-medium ring-offset-primary-regular transition-all 
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
      disabled:pointer-events-none disabled:opacity-50 
      data-[state=active]:shadow-sm`,
  ],
  {
    variants: {
      typeStyle: {
        minimal:
          'data-[state=active]:border-b-2 rounded-none data-[state=active]:text-neutral-dark',
        default:
          'data-[state=active]:bg-primary-regular border-2 data-[state=active]:text-neutral-white',
      },
    },
  }
)

type TabsStylesProps = VariantProps<typeof TabsStyles>

export const TabsVariantStyle = TabsStyles

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & TabsStylesProps
>(({ className, typeStyle, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(TabsStyles({ typeStyle: typeStyle }), className)}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-primary-regular focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

type TriggerProps = {
  value: string
  name: string
}

type ContentProps = {
  value: string
  children: React.ReactNode
}

export type TabsProps = {
  tabsTriggers: TriggerProps[]
  tabsContents: ContentProps[]
  defaultValue?: string
} & TabsStylesProps

export const Tabs = ({
  tabsTriggers,
  tabsContents,
  typeStyle,
  defaultValue,
}: TabsProps) => {
  return (
    <TabsBase defaultValue={defaultValue}>
      <TabsList className={`flex flex-row gap-4`}>
        {tabsTriggers.map((tab) => (
          <TabsTrigger key={tab.value} typeStyle={typeStyle} value={tab.value}>
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsContents.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.children}
        </TabsContent>
      ))}
    </TabsBase>
  )
}
