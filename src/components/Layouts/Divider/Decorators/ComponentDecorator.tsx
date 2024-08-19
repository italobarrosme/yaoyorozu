import { Divider } from '../Divider'

export const DefaultComponent = ({ orientation }) => {
  return <Divider orientation={orientation} />
}

export const ComponentDividerVertical = () => {
  return (
    <div className="h-[500px]">
      <Divider orientation="vertical" />
    </div>
  )
}
