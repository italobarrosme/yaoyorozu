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

export const NestedCode = () => {
  return (
    <Copy>
      {`
        import { Skeleton, SkeletonProps } from '@developerskyi/react-components'

        <div className="flex flex-col gap-4 px-6 py-2">
          <div className="flex gap-4">
            <Skeleton size="circle" animationDuration={1} />
            <Skeleton size="line" animationDuration={1.2} />
          </div>
          <Skeleton size="extendLine" animationDuration={1.3} />
          <Skeleton size="line" animationDuration={1.4} />
        </div>
      `}
    </Copy>
  )
}

export const NestedComponent = ({ animationDuration, size }: SkeletonProps) => {
  return (
    <div className="flex flex-col gap-4 px-6 py-2">
      <div className="flex gap-4">
        <Skeleton size="circle" animationDuration={1} />
        <Skeleton size="line" animationDuration={1.2} />
      </div>
      <Skeleton size={size} animationDuration={animationDuration} />
      <Skeleton size="line" animationDuration={1.4} />
    </div>
  )
}
