import { Breadcrumb, BreadcrumbProps } from '../Breadcrumb'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
        import { Breadcrumb } from '@coqueirodigital/react-components'

        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Product 1', href: '/products/1' },
            { label: 'Product 2', href: '/products/2' },
          ]}
          iconSeparator=">"
        />
      `}
    </Copy>
  )
}

export const DefaultComponent = ({
  items,
  iconSeparator,
  customLink,
}: BreadcrumbProps) => {
  return (
    <Breadcrumb
      items={items}
      iconSeparator={iconSeparator}
      customLink={customLink}
    />
  )
}
