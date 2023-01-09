import { render, screen } from "@testing-library/react";
import DocumentItem from "../../../../components/list/DocumentItem";

it("should render correctly", () => {
  const title = "Test document item";
  render(<DocumentItem title={title} description="test description" />);

  expect(screen.getByText(title)).toBeInTheDocument();
});
