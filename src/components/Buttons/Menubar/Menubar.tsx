'use client'

import * as React from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { Icon } from '@iconify/react'

import { cn } from '../../../utils/cn'

const MenubarMenu = MenubarPrimitive.Menu

const MenubarGroup = MenubarPrimitive.Group

const MenubarPortal = MenubarPrimitive.Portal

const MenubarSub = MenubarPrimitive.Sub

const MenubarRadioGroup = MenubarPrimitive.RadioGroup

const MenubarBase = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      'flex h-10 items-center space-x-1 rounded-md border bg-primary-regular p-2',
      className
    )}
    {...props}
  />
))

MenubarBase.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      `flex cursor-pointer select-none items-center rounded-sm px-4 py-1.5 text-sm font-medium 
      focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-regular focus-visible:ring-offset-2 
      data-[state=open]:bg-complementary-highlight data-[state=open]:text-neutral-dark`,
      className
    )}
    {...props}
  />
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      `flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm 
      outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-regular focus-visible:ring-offset-2 
      data-[state=open]:bg-complementary-highlight data-[state=open]:text-neutral-dark`,
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <Icon icon={'lucide:chevron-right'} className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
))
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-primary-regular p-2 text-neutral-dark data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
))
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(
  (
    { className, align = 'start', alignOffset = -4, sideOffset = 8, ...props },
    ref
  ) => (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        ref={ref}
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          `z-50 min-w-[12rem] overflow-hidden rounded-md border bg-primary-regular p-1 
          text-neutral-dark shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 
          data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 
          data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2`,
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
)
MenubarContent.displayName = MenubarPrimitive.Content.displayName

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      `relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm 
      outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-regular focus-visible:ring-offset-2 
      data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
MenubarItem.displayName = MenubarPrimitive.Item.displayName

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm 
      outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-regular focus-visible:ring-offset-2 
      data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Icon icon={'lucide:check'} className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
))
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      `relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm 
      outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-regular focus-visible:ring-offset-2 
      data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Icon icon={'lucide:circle'} className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
))
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
MenubarLabel.displayName = MenubarPrimitive.Label.displayName

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-neutral-light', className)}
    {...props}
  />
))
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName

const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-neutral-dark px-1 py-0.5 rounded-md',
        className
      )}
      {...props}
    />
  )
}
MenubarShortcut.displayname = 'MenubarShortcut'

export {
  MenubarBase,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarPortal,
  MenubarRadioGroup,
}

export type MenuItemProps = {
  children: React.ReactNode
}

export type MenuProp = {
  trigger?: string
  listItems: MenuItemProps[]
  subMenus?: MenuProp[]
}

export type MenubarProps = {
  className?: string
  menus: MenuProp[]
} & React.ComponentProps<typeof MenubarBase>

export const Menubar = ({ menus, className, ...props }: MenubarProps) => {
  return (
    <MenubarBase className={className} {...props}>
      {menus.map((menu, index) => (
        <MenubarMenu key={index}>
          <MenubarTrigger>{menu.trigger}</MenubarTrigger>
          <MenubarContent sideOffset={3}>
            {menu.listItems.map((item, index) => (
              <MenubarItem key={index}>{item.children}</MenubarItem>
            ))}
            {menu.subMenus?.map((subMenu, index) => (
              <MenubarSub key={index}>
                <MenubarSubTrigger>{subMenu.trigger}</MenubarSubTrigger>
                <MenubarSubContent>
                  {subMenu.listItems.map((item, index) => (
                    <MenubarItem key={index} inset>
                      {item.children}
                    </MenubarItem>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
            ))}
          </MenubarContent>
        </MenubarMenu>
      ))}
    </MenubarBase>
  )
}
