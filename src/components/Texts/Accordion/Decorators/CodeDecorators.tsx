import { Copy } from '../../../Texts/Copy'

export const DefaultCode = () => {
  return (
    <Copy>
      {`
        import { Accordion } from '@developerskyi/react-components'

        <Accordion title="Question about the product and services">
          <Text variant="md/light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            consectetur, justo eget aliquam ultricies, purus lorem tincidunt
            libero, auctor ultricies odio mauris nec nunc.
          </Text>
        </Accordion>
      `}
    </Copy>
  )
}

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
