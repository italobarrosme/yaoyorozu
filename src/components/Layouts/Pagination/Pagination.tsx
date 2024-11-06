'use client'

import { Icon } from '@iconify/react'
import { cn } from '../../../utils/cn'
import { usePagination, DOTS } from './hook'

export type PaginationProps = {
  totalCount: number
  currentPage: number
  pageSize: number
  onPageChange: (page: number) => void
  siblingCount?: number
  className?: string
}

export const Pagination = ({
  totalCount,
  currentPage,
  pageSize,
  onPageChange,
  siblingCount = 1,
  className,
}: PaginationProps) => {
  const paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  })

  // if there are less than 2 times in pagination range we shall not render the component

  if (!paginationRange) return null

  if (paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange!.at(-1)

  return (
    <>
      <nav
        aria-label="pagination"
        className={cn('flex items-center gap-4 text-neutral-dark', className)}
      >
        <button
          data-testid="previous-page"
          onClick={onPrevious}
          disabled={currentPage === 1}
          className="mr-vb-4 text-primary-regular hover:text-primary-dark transition-colors duration-300 "
        >
          <Icon icon="lucide:chevron-left" className="h-4 w-4" />
        </button>
        {paginationRange?.map((page, index) => {
          if (page === DOTS) {
            return (
              <button
                role="separator"
                key={index + page}
                className="flex items-end justify-center h-7"
                disabled
              >
                <Icon icon={'ph:dots-three'} width={20} />
              </button>
            )
          }
          return (
            <button
              key={page}
              className={cn(
                {
                  'text-primary-regular font-bold pointer-events-none':
                    page === currentPage,
                },
                'hover:text-primary-dark transition-colors duration-300'
              )}
              onClick={() => onPageChange(+page)}
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          )
        })}
        <button
          data-testid="next-page"
          onClick={onNext}
          disabled={currentPage === lastPage}
          className="ml-vb-4 text-primary-regular hover:text-primary-dark transition-colors duration-300"
        >
          <Icon icon="lucide:chevron-right" className="h-4 w-4" />
        </button>
      </nav>
    </>
  )
}
