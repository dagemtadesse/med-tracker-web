import { render } from "@testing-library/react";
import NewDocumentPopup from "../../../../components/popup/NewDocumentPopup";
import { DocumentContextProvider } from "../../../../contexts/DocumentContext";

it("should render correctly", () => {
  render(
    <DocumentContextProvider>
      <NewDocumentPopup />
    </DocumentContextProvider>
  );
});
