import { fireEvent, render, screen } from "@testing-library/react";
import SearchInput from "../../../../components/form/SearchInput";

const setup = () => render(<SearchInput />);

it("should render correctly", () => {
  setup();
  expect(screen.getByTestId("Search-input")).toBeInTheDocument();
});

it("should render options when focused", () => {
  setup();
  fireEvent.focus(screen.getByTestId("Search-input"));
  expect(screen.getByText("No Options")).toBeInTheDocument();
});
