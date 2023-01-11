import { render, screen } from "@testing-library/react";
import ListItem from "../../../../components/list/ListItem";

it("Should render correctly", () => {
  render(<ListItem info={{title: "Test label", type: "allergies", id: ""}} />);

  expect(screen.getByText("Test label")).toBeInTheDocument();
});
