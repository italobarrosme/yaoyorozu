import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
        import { 
          Table, 
          TableBody, 
          TableCaption, 
          TableCell, 
          TableFooter, 
          TableHead, 
          TableHeader, 
          TableRow
      } from '@developerskyi/react-components'

        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow className="hover:bg-neutral-white bg-neutral-lightest text-primary-regular">
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3} className="font-medium">
                Total
              </TableCell>
              <TableCell className="text-right font-medium">$2,250.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      `}
    </Copy>
  )
}

export const CodeDecoratorZebraStriped = () => {
  return (
    <Copy>
      {`
        import { 
          Table, 
          TableBody, 
          TableCaption, 
          TableCell, 
          TableFooter, 
          TableHead, 
          TableHeader, 
          TableRow 
        } from '@developerskyi/react-components'
        
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-primary-regular bg-primary-regular text-neutral-white">
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice} className="even:bg-neutral-lightest">
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">{invoice.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      `}
    </Copy>
  )
}
