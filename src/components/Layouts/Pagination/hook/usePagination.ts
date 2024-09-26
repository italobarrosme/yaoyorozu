import { range } from '../../../../utils/functions'
import { PaginationProps } from '../Pagination'

import { useMemo } from 'react'

export const DOTS = '...'

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: Omit<PaginationProps, 'onPageChange'>) => {
  const paginationRange = useMemo(() => {
    // Math.ceil to always have one page extra for items that are not divisible by pageSize
    const totalPageCount = Math.ceil(totalCount / pageSize)

    // 5 = firstPage + lastPage + currentPage + 2 DOTS
    const totalPageNumbers = siblingCount + 5

    // display pages from 1 to totalPageCount
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    /*
    Calculate left and right sibling index and
    make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    )

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 1

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 2 + 1 * siblingCount
      const leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    /*
        Case 3: No right dots to show, but left dots to be shown
      */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 2 + 1 * siblingCount
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      )
      return [firstPageIndex, DOTS, ...rightRange]
    }

    /*
        Case 4: Both left and right dots to be shown
      */
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [totalCount, pageSize, siblingCount, currentPage])

  return paginationRange
}
