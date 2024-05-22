import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Skeleton } from '.'
import { expect } from 'vitest'

const mockChildren = () => {
  return <div>Child Element</div>
}

describe('<Skeleton/>', () => {
  it('should render the component with default animation duration', () => {
    render(<Skeleton />)

    const loader = screen.getByTestId(/content-loader/i)

    expect(loader).toHaveStyle(`animation-duration: 1.6s;`)
  })

  it('should receive animationDuration prop', () => {
    render(<Skeleton animationDuration={2} />)

    const loader = screen.getByTestId(/content-loader/i)

    expect(loader).toHaveStyle(`animation-duration: 2s;`)
  })

  it('should render children element', () => {
    render(<Skeleton>{mockChildren()}</Skeleton>)

    const childContent = screen.getByText(/child element/i)

    expect(childContent).toBeInTheDocument()
  })
})
