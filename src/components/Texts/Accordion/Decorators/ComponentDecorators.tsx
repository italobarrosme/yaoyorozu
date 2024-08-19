import { Accordion, AccordionProps } from '../Accordion'

export const DefaultComponent = ({
  title,
  children,
  ...props
}: AccordionProps) => {
  return (
    <Accordion title={title} {...props}>
      {children}
    </Accordion>
  )
}
