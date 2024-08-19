import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
        import { Divider } from '@developerskyi/react-components'

        <Divider />
      `}
    </Copy>
  )
}

export const CodeDecoratorVertical = () => {
  return (
    <Copy>
      {`
        import { Divider } from '@developerskyi/react-components'

        <Divider orientation="vertical" />
      `}
    </Copy>
  )
}
