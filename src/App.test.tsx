import App, { routes } from './App'
import { render, screen } from '@testing-library/react'
import {
  createMemoryRouter,
  MemoryRouter,
  RouterProvider,
} from 'react-router-dom'

describe('Router test', () => {
  it('home route', () => {
    window.history.pushState({}, 'Test page', '/home')
    render(<App />)
    expect(screen.getByText(/home/i)).toBeInTheDocument()
  })

  it('start route', () => {
    window.history.pushState({}, 'Test page', '/')
    render(<App />)
    expect(screen.getByText(/start/i)).toBeInTheDocument()
  })

  it('reset password route', () => {
    window.history.pushState({}, 'Test page', '/reset-password')
    render(<App />)
    expect(screen.getByText(/reset password/i)).toBeInTheDocument()
  })

  it('login route', () => {
    window.history.pushState({}, 'Test page', '/login')
    render(<App />)
    expect(screen.getByText(/login/i)).toBeInTheDocument()
  })
})
