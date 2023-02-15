import {render, fireEvent, waitFor, screen,act, queryByText, queryAllByText, getByTestId} from '@testing-library/react'

import App, { routes } from "../App"
import Login from '../pages/login'
import Start from "../pages/Start"
import Home from "../pages/Home"
import { MemoryRouter, createMemoryRouter } from 'react-router-dom'

const MockApp = ()=>{
        return <App router={createMemoryRouter(routes)}/>
  
}

describe("user flow", () => {
    it("it should go to home page on login", async ()=>{
        render(<MockApp/>)
        const buttonStart = screen.getByTestId("start-login")

        act(() => {
            fireEvent.click(buttonStart)
        }) 

        const emailInput = screen.getByTestId("auth-email")
        const passwordInput = screen.getByTestId("auth-password")
        const buttonElement = screen.getByTestId("auth-button")

        act(() => {
            fireEvent.change(emailInput,{target: {value:"dagem@email.com"}})
            fireEvent.change(passwordInput,{target: {value:"12345678"}})
            fireEvent.click(buttonElement)
        })
        const userInfoElement = screen.queryByTestId("userinfo")
        await waitFor(() =>{ expect(userInfoElement?.innerText).not.toBe("undefined undefined"); setTimeout(() => {
            return ;
        }, 100);})
    })
})