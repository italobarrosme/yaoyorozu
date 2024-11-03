import { Breadcrumb, BreadcrumbProps } from '../Breadcrumb'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorCustomLink = () => {
  return (
    <Copy>
      {`
        import { Breadcrumb } from '@developerskyi/react-components'

        const CustomLink = ({ href, name }) => (
          <a className='bg-primary-regular' href={href}>{name}</a>
        )

        <Breadcrumb
          items: {
            [
              { name: 'Store', href: '#' },
              { name: 'Checkout', href: '#' },
              { name: 'Address', href: '#' },
            ],
          }
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
