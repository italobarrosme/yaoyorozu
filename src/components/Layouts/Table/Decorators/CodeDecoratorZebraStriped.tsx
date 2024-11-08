import { Copy } from '../../../Texts/Copy'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../Table'
import { invoices } from './mock'

export const ZebraStripedCode = () => {
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

export const ZebraStripedComponent = () => {
  return (
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
  )
}
