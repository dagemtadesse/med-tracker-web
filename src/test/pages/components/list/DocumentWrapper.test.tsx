import { fireEvent, render, screen } from "@testing-library/react";
import { useEffect } from "react";
import DocumentWrapper from "../../../../components/list/DocumentWrapper";
import { ConfirmationProvider } from "../../../../contexts/ConfirmationContext";
import DocumentContext, {
  DocumentContextProvider,
} from "../../../../contexts/DocumentContext";
import { useContext } from "react";
import { dummyDocuments } from "../../../../contexts/dummy-data";

const Wrapped = () => {
  const documentCtx = useContext(DocumentContext);
  useEffect(() => {
    documentCtx.setDocuments(dummyDocuments);
  });
  return <></>;
};

const setup = () =>
  render(
    <ConfirmationProvider>
      <DocumentContextProvider>
        <DocumentWrapper />
        <Wrapped />
      </DocumentContextProvider>
    </ConfirmationProvider>
  );

it("Should render correctly", () => {
  setup();
  expect(screen.getAllByText(dummyDocuments[0].title));
});

it("should delete an item", () => {
  setup();
  expect(screen.getAllByText(dummyDocuments[0].title));
  // fireEvent.click(screen.getByTestId('delete-document'))
});
