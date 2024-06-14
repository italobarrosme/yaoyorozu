'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '../../../utils/cn'

const TabsBase = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-primary-regular p-1 text-inherit',
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      `inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 
      text-sm font-medium ring-offset-primary-regular transition-all 
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
      disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-complementary-highlight 
      data-[state=active]:text-inherit data-[state=active]:shadow-sm`,
      className
    )}
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
}

export const Tabs = ({
  tabsTriggers,
  tabsContents,
  defaultValue,
}: TabsProps) => {
  return (
    <TabsBase defaultValue={defaultValue}>
      <TabsList className={`flex flex-row gap-4`}>
        {tabsTriggers.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
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
