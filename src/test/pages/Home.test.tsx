import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it } from "vitest";
import Home from "../../pages/Home";

describe("home page component", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <Home logoutHandler={function (): void {}} />
      </MemoryRouter>
    );

    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
