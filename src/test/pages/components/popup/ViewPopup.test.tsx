import { render } from "@testing-library/react"
import ViewPopup from "../../../../components/popup/ViewPopup"

it("Should render ViewPopup", () => {
    render( <ViewPopup close={() => {/** func */}} title=""/>)
})