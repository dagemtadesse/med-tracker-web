import { render, screen } from "@testing-library/react";
import ListItem from "../../../../components/list/ListItem";

it("Should render correctly", () => {
  render(<ListItem label="Test label" />);

  expect(screen.getByText("Test label")).toBeInTheDocument();
});
