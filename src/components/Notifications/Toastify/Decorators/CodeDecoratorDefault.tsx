import { Button } from '../../../Buttons/Button'
import { Toastify, ToastifyProps } from '../Toastify'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
        <Button
        variant="fit/regular"
        onClick={() =>
          Toastify({
            description: 'This is a toast message.',
            option: {
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              type: 'success',
            }
          })
        }
      >
        Show toast
      </Button>
    `}
    </Copy>
  )
}

export const DefaultComponent = ({ description, option }: ToastifyProps) => {
  return (
    <>
      <Button
        variant="fit/regular"
        onClick={() =>
          Toastify({
            description: description,
            option: option,
          })
        }
      >
        Show toast
      </Button>
    </>
  )
}
