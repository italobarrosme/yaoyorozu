import { Menubar, MenubarProps } from '..'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`

        import { Menubar } from '@developerskyi/react-components'

        const MenuList = [
            {
              trigger: 'Computer store',
              listItems: [
                {
                  children: (
                    <ButtonLink className="text-neutral-white" variant="small/block">
                      Nootbooks
                    </ButtonLink>
                  ),
                },
                {
                  children: (
                    <ButtonLink className="text-neutral-white" variant="small/block">
                      Memory
                    </ButtonLink>
                  ),
                },
                {
                  children: (
                    <ButtonLink className="text-neutral-white" variant="small/block">
                      PCs
                    </ButtonLink>
                  ),
                },
              ],
              subMenus: [
                {
                  trigger: 'Games',
                  listItems: [
                    {
                      children: (
                        <ButtonLink className="text-neutral-white" variant="small/block">
                          Xboxs
                        </ButtonLink>
                      ),
                    },
                    {
                      children: (
                        <ButtonLink className="text-neutral-white" variant="small/block">
                          PC
                        </ButtonLink>
                      ),
                    },
                    {
                      children: (
                        <ButtonLink className="text-neutral-white" variant="small/block">
                          Playstation
                        </ButtonLink>
                      ),
                    },
                  ],
                  subMenus: [
                    {
                      trigger: 'Accessories',
                      listItems: [
                        {
                          children: (
                            <ButtonLink className="text-neutral-white" variant="small/block">
                              Controllers
                            </ButtonLink>
                          ),
                        },
                        {
                          children: (
                            <ButtonLink className="text-neutral-white" variant="small/block">
                              Headsets
                            </ButtonLink>
                          ),
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
            // rest of the menu items
            ...
            }
        ]
      
        <Menubar
          menus={MenuList}
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
