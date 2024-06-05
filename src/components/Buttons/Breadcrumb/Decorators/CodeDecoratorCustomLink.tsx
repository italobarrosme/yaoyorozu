import { Breadcrumb, BreadcrumbProps } from '../Breadcrumb'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorCustomLink = () => {
  return (
    <Copy>
      {`
        import { Breadcrumb } from '@coqueirodigital/react-components'

        const CustomLink = ({ href, name }) => (
          <a className='bg-primary-regular' href={href}>{name}</a>
        )

        <Breadcrumb
          items={[
            { name: 'Home custom link', href: '/' },
            { name: 'Products 1', href: '/products/1' },
            { name: 'Product 2', href: '/products/2' },
          ]}
          iconSeparator=">"
          customLink={CustomLink}
        />
        
      `}
    </Copy>
  )
}

export const CustomLinkComponent = ({
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
