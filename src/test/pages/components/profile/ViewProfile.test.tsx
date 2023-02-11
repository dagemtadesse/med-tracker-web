import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ViewProfile from "../../../../components/profile/ViewProfile";
import { user } from "../../../../contexts/dummy-data";

it("should render correctly", () => {
  render(
    <MemoryRouter>
      <ViewProfile close={() => {}} user={user} />
    </MemoryRouter>
  );
});
