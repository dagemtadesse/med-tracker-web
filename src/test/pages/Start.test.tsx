import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import Start from '../../pages/Start'


describe('home page component', () => {
  it('renders', () => {
    render(<Start />)

    expect(screen.getByText(/start/i)).toBeInTheDocument()
  })
})