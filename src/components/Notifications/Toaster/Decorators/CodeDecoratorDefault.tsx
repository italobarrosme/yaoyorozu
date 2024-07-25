import { useToast } from '..'
import { Button } from '../../../Buttons/Button'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
      import { useToast, Button } from '@developerskyi/react-components'

      const { toast } = useToast()

      <Button
        variant="fit/regular"
        onClick={() =>
          toast({
            title: 'Hello, world!',
            description: 'This is a toast message.',
            action: (
              <>
                <Button
                  variant="fit/regular"
                  className="border-neutral-dark text-neutral-white bg-neutral-black hover:bg-neutral-900 hover:text-neutral-white"
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
                  variant="fit/regular"
                  className="border-neutral-dark text-neutral-white bg-neutral-black hover:bg-neutral-900 hover:text-neutral-white"
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
