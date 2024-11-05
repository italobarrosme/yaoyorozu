import { Copy, CopyProps } from '..'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import { Copy } from '@developerskyi/react-components'
        
        <Copy>
          import { Copy } from '@developerskyi/react-components'
        </Copy>
      `}
    </Copy>
  )
}

export const DefaultComponent = ({ children }: CopyProps) => {
  return <Copy>{children}</Copy>
}
