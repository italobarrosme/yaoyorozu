import { Pagination, PaginationProps } from '../Pagination'

export const DefaultComponent = ({
  currentPage,
  onPageChange,
  pageSize,
  siblingCount,
  totalCount,
  ...props
}: PaginationProps) => {
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={onPageChange}
      pageSize={pageSize}
      siblingCount={siblingCount}
      totalCount={totalCount}
      {...props}
    />
  )
}
