import { render, screen } from "@testing-library/react";
import DocumentWrapper from "../../../../components/list/DocumentWrapper";

it("Should render correctly", () => {
  render(
    <DocumentWrapper
      category="Test Category"
      items={[{ title: "Vaccine", description: "I have taken vaccine" }]}
    />
  );
  expect(screen.getByText("Vaccine")).toBeInTheDocument();
});
