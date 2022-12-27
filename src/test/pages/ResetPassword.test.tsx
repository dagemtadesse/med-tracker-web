import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import ResetPassword from '../../pages/ResetPassword'


describe('home page component', () => {
  it('renders', () => {
    render(<ResetPassword />)

    expect(screen.getByText(/reset password/i)).toBeInTheDocument()
  })
})