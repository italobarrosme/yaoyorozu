import { render, screen } from '@testing-library/react'
import { Skeleton } from '.'
import { expect } from 'vitest'
import './../../../test/setup'

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

  it('should render circle skeleton', () => {
    render(<Skeleton size="circle" />)

    const loader = screen.getByTestId(/skeleton/i)

    expect(loader).toHaveClass('rounded-full h-10 w-10')
  })

  it('should render line skeleton', () => {
    render(<Skeleton size="line" />)

    const loader = screen.getByTestId(/skeleton/i)

    expect(loader).toHaveClass('h-10 w-full')
  })

  it('should render extendLine skeleton', () => {
    render(<Skeleton size="extendLine" />)

    const loader = screen.getByTestId(/skeleton/i)

    expect(loader).toHaveClass('h-40 w-full')
  })
})
