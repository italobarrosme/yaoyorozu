import { useRef } from 'react'
import { Tooltip } from '../../../Texts/Tooltip/'
import { Text } from '../../../Texts/Text'
import { Skeleton, SkeletonProps } from '../Skeleton'

export const CodeDecoratorDefault = () => {
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

          <Skeleton animationDuration="1.6" size="line" />
        `}
      </pre>
    </div>
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
