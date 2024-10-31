import { Copy, CopyProps } from '..'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
        import { Copy } from '@developerskyi/react-components'
        
        <Copy>
          Hellow World
        </Copy>
      `}
    </Copy>
  )
}

export const DefaultComponent = ({ children }: CopyProps) => {
  return <Copy>{children}</Copy>
}
