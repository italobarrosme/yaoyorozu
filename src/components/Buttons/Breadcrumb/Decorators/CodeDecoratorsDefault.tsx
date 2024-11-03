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
            { name: 'Home', href: '#' },
            { name: 'Pc Gamer', href: '#' },
            { name: 'Monitors', href: '#' },
          ]}
          iconSeparator={<Icon icon="akar-icons:arrow-right" />}
        />
      `}
    </Copy>
  )
}

export const DefaultComponent = ({ items, iconSeparator }: BreadcrumbProps) => {
  return <Breadcrumb items={items} iconSeparator={iconSeparator} />
}
