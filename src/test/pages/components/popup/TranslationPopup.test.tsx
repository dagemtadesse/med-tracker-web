import { render } from "@testing-library/react";
import TranslationPopup from "../../../../components/popup/TranslationPopup";

it("should render correctly", () => {
    render(<TranslationPopup handleClose={() => { } } type={""} />);
  });