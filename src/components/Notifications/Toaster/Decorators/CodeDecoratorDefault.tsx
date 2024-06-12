import { useToast } from '..'
import { Button } from '../../../Buttons/Button'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
      import { useToast, Button } from '@coqueirodigital/react-components'

      const { toast } = useToast()

      <Button variant='fit/regular' onClick={() => toast({
        title: 'Hello, world!',
        description: 'This is a toast message.',
        action: <Button variant='small/regular' onClick={() => console.log('Button clicked')}>Action</Button>,
        duration: 5000,
        variant: 'success',
      })}>
        Show toast
      </Button>
    `}
    </Copy>
  )
}

export const DefaultComponent = () => {
  const { toast } = useToast()

  return (
    <>
      <Button
        variant="fit/regular"
        onClick={() =>
          toast({
            title: 'Hello, world!',
            description: 'This is a toast message.',
            action: (
              <>
                <Button
                  variant="fit/outline"
                  className="border-neutral-dark text-neutral-regular"
                  onClick={() => console.log('Button clicked 1')}
                >
                  Action 1
                </Button>
              </>
            ),
            duration: 5000,
            variant: 'success',
          })
        }
      >
        Show toast
      </Button>
    </>
  )
}
