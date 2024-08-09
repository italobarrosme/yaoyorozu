import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
        import { 
          SidePanel
        } from '@developerskyi/react-components'
        import { Button } from '@developerskyi/react-components'

        <SidePanel orientation={'right'} trigger={<Button variant="fit/regular">Open Side Panel</Button>}>
          Side panel content
        </SidePanel>

      `}
    </Copy>
  )
}
