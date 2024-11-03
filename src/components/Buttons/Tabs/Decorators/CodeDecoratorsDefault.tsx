import { Tabs, TabsProps } from '../Tabs'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
        import { Tabs } from '@developerskyi/react-components'

        const tabsTriggers = [
          { value: 'product', name: 'Product' },
          { value: 'settings', name: 'Settings' },
          { value: 'terms', name: 'Terms and conditions' },
        ]

        const tabsContents = [
            {
              value: 'product',
              children: (
                <div>
                  <Text variant="xl/bold" className='mb-8'>Product</Text>
                  <Text variant="md/medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
                    odio vitae ligula ultrices fermentum. Nullam auctor, nunc nec
                    aliquam tincidunt, libero justo fringilla dolor, nec ultricies
                    purus nunc et odio. Nulla facilisi. Nullam nec nisi eget nunc
                    ultrices fermentum. Nullam auctor, nunc nec aliquam tincidunt,
                    libero justo fringilla dolor, nec
                  </Text>
                </div>
              ),
            },
            {
              value: 'settings',
              children: (
                <div className="flex flex-col gap-2">
                  <Text variant="xl/bold" className='mb-8'>Settings</Text>
                  <Button
                    variant="fit/regular"
                    className="flex gap-2 items-center h-8"
                  >
                    <Icon icon="bi:camera-video" /> Media
                  </Button>
                  <Button
                    variant="fit/regular"
                    className="flex gap-2 items-center h-8"
                  >
                    <Icon icon="bi:bell" /> Notifications
                  </Button>
                  <Button
                    variant="fit/regular"
                    className="flex gap-2 items-center h-8"
                  >
                    <Icon icon="bi:person" /> Account
                  </Button>
                </div>
              ),
            },
            // ... other objects with value and children
          ],

        <Tabs
          defaultValue="tab1"
          tabsTriggers={[
            { value: 'tab1', name: 'Tab 1' },
            { value: 'tab2', name: 'Tab 2' },
            { value: 'tab3', name: 'Tab 3' },
          ]}
          tabsContents={tabsContents}
        />
      `}
    </Copy>
  )
}

export const DefaultComponent = ({
  tabsTriggers,
  tabsContents,
  typeStyle,
  defaultValue,
}: TabsProps) => {
  return (
    <Tabs
      defaultValue={defaultValue}
      typeStyle={typeStyle}
      tabsTriggers={tabsTriggers}
      tabsContents={tabsContents}
    />
  )
}
