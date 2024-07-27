import {
  Drawer,
  type DrawerProps,
  DrawerHeader,
  DrawerFooter,
  DrawerClose,
  DrawerRoot,
  DrawerTrigger,
  DrawerContent,
} from '..'
import { Button } from '../../../Buttons/Button'

export const DefaultComponent = ({
  children,
  trigger,
  ...props
}: DrawerProps) => {
  return (
    <Drawer {...props} trigger={trigger}>
      <DrawerHeader>Drawer Header</DrawerHeader>
      {children}
      <DrawerFooter>Drawer Footer</DrawerFooter>
    </Drawer>
  )
}

export const CustomDrawerComponent = () => {
  return (
    <DrawerRoot>
      <DrawerTrigger asChild>
        <Button variant="fit/regular">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>Drawer Header</DrawerHeader>
        Content
        <DrawerFooter>Drawer Footer</DrawerFooter>
        <DrawerClose>
          <Button variant="full/regular">Close Drawer</Button>
        </DrawerClose>
      </DrawerContent>
    </DrawerRoot>
  )
}
