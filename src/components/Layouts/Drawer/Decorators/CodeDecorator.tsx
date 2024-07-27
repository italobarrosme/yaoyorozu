import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
        import { 
          Drawer, 
          DrawerHeader, 
          DrawerFooter
        } from '@developerskyi/react-components'
        import { Button } from '@developerskyi/react-components'

        <Drawer trigger={<Button variant="fit/regular">Open Drawer</Button>}>
          <DrawerHeader>Drawer Header</DrawerHeader>
            Content
          <DrawerFooter>Drawer Footer</DrawerFooter>
        </Drawer>
      `}
    </Copy>
  )
}

export const CodeDecoratorCustom = () => {
  return (
    <Copy>
      {`
        import { 
          DrawerRoot, 
          DrawerTrigger, 
          DrawerContent, 
          DrawerHeader,
          DrawerContent
        } from '@developerskyi/react-components'
        import { Button } from '@developerskyi/react-components'

        <DrawerRoot>
          <DrawerTrigger asChild>
            <Button variant="fit/regular">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>Drawer Header</DrawerHeader>
              Content
            <DrawerFooter>Drawer Footer</DrawerFooter>
            <DrawerClose>
            <Button variant='full/regular'>Close Drawer</Button>
          </DrawerClose>
          </DrawerContent>
        </DrawerRoot>
      `}
    </Copy>
  )
}
