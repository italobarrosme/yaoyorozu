import { useRef } from 'react'
import { Button } from '../../Buttons/Button'
import { Tooltip } from '../Tooltip'
import { Text } from '../Text'

export type CopyProps = {
  children: React.ReactNode
}

export const Copy = ({ children }: CopyProps) => {
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
    <div className="bg-neutral-dark p-2 rounded-lg grid grid-cols-4">
      <div className="col-start-5 col-span-5">
        <Button variant="fit/ghost" onClick={handleCopy}>
          <Tooltip trigger="click" content="Copy code" side="top">
            <Text variant="sm/semibold" className="text-primary-dark">
              Copy
            </Text>
          </Tooltip>
        </Button>
      </div>
      <pre
        ref={codeRef}
        className="font-thin text-neutral-white p-2 text-wrap font-mono text-xs rounded-lg w-full col-start-1 col-span-4"
      >
        {`${children}`}
      </pre>
    </div>
  )
}
