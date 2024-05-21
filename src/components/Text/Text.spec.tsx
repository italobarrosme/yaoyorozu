import React from 'react'

import { Text } from '.'
import { render, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'
import './../../../test/setup'

describe('<Text />', () => {
  it('should render the component', () => {
    const fakeText = faker.lorem.words(3)
    render(<Text variant="md/normal">{fakeText}</Text>)

    const component = screen.getByText(fakeText)

    expect(component).toBeInTheDocument()
  })

  it('should render the component with the correct variant', () => {
    const fakeText = faker.lorem.words(3)
    render(<Text variant="sm/light">{fakeText}</Text>)

    const component = screen.getByText(fakeText)

    expect(component).toHaveClass('text-sm font-light')
  })

  it('should render the component with the correct children', () => {
    const fakeText = faker.lorem.words(3)
    render(<Text variant="md/normal">{fakeText}</Text>)

    const component = screen.getByText(fakeText)

    expect(component).toHaveTextContent(fakeText)
  })

  it('should render the component with the correct className', () => {
    const fakeText = faker.lorem.words(3)
    render(
      <Text variant="md/normal" className="example-class">
        {fakeText}
      </Text>
    )

    const component = screen.getByText(fakeText)

    expect(component).toHaveClass('example-class')
  })

  it('should render with default tag of p', () => {
    const fakeText = faker.lorem.words(3)
    render(<Text variant="md/normal">{fakeText}</Text>)

    const component = screen.getByText(fakeText)

    expect(component).toContainHTML('p')
  })

  it('should render with correct tag', () => {
    const fakeText = faker.lorem.words(3)
    render(
      <Text variant="md/normal" tag="h1">
        {fakeText}
      </Text>
    )

    const component = screen.getByRole('heading')

    expect(component).toContainHTML('h1')
  })
})
