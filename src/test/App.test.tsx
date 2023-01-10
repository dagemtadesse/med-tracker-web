import App from "../App";
import { render, screen } from "@testing-library/react";

describe("Router test", () => {
  it("should render successfuly", () => {
    window.history.pushState({}, "Test page", "/home");
    render(<App />);
  });
});
