import { Skeleton, SkeletonProps } from '../Skeleton'
import { Copy } from '../../../Texts/Copy'

export const CodeDecoratorDefault = () => {
  return (
    <Copy>
      {`
        import { Skeleton, SkeletonProps } from '@developerskyi/react-components'

        <Skeleton animationDuration="1.6" size="line" />
      `}
    </Copy>
  )
}

export const DefaultComponent = ({
  animationDuration,
  size,
  ...props
}: SkeletonProps) => {
  return (
    <Skeleton animationDuration={animationDuration} size={size} {...props} />
  )
}
