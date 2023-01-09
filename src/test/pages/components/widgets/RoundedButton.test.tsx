import { render } from "@testing-library/react";
import RoundedButton from "../../../../components/widgets/RoundedButton";

it("Should render correctly", () => {
  render(<RoundedButton label="test button" Icon="Icon" />);
});
