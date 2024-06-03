import { Copy } from '..'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
        import { Copy } from '@coqueirodigital/react-components'
        
        <Copy>
          Hellow World
        </Copy>
      `}
    </Copy>
  )
}

export const DefaultComponent = ({ children }) => {
  return <Copy>{children}</Copy>
}
