import { Copy } from '../../../Texts/Copy'
import { Card } from '../../Card'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import { 
          Pagination
        } from '@developerskyi/react-components'

        let currentPage = 1

        const onPageChange = (page: number) => {
          currentPage = page
        }

        <Pagination
          currentPage={currentPage}
          onPageChange={onPageChange}
          pageSize={pageSize}
          siblingCount={siblingCount}
          totalCount={totalCount}
        />
      `}
    </Copy>
  )
}

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
    <Card className="flex justify-center items-center">
      <Pagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        pageSize={pageSize}
        siblingCount={siblingCount}
        totalCount={totalCount}
        {...props}
      />
    </Card>
  )
}
