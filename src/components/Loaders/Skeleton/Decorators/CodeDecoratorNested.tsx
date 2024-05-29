import { useRef } from 'react'
import { Tooltip } from '../../../Texts/Tooltip'
import { Text } from '../../../Texts/Text'
import { Skeleton, SkeletonProps } from '../Skeleton'

export const CodeDecoratorNested = () => {
  const codeRef = useRef<HTMLPreElement>(null)

  const handleCopy = () => {
    if (codeRef.current) {
      const code = codeRef.current.innerText
      navigator.clipboard.writeText(code).then(() => {
        console.log('Code copied to clipboard')
      })
    }
  }

  return (
    <div className="relative bg-secondary-regular w-full">
      <button onClick={handleCopy} className="absolute top-5 right-10 ">
        <Tooltip trigger="click" content="Copy code" side="top">
          <Text variant="sm/semibold" className="text-primary-dark">
            Copy
          </Text>
        </Tooltip>
      </button>
      <pre ref={codeRef} className="font-thin text-neutral-white text-xs py-16">
        {`
          import { Skeleton, SkeletonProps } from '@coqueirodigital/react-components'

          <div className="flex flex-col gap-4 px-6 py-2">
            <div className="flex gap-4">
              <Skeleton size="circle" animationDuration={1} />
              <Skeleton size="line" animationDuration={1.2} />
            </div>
            <Skeleton size="extendLine" animationDuration={1.3} />
            <Skeleton size="line" animationDuration={1.4} />
          </div>
        `}
      </pre>
    </div>
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
