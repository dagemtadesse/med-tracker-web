import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import SearchInput from "../../../../components/form/SearchInput";
import InformationProvider, {
  InformationContext,
  MedicalInformation,
} from "../../../../contexts/InformationContext";

const setup = ({
  label,
  onClose,
}: Partial<{ label: string; onClose: () => void }>) =>
  render(
    <SearchInput
      type={label || "test type"}
      close={
        onClose ||
        (() => {
          /** empty func */
        })
      }
    />
  );

it("should render correctly", () => {
  setup({});
  expect(screen.getByTestId("Search-input")).toBeInTheDocument();
});

it("should render no options when focused", () => {
  setup({});
  act(() => {
    fireEvent.focus(screen.getByTestId("Search-input"));
  });
  expect(screen.getByText("No Options")).toBeInTheDocument();
});

it("should render several optins when something enetered", () => {
  setup({});
  act(() => {
    fireEvent.change(screen.getByTestId("Search-input"), {
      target: { value: "e" },
    });
    fireEvent.focus(screen.getByTestId("Search-input"));
  });
  expect(screen.getByRole("list").childNodes).toBeTruthy();
});

it("should change search query", () => {
  render(
    <InformationProvider>
      <InformationContext.Consumer>
        {(value: MedicalInformation) => (
          <div data-testid="filtered-items">value.informations.length</div>
        )}
      </InformationContext.Consumer>
    </InformationProvider>
  );

  
});
