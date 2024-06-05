import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { Icon } from '@iconify/react'

import { cn } from '../../../utils/cn'

const BreadcrumbBase = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
BreadcrumbBase.displayName = 'BreadcrumbBase'

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      'flex flex-wrap items-center gap-1.5 break-words text-sm text-inherit sm:gap-2.5',
      className
    )}
    {...props}
  />
))
BreadcrumbList.displayName = 'BreadcrumbList'

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn('inline-flex items-center gap-1.5', className)}
    {...props}
  />
))
BreadcrumbItem.displayName = 'BreadcrumbItem'

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      ref={ref}
      className={cn(
        'transition-colors hover:underline font-semibold hover:text-complementary-highlight',
        className
      )}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = 'BreadcrumbLink'

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn('font-normal text-inherit', className)}
    {...props}
  />
))
BreadcrumbPage.displayName = 'BreadcrumbPage'

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn('[&>svg]:size-3.5', className)}
    {...props}
  >
    {children ?? (
      <Icon icon="akar-icons:chevron-right" className="h-3.5 w-3.5" />
    )}
  </li>
)
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <Icon icon="lucide:ellipsis" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis'

export {
  BreadcrumbBase,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}

type BreadcrumbsLinks = {
  name: string
  href: string
}

export type BreadcrumbProps = {
  items: BreadcrumbsLinks[]
  iconSeparator?: React.ReactNode
  className?: string
  customLink?: (props: { href: string; name: string }) => React.ReactElement
}

type BreadcrumbListProps = {
  items: BreadcrumbsLinks[]
  item: BreadcrumbsLinks
  index: number
  iconSeparator: React.ReactNode
  customLink?: (props: { href: string; name: string }) => React.ReactElement
}

const BreadcrumbListManyLinks = ({
  items,
  item,
  index,
  iconSeparator,
  customLink,
}: BreadcrumbListProps) => {
  return (
    <>
      {index < 1 && (
        <BreadcrumbItem key={index}>
          {customLink ? (
            customLink({
              href: item.href,
              name: item.name,
            })
          ) : (
            <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
          )}
          {index !== items.length - 1 && (
            <BreadcrumbSeparator>{iconSeparator}</BreadcrumbSeparator>
          )}
        </BreadcrumbItem>
      )}
      {index === 1 && (
        <BreadcrumbItem key={index}>
          <BreadcrumbEllipsis />
          <BreadcrumbSeparator>{iconSeparator}</BreadcrumbSeparator>
        </BreadcrumbItem>
      )}
      {index > items.length - 3 && (
        <BreadcrumbItem key={index}>
          {customLink ? (
            customLink({
              href: item.href,
              name: item.name,
            })
          ) : (
            <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
          )}
          {index !== items.length - 1 && (
            <BreadcrumbSeparator>{iconSeparator}</BreadcrumbSeparator>
          )}
        </BreadcrumbItem>
      )}
    </>
  )
}

const BreadcrumbListDefault = ({
  items,
  item,
  index,
  iconSeparator,
  customLink,
}: BreadcrumbListProps) => {
  return (
    <>
      <BreadcrumbItem key={index}>
        {customLink ? (
          customLink({
            href: item.href,
            name: item.name,
          })
        ) : (
          <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
        )}
        {index !== items.length - 1 && (
          <BreadcrumbSeparator>{iconSeparator}</BreadcrumbSeparator>
        )}
      </BreadcrumbItem>
    </>
  )
}

export const Breadcrumb = ({
  items,
  iconSeparator = <Icon icon="akar-icons:chevron-right" className="h-3 w-3" />,
  className,
  customLink,
}: BreadcrumbProps) => {
  return (
    <BreadcrumbBase className={className}>
      <BreadcrumbList>
        {items.map((item, index) =>
          items.length > 3 ? (
            <BreadcrumbListManyLinks
              key={index}
              items={items}
              item={item}
              index={index}
              iconSeparator={iconSeparator}
              customLink={customLink}
            />
          ) : (
            <BreadcrumbListDefault
              key={index}
              items={items}
              item={item}
              index={index}
              iconSeparator={iconSeparator}
              customLink={customLink}
            />
          )
        )}
      </BreadcrumbList>
    </BreadcrumbBase>
  )
}
