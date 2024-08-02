'use client'

import * as React from 'react'
import { DayPicker } from 'react-day-picker'

import { cn } from '../../../../utils/cn'
import { ButtonVariantStyle } from '../../../Buttons/Button'
import { Icon } from '@iconify/react'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-4', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          ButtonVariantStyle({
            size: 'fit',
            style: 'ghost',
          }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 text-complementary-highlight'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-neutral-black w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: `h-9 w-9 text-center text-sm p-0 relative
        focus-within:relative focus-within:z-20`,
        day: cn(
          ButtonVariantStyle({
            size: 'fit',
            style: 'calendar',
          }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100'
        ),
        day_range_end: 'day-range-end rounded-r-md rounded-l-none',
        day_range_start: 'day-range-start rounded-l-md rounded-r-none',
        day_selected:
          'day-selected bg-complementary-highlight rounded-md text-neutral-white focus:!bg-complementary-highlight',
        day_today:
          'bg-primary-regular text-primary-foreground rounded-md opacity-50',
        day_outside:
          'day-outside bg-neutral-light text-neutral-black rounded-none opacity-30 aria-selected:text-neutral-dark aria-selected:opacity-40',
        day_disabled: '!text-neutral-light opacity-20',
        day_range_middle:
          'aria-selected:bg-primary-regular aria-selected:text-complementary-highlight !text-neutral-white aria-selected:rounded-none',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => (
          <Icon icon="lucide:chevron-left" className="h-4 w-4" {...props} />
        ),
        IconRight: ({ ...props }) => (
          <Icon icon="lucide:chevron-right" className="h-4 w-4" {...props} />
        ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export { Calendar }
