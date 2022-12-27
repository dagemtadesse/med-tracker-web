import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import Login from './login'

describe('login page component', () => {
  it('renders', () => {
    render(<Login />)

    expect(screen.getByText(/login/i)).toBeInTheDocument()
  })
})