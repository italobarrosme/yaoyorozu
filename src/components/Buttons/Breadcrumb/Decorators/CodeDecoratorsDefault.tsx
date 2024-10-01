import { Breadcrumb, BreadcrumbProps } from '../Breadcrumb'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
        import { Breadcrumb } from '@developerskyi/react-components'
        import { Icon } from '@iconify/react'

        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Product 1', href: '/products/1' },
            { label: 'Product 2', href: '/products/2' },
          ]}
          iconSeparator={<Icon icon="akar-icons:arrow-right" />}
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
