import { render } from "@testing-library/react";
import ViewProfile from "../../../../components/profile/ViewProfile";

it("should render correctly", () => {
  render(<ViewProfile close={() => {}} />);
});
