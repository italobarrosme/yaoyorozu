import { Button } from '../../../Buttons/Button'
import { Copy } from '../../../Texts/Copy'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import { 
          Card, 
          CardHeader, 
          CardFooter, 
          CardTitle, 
          CardDescription, 
          CardContent,
          Button,
          Text
        } from '@developerskyi/react-components'

        <Card className='w-80'>
          <CardHeader>
            <CardTitle>Software engineering</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Text>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
              omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam.
            </Text>
          </CardContent>
          <CardFooter>
            <Button variant='full/regular'>Access Profile</Button>
          </CardFooter>
        </Card>
      `}
    </Copy>
  )
}

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
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Software engineering</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Text>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam.
        </Text>
      </CardContent>
      <CardFooter>
        <Button variant="full/regular">Access Profile</Button>
      </CardFooter>
    </Card>
  )
}
