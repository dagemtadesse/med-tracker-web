import { fireEvent, render } from "@testing-library/react";
import { vi } from "vitest";
import ModalPopup from "../../../../components/modal/Modal";

it("should render", () => {
  render(<ModalPopup close={() => {}} />);
});

it("should close when overlay is clicked", () => {
  const funcs = { closeHandler: () => {} };
  const handler = vi.spyOn(funcs, "closeHandler");

  const { container } = render(<ModalPopup close={funcs.closeHandler} />);
  fireEvent.click(container.firstChild!);
  expect(handler).toHaveBeenCalled
});
