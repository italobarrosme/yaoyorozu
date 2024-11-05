import { Breadcrumb, BreadcrumbProps } from '../Breadcrumb'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorsManyLinks = () => {
  return (
    <Copy>
      {`
        import { Breadcrumb } from '@developerskyi/react-components'

        <Breadcrumb
          items={[
            { name: 'North American', href: '#' },
            { name: 'EUA', href: '#' },
            { name: 'New York', href: '#' },
            { name: 'Brooklyn', href: '#' },
            { name: 'Canarsie', href: '#' },
            { name: 'Avenue J', href: '#' },
            { name: '9613', href: '#' }
          ]}
        />
      `}
    </Copy>
  )
}

export const ManyLinksComponent = ({
  items,
  iconSeparator,
}: BreadcrumbProps) => {
  return <Breadcrumb items={items} iconSeparator={iconSeparator} />
}
