import { SidePanel } from '../'

export const DefaultComponent = ({
  children,
  trigger,
  orientation,
  ...props
}) => {
  return (
    <SidePanel {...props} orientation={orientation} trigger={trigger}>
      {children}
    </SidePanel>
  )
}
