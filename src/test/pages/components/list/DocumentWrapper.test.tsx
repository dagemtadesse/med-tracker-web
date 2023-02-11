import { fireEvent, render, screen } from "@testing-library/react";
import DocumentWrapper from "../../../../components/list/DocumentWrapper";
import { ConfirmationProvider } from "../../../../contexts/ConfirmationContext";
import { DocumentContextProvider } from "../../../../contexts/DocumentContext";

const setup = () =>
  render(
    <ConfirmationProvider>
      <DocumentContextProvider>
        <DocumentWrapper />
      </DocumentContextProvider>
    </ConfirmationProvider>
  );

it("Should render correctly", () => {
  render(<DocumentWrapper />);
});

it("should delete an item", () => {
  setup()
  // fireEvent.click(screen.getByTestId('delete-document'))
  
});
