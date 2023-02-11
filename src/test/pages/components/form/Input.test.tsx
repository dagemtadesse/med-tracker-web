import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../../../../components/form/Input";
import { vi } from "vitest";

it("should render using textarea for large input", () => {
  render(<Input lg label={"test input"} />);

  expect(screen.getByText(/test input/i)).toBeInTheDocument();
  expect(screen.getByTestId("Input-textarea")).toBeInTheDocument();
});

it("should show label while there is input", () => {
  render(<Input lg={false} label={"Test input"} />);
  const input: HTMLInputElement = screen.getByTestId("Input-input");
  expect(screen.getByTestId("Input-input")).toBeInTheDocument();
  fireEvent.change(input, { target: { value: "test value" } });
  expect(input.value).toBe("test value");
  expect(screen.getByRole("label").parentNode).toHaveClass("items-start");
});

it("should render using input element", () => {
  render(<Input label="test input" lg={false} />);

  expect(screen.getByTestId("Input-input")).toBeInTheDocument();
});

it("should respond to click", () => {
  render(<Input lg={false} label="test input" />);
  const wrapper = screen.getByRole("label").parentNode;
  expect(wrapper).toHaveClass("items-center");
  fireEvent.click(screen.getByText(/test input/));
  expect(wrapper).toHaveClass("items-start");
});

it("should focus when clicked", () => {
  const { container } = render(<Input lg={false} label="test input" />);
  fireEvent.click(container.firstChild!);
  expect(screen.getByTestId("Input-input")).toBe(document.activeElement);
});

it("should respond to input change", () => {
  const funcs = { changehandler: () => {} };
  const handler = vi.spyOn(funcs, "changehandler");
  render(
    <Input lg={false} label="test input" onChange={funcs.changehandler} />
  );
  expect(handler).not.toHaveBeenCalled();
  fireEvent.change(screen.getByTestId("Input-input"), {
    target: { value: "val" },
  });
  expect(handler).toHaveBeenCalled();
});
