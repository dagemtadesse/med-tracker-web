import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import FileInput from "../../../../components/form/FileInput";

const setup = (handleChange: any) =>
  render(<FileInput handleChange={handleChange} />);

it("should render correctly", () => {
  setup(() => {});

  expect(screen.getByText("Drag and drop files")).toBeInTheDocument();
});

it("should call handleChange", () => {
  const funcs = { changehandler: () => {} };
  const handler = vi.spyOn(funcs, "changehandler");
  setup(funcs.changehandler);
  fireEvent.change(screen.getByTestId("FileInput-input"), {
    target: {
      files: [new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" })],
    },
  });
  expect(handler).toHaveBeenCalled();
});
