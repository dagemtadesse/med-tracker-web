import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it } from 'vitest'
import Login from '../../pages/login'

describe('login page component', () => {
  it('renders', () => {
    render(<MemoryRouter><Login /></MemoryRouter>)
  })
})