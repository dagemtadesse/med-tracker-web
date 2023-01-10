import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it } from "vitest";
import ResetPassword from "../../pages/ResetPassword";

describe("home page component", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <ResetPassword />
      </MemoryRouter>
    );
  });
});
