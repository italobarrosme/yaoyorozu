'use client'

import { ReactNode } from 'react'
import { Icon } from '@iconify/react'
import { Text } from '../Text'
import { cn } from '../../../utils/cn'
import { Divider } from '../../Layouts/Divider'

export type AccordionProps = {
  title: string
  children: ReactNode
  className?: string
}

export const Accordion = ({ title, children, className }: AccordionProps) => {
  return (
    <div className="flex flex-col justify-center gap-2 transition-transform duration-300 hover:bg-primary-regular/10 rounded-md p-4">
      <details className={cn('group', className)}>
        <summary className="w-full min-w-40 relative cursor-pointer text-inherit mb-4">
          <Text variant="xl/medium" className="text-inherit">
            {title}
          </Text>
          <Icon
            icon="oui:arrow-down"
            className="absolute top-2 right-0 transition-transform duration-300 group-open:rotate-180 text-inherit"
          />
        </summary>

        {children}
      </details>
      <Divider />
    </div>
  )
}
