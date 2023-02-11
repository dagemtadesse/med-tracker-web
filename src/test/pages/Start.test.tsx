import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it } from "vitest";
import Start from "../../pages/Start";

describe("home page component", () => {
  it("renders", () => {
    render(<MemoryRouter><Start /></MemoryRouter>);
  });
});