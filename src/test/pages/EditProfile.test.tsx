import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EditProfile from "../../pages/EditProfile";

it("should render successfully", () => {
  render(
    <MemoryRouter>
      <EditProfile />
    </MemoryRouter>
  );

  expect(screen.getByTestId("profile-header")).toBeInTheDocument();
});
