import { Copy } from '../../../Texts/Copy'
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
import { Text } from '../../../Texts/Text'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import { 
          Drawer, 
          DrawerHeader, 
          DrawerFooter
        } from '@developerskyi/react-components'
        import { Button } from '@developerskyi/react-components'

        <Drawer trigger={<Button variant="fit/regular">Open Metrics</Button>}>
          <DrawerHeader>Your views</DrawerHeader>
            <div className='p-4 flex justify-center items-center'>
              <Text variant="lg/medium">500,000+ views</Text>
            </div>
          <DrawerFooter>Close</DrawerFooter>
        </Drawer>
      `}
    </Copy>
  )
}

export const DefaultComponent = ({
  children,
  trigger,
  ...props
}: DrawerProps) => {
  return (
    <Drawer {...props} trigger={trigger}>
      <DrawerHeader>
        <Text variant="2xl/medium">Your views</Text>
      </DrawerHeader>
      {children}
      <DrawerFooter>
        <DrawerClose>
          <Button variant="full/regular">Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </Drawer>
  )
}

export const CustomCode = () => {
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
              <Button variant="fit/regular">Open Wallet</Button>
            </DrawerTrigger>
            <DrawerContent className="flex justify-center items-center">
              <DrawerHeader>
                <Text variant="3xl/medium">You have - 0.1000 Btc</Text>
              </DrawerHeader>

              <div className="px-4">
                <Text variant="lg/medium">Last Transactions:</Text>

                <Text variant="md/light">Address: bc1qar0srrr7xfkvy5l643lyd...</Text>
                <div className="flex justify-between items-center mt-2 w-80">
                  <Text variant="md/medium">05/11/24 - 0.001 Btc</Text>
                  <Text variant="md/medium">+0.001 Btc</Text>
                </div>
                <div className="flex justify-between items-center mt-2 w-80">
                  <Text variant="md/medium">01/11/24 - 0.001 Btc</Text>
                  <Text variant="md/medium">+0.001 Btc</Text>
                </div>
              </div>

              <DrawerFooter className="flex justify-center items-center">
                <DrawerClose>
                  <Button variant="full/outline" className="w-80">
                    Close Wallet
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </DrawerRoot>
      `}
    </Copy>
  )
}

export const CustomDrawerComponent = () => {
  return (
    <DrawerRoot>
      <DrawerTrigger asChild>
        <Button variant="fit/regular">Open Wallet</Button>
      </DrawerTrigger>
      <DrawerContent className="flex justify-center items-center">
        <DrawerHeader>
          <Text variant="3xl/medium">You have - 0.1000 Btc</Text>
        </DrawerHeader>

        <div className="px-4">
          <Text variant="lg/medium">Last Transactions:</Text>

          <Text variant="md/light">Address: bc1qar0srrr7xfkvy5l643lyd...</Text>
          <div className="flex justify-between items-center mt-2 w-80">
            <Text variant="md/medium">05/11/24 - 0.001 Btc</Text>
            <Text variant="md/medium">+0.001 Btc</Text>
          </div>
          <div className="flex justify-between items-center mt-2 w-80">
            <Text variant="md/medium">01/11/24 - 0.001 Btc</Text>
            <Text variant="md/medium">+0.001 Btc</Text>
          </div>
        </div>

        <DrawerFooter className="flex justify-center items-center">
          <DrawerClose>
            <Button variant="full/outline" className="w-80">
              Close Wallet
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  )
}
