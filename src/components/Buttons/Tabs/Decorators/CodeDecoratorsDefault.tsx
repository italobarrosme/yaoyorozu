import { Tabs, TabsProps } from '../Tabs'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
        import { Tabs } from '@developerskyi/react-components'

        <Tabs
          defaultValue="tab1"
          tabsTriggers={[
            { value: 'tab1', name: 'Tab 1' },
            { value: 'tab2', name: 'Tab 2' },
            { value: 'tab3', name: 'Tab 3' },
          ]}
          tabsContents={[
            { value: 'tab1', children: 'Content 1' },
            { value: 'tab2', children: 'Content 2' },
            { value: 'tab3', children: 'Content 3' },
          ]}
        />
      `}
    </Copy>
  )
}

export const DefaultComponent = ({
  tabsTriggers,
  tabsContents,
  defaultValue,
}: TabsProps) => {
  return (
    <Tabs
      defaultValue={defaultValue}
      tabsTriggers={tabsTriggers}
      tabsContents={tabsContents}
    />
  )
}
