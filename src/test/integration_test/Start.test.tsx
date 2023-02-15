import {fireEvent, queryAllByRole, queryByRole, queryByTestId, render, screen,waitFor,queryAllByText,act } from "@testing-library/react"
import Start from "../../pages/Start"
import { BrowserRouter } from "react-router-dom";

const MockStart = ()=>{
    return <BrowserRouter>
    <Start/>
</BrowserRouter>
}

describe("Start",()=>{
    it("it should go to login page from Start", async ()=>{
        render(<MockStart/>)
        const buttonElement = screen.getByTestId("start-login")

        act(() => {
            fireEvent.click(buttonElement)
        })
        await waitFor(() =>{ expect(queryAllByText(document.body, /^Sign\sin/i)).toBeTruthy(); setTimeout(() => {
            return ;
        }, 200);})

    })
})
