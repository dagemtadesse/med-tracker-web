import { render, screen } from "@testing-library/react";
import NewDocumentPopup from "../../../../components/popup/NewDocumentPopup";
import DocumentContext, { DocumentContextProvider } from "../../../../contexts/DocumentContext";
import { useContext, useEffect } from "react";
import { fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { dummyDocuments } from "../../../../contexts/dummy-data";

const Wrapper = () => {
  const docContext = useContext(DocumentContext)
  useEffect(() => {

    docContext.setCurrentDocument(dummyDocuments[0])
  })

  return docContext.currentDocument ? <NewDocumentPopup /> : <div></div>
}
it("should render correctly", () => {
  render(
    <DocumentContextProvider>
      <Wrapper/>
    </DocumentContextProvider>
  );
});

it("should call handleChange", () => {
  // const funcs = { changehandler: () => {} };
  // const handler = vi.spyOn(funcs, "changehandler");

  render(
    <DocumentContextProvider>
      <Wrapper/>
    </DocumentContextProvider>
  );

  fireEvent.change(screen.getByTestId("FileInput-input"), {
    target: {
      files: [new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" })],
    },
  });
});