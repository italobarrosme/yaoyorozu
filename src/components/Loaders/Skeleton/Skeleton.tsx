import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../../../utils/cn'

const skeletonStyles = cva([], {
  variants: {
    size: {
      circle: 'rounded-full h-10 w-10',
      line: 'h-10 w-full',
      extendLine: 'h-40 w-full',
    },
  },
  defaultVariants: {
    size: 'line',
  },
})

type SkeletonStylesProps = VariantProps<typeof skeletonStyles>

export type SkeletonProps = {
  animationDuration?: number
  children?: React.ReactNode
  className?: string
} & SkeletonStylesProps

export const Skeleton = ({
  animationDuration = 1.6,
  size,
  className,
  children,
}: SkeletonProps) => {
  return (
    <div
      data-testid="skeleton"
      className={cn(
        'relative overflow-hidden bg-[#f9f9f9] align-middle opacity-60',
        skeletonStyles({ size }),
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
