import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
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
