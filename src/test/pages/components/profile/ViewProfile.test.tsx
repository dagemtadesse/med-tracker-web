import { fireEvent, render, screen } from "@testing-library/react";
import { useContext, useEffect } from "react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import ViewProfile from "../../../../components/profile/ViewProfile";
import { user } from "../../../../contexts/dummy-data";
import UserContext from "../../../../contexts/UserContext";

const Wrapper = () => {
  const userCtx = useContext(UserContext);
  useEffect(() => {
    userCtx.setUser(user);
  }, []);

  return (
    <ViewProfile
      close={function (): void {
        /**empty func */
      }}
    />
  );
};
describe("ViewProfile", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <ViewProfile close={() => {}} />
      </MemoryRouter>
    );
  });

  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <Wrapper />
      </MemoryRouter>
    );

    // setTimeout( );
  });

  it("should close", () => {
    const handler = {
      closeHandler: () => {
        /** empty func */
      },
    };
    const handlerSpy = vi.spyOn(handler, "closeHandler");
    const { container } = render(
      <MemoryRouter>
        <ViewProfile close={handler.closeHandler} />
      </MemoryRouter>
    );

    fireEvent.click(container);
    expect(handlerSpy).not.toHaveBeenCalled();
  });

  it("should close", () => {
    const handler = {
      closeHandler: () => {
        /** empty func */
      },
    };
    const handlerSpy = vi.spyOn(handler, "closeHandler");
    const { container } = render(
      <MemoryRouter>
        <ViewProfile close={handler.closeHandler} />
      </MemoryRouter>
    );

    fireEvent.click(container);
    expect(handlerSpy).not.toHaveBeenCalled();
  });
});
