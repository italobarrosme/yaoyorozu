import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
        import { 
          Card, 
          CardHeader, 
          CardFooter, 
          CardTitle, 
          CardDescription, 
          CardContent
        } from '@developerskyi/react-components'

        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <Text>Card Content</Text>
          </CardContent>
          <CardFooter>Card Footer</CardFooter>
        </Card>
      `}
    </Copy>
  )
}
