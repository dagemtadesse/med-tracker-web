import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ViewProfile from "../../../../components/profile/ViewProfile";

it("should render correctly", () => {
  render(
    <MemoryRouter>
      <ViewProfile close={() => {}}  />
    </MemoryRouter>
  );
});
