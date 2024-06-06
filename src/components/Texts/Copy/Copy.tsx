/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { useRef } from 'react'
import { Button } from '../../Buttons/Button'
import { Tooltip } from '../Tooltip'
import { Text } from '../Text'
import { themeCode } from './styleCode'

const defaultLanguage = 'jsx'
const defaultStyle = themeCode

export type CopyProps = {
  children: string | string[]
  language?: string
}

export const Copy = ({ children, language = defaultLanguage }: CopyProps) => {
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
        className="font-thin p-2 text-wrap font-mono text-xs rounded-lg w-full col-start-1 col-span-4"
      >
        <SyntaxHighlighter language={language} style={defaultStyle as any}>
          {children}
        </SyntaxHighlighter>
      </pre>
    </div>
  )
}
