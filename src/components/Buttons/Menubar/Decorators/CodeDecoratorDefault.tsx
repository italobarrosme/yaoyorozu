import { Menubar, MenubarProps } from '..'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
      import { Menubar } from '@coqueirodigital/react-components'
      
      <Menubar
        menus={[
          {
            trigger: 'File',
            listItems: [
              { children: <Text variant='sm/normal'>Open</Text> },
              { children: <Text variant='sm/normal'>Save</Text> },
              { children: <Text variant='sm/normal'>Save As</Text> },
            ],
            subMenus: [
              {
                trigger: 'Recent Files',
                listItems: [
                  { children: <Text variant='sm/normal'>File 1</Text> },
                  { children: <Text variant='sm/normal'>File 2</Text> },
                  { children: <Text variant='sm/normal'>File 3</Text> },
                ],
              },
            ],
          },
        ]}
        className='text-neutral-black'
      />
      `}
    </Copy>
  )
}

export const DefaultComponent = ({
  menus,
  className,
  ...props
}: MenubarProps) => {
  return <Menubar menus={menus} className={className} {...props} />
}
