import { Copy } from '../../../Texts/Copy'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../Table'
import { invoices } from './mock'

export const DefaultCode = () => {
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
            <TableRow className="bg-neutral-white text-primary-regular">
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

export const DefaultComponent = () => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow className="bg-neutral-white text-primary-regular">
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
  )
}
