import { Copy } from '../../../Texts/Copy'
import { Skeleton, SkeletonProps } from '../Skeleton'

export const CodeDecoratorNested = () => {
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
