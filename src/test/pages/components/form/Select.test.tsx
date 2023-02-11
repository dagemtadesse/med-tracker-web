import { fireEvent, render, screen } from "@testing-library/react";
import Select from "../../../../components/form/Select";

const options = ["test option 1", "test option 2", "test option 3"];
const placeholder = "select test options";

const setup = () => {
  return render(<Select options={options} placeholder={placeholder} />);
};

it("should render correctly", () => {
  setup();

  expect(screen.getByText(placeholder)).toBeInTheDocument();
});

it("Should render the menu when clicked", () => {
  setup();
  expect(screen.queryByText(options[0])).not.toBeInTheDocument();
  fireEvent.click(screen.getByTestId("Select-wrapper"));
  expect(screen.getByText(options[0])).toBeInTheDocument();
});

it('Should close the menu when the background is clicked', () => {
    setup();
    fireEvent.click(screen.getByTestId('Select-wrapper'))
    expect(screen.getByText(options[0])).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('Select-overlay'))
    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
})