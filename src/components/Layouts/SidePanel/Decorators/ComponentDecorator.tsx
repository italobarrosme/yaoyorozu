import { SidePanel, SidePanelProps } from '../'
import { Button } from '../../../Buttons/Button'
import { Copy } from '../../../Texts/Copy'
import { Text } from '../../../Texts/Text'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import { 
          SidePanel
        } from '@developerskyi/react-components'
        import { Button } from '@developerskyi/react-components'

        <SidePanel orientation={'right'} trigger={<Button variant="fit/regular">Open Side Panel</Button>}>
          Side panel content
        </SidePanel>

      `}
    </Copy>
  )
}

export const DefaultComponent = ({
  children,
  trigger,
  orientation,
  ...props
}: SidePanelProps) => {
  const mockContent = (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-col gap-4">
        <Text variant="2xl/semibold" tag="h1">
          Details of the product
        </Text>
        <Text variant="sm/medium">
          The product is a very good product and it is very useful for the
          customers who are looking for a product like this. The product is a
          very good product and it is very useful for the customers who are
          looking for a product like this. The product is a very good product
          and it is very useful for the customers who are looking for a product
          like this.
        </Text>
      </div>

      <div className="w-full flex justify-end">
        <Button variant="fit/regular">Click me</Button>
      </div>
    </div>
  )

  children = mockContent

  return (
    <SidePanel {...props} orientation={orientation} trigger={trigger}>
      {children}
    </SidePanel>
  )
}
