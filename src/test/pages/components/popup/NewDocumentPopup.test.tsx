import { render } from "@testing-library/react";
import NewDocumentPopup from "../../../../components/popup/NewDocumentPopup";
import DocumentContext, { DocumentContextProvider } from "../../../../contexts/DocumentContext";
import { useContext } from "react";

const Wrapper = () => {
  const docContext = useContext(DocumentContext)

  return docContext ? <NewDocumentPopup /> : <div></div>
}
it("should render correctly", () => {
  render(
    <DocumentContextProvider>
      
    </DocumentContextProvider>
  );
});
