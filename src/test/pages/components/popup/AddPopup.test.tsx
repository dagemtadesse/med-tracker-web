import { render } from "@testing-library/react";
import { vi } from "vitest";
import AddPopup from "../../../../components/popup/AddPopup";

it("Should render successfuly", () => {
  render(<AddPopup type="" handleClose={() => {/** empty func */}}/>)
});

it("Should close handleClose", () => {
  const funcs = { changehandler: () => {} };
  const handler = vi.spyOn(funcs, "changehandler");
});
