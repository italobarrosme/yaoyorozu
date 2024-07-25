import { Text } from '../../../Texts/Text'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '../Card'

export const DefaultComponent = () => {
  return (
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
  )
}
