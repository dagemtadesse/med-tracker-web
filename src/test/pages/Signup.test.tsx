import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it } from "vitest";
import SignUp from "../../pages/signup";

describe("login page component", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>
    );
  });
});

