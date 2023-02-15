import { BrowserRouter } from "react-router-dom";
import Login from "../../pages/login"
import { fireEvent, queryAllByRole, queryByRole, queryByTestId, render, screen,waitFor,queryAllByText } from "@testing-library/react";
import '@testing-library/jest-dom'
import '@testing-library/jest-dom'
import {act} from "@testing-library/react"

const MockLogin = ()=>{
    return <BrowserRouter>
                <Login/>
            </BrowserRouter>
}
describe("Login", ()=>{
    it("it should throw an error on invalid email and passowrd",async ()=>{
        render(<MockLogin/>)
        const emailInput = screen.getByTestId("auth-email")
        const passwordInput = screen.getByTestId("auth-password")
        const buttonElement = screen.getByTestId("auth-button")

        act(() => {
            fireEvent.change(emailInput,{target: {value:"email.com"}})
            fireEvent.change(passwordInput,{target: {value:"em"}})
            fireEvent.click(buttonElement)
        })
        const errorsMsg = queryAllByRole(document.body, /error-message/i)
        expect(errorsMsg).toBeTruthy()

        await waitFor(() =>{ expect(errorsMsg[0].innerHTML).toBeTruthy(); setTimeout(() => {
            return ;
        }, 100);})
    }),

    it("it should not throw an error on valid email and password",async ()=>{
        render(<MockLogin/>)
        const emailInput = screen.getByTestId("auth-email")
        const passwordInput = screen.getByTestId("auth-password")
        const buttonElement = screen.getByTestId("auth-button")

        act(() => {
            fireEvent.change(emailInput,{target: {value:"email@email.com"}})
            fireEvent.change(passwordInput,{target: {value:"email1234"}})
            fireEvent.click(buttonElement)
        })
        const errorsMsg = queryAllByRole(document.body, /error-message/i)
        await waitFor(() =>{ expect(errorsMsg[0].innerHTML).not.toBeTruthy(); setTimeout(() => {
            return ;
        }, 100);})
    }),
    it("it should render home page on valid email and password", async ()=>{
        render(<MockLogin/>)

        const emailInput = screen.getByTestId("auth-email")
        const passwordInput = screen.getByTestId("auth-password")
        const buttonElement = screen.getByTestId("auth-button")

        act(() => {
            fireEvent.change(emailInput,{target: {value:"yeab@email.com"}})
            fireEvent.change(passwordInput,{target: {value:"12345678"}})
            fireEvent.click(buttonElement)
        })
        await waitFor(() =>{ expect(queryAllByText(document.body, /^Medicine/i)).toBeTruthy(); setTimeout(() => {
            return ;
        }, 200);})
    })
    }
)
