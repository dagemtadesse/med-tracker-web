import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import Home from './Home'

describe('home page component', () => {
  it('renders', () => {
    render(<Home />)

    expect(screen.getByText(/home/i)).toBeInTheDocument()
  })
})
