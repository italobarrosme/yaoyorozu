import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
        import { ProgressBar } from '@developerskyi/react-components'

        <ProgressBar
          displayPercentage={true}
          progress={50}
          size='md'
          variant='line/primary'
        />
      `}
    </Copy>
  )
}
