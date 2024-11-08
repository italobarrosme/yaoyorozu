import { SidePanel, SidePanelButtonClose, SidePanelProps } from '..'
import { Button } from '../../../Buttons/Button'
import { Copy } from '../../../Texts/Copy'
import { Text } from '../../../Texts/Text'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import { 
          SidePanel
        } from '@developerskyi/react-components'
        import { Button } from '@developerskyi/react-components'

        const content = (
          <div className="flex flex-col justify-between h-screen bg-white p-6">
            <div className="flex flex-col gap-4">
              <Text variant="2xl/semibold" tag="h1">
                Article Frontend Development 2024
              </Text>
              <Text variant="sm/medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero in dui lacinia, nec ultricies metus ultricies. Nulla
                facilisi. Sed eget odio nec libero volutpat ultricies. Nulla facilisi.
                Sed eget odio nec libero volutpat ultricies. Nulla facilisi. Sed eget
              </Text>
              
            </div>

            <div className="w-full flex justify-end gap-4">
              <SidePanelButtonClose>
                <Button variant="fit/outline">Close</Button>
              </SidePanelButtonClose>
              <Button variant="fit/regular">Learn More</Button>
            </div>
          </div>
        )

        <SidePanel orientation={'right'} trigger={<Button variant="fit/regular">
          Article Frontend Development 2024
        </Button>}>
          {content}	
        </SidePanel>

      `}
    </Copy>
  )
}

export const DefaultComponent = ({
  children,
  trigger,
  orientation,
  ...props
}: SidePanelProps) => {
  const mockContent = (
    <div className="flex flex-col justify-between h-screen bg-white p-6">
      <div className="flex flex-col gap-4">
        <Text variant="2xl/semibold" tag="h1">
          Article Frontend Development 2024
        </Text>
        <Text variant="sm/medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          convallis libero in dui lacinia, nec ultricies metus ultricies. Nulla
          facilisi. Sed eget odio nec libero volutpat ultricies. Nulla facilisi.
          Sed eget odio nec libero volutpat ultricies. Nulla facilisi. Sed eget
        </Text>
      </div>

      <div className="w-full flex justify-end gap-4">
        <SidePanelButtonClose>
          <Button variant="fit/outline">Close</Button>
        </SidePanelButtonClose>
        <Button variant="fit/regular">Learn More</Button>
      </div>
    </div>
  )

  children = mockContent

  return (
    <SidePanel {...props} orientation={orientation} trigger={trigger}>
      {children}
    </SidePanel>
  )
}
