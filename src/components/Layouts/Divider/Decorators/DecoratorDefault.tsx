import { Copy } from '../../../Texts/Copy'
import { Text } from '../../../Texts/Text'
import { Divider, DividerProps } from '../Divider'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import { Divider, Text } from '@developerskyi/react-components'

        <>
          <div
            className={
              orientation === 'horizontal'
                ? 'flex flex-col gap-4'
                : 'flex gap-3 h-full items-center justify-center'
            }
          >
            <Text variant="2xl/bold">Frontend Developer</Text>
            <Divider orientation={orientation} />
            <Text variant="xs/medium">2018 - 2030</Text>
          </div>
        </>
      `}
    </Copy>
  )
}

export const DefaultComponent = ({ orientation }: DividerProps) => {
  return (
    <>
      <div
        className={
          orientation === 'horizontal'
            ? 'flex flex-col gap-4'
            : 'flex gap-3 h-full items-center justify-center'
        }
      >
        <Text variant="2xl/bold">Frontend Developer</Text>
        <Divider orientation={orientation} />
        <Text variant="xs/medium">2018 - 2030</Text>
      </div>
    </>
  )
}
