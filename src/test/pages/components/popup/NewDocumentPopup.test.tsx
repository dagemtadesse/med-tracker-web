import { render } from "@testing-library/react";
import NewDocumentPopup from "../../../../components/popup/NewDocumentPopup";

it("should render correctly", () => {
  render(<NewDocumentPopup close={() => {}} />);
});
