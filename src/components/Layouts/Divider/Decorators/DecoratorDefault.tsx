import { Copy } from '../../../Texts/Copy'
import { Divider, DividerProps } from '../Divider'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import { Divider } from '@developerskyi/react-components'

        <Divider />
      `}
    </Copy>
  )
}

export const DefaultComponent = ({ orientation }: DividerProps) => {
  return <Divider orientation={orientation} />
}
