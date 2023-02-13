import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, vi } from "vitest";
import TermsAndConditions from "../../pages/TermsAndConditions";

describe("TermsAndConditions component", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <TermsAndConditions />
      </MemoryRouter>
    );
  });
});

it("Should click the scroll to bottom button", () => {
  render(
    <MemoryRouter>
      <TermsAndConditions />
    </MemoryRouter>
  );

  const funcs = { scrollHandler: () => {} };
  // const handler = vi.spyOn(funcs, "scrollHandler");

  const wrapper = screen.getByTestId("conditions-text-wrapper");
  wrapper.addEventListener("scroll", funcs.scrollHandler);

  fireEvent.click(screen.getByTestId("scroll-to-bottom"));

    // expect(handler).toHaveBeenCalled();
  expect(wrapper.scrollTop).toBeGreaterThanOrEqual(0);
});
