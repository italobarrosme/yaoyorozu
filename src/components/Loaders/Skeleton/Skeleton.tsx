import { Component } from '../../../types/component'
import { cn } from '../../../utils/cn'

export type SkeletonProps = {
  animationDuration?: number
}

export const Skeleton: Component<SkeletonProps> = ({
  animationDuration = 1.6,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden bg-[#f6f7f8] align-middle opacity-60',
        className
      )}
    >
      <span
        data-testid="content-loader"
        style={{ animationDuration: animationDuration + 's' }}
        className="animate-shimmer bg-size-[1000px 100px] absolute inset-0 -translate-x-full bg-gradient-to-r from-[#eee] via-[#ddd] to-[#eee] bg-repeat"
      />
      {children}
    </div>
  )
}
