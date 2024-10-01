import { Breadcrumb, BreadcrumbProps } from '../Breadcrumb'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorsManyLinks = () => {
  return (
    <Copy>
      {`
        import { Breadcrumb } from '@developerskyi/react-components'

        const CustomLink = ({ href, name }) => (
          <a className='underline hover:text-complementary-highlight' href={href}>{name}</a>,
        )

        <Breadcrumb
          items={[
            { name: 'Home', href: '/' },
            { name: 'Product 1 custom link', href: '/products/1' },
            { name: 'Product 2 custom link', href: '/products/2' },
            { name: 'Product 3 custom link', href: '/products/3' },
            { name: 'Product 4 custom link', href: '/products/4' },
            { name: 'Product 5 custom link', href: '/products/5' },
            { name: 'Product 6 custom link', href: '/products/6' },
            { name: 'Product 7 custom link', href: '/products/7' },
          ]}
          customLink={CustomLink}
        />
      `}
    </Copy>
  )
}

export const ManyLinksComponent = ({
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
