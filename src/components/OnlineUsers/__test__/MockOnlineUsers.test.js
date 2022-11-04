import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockOnlineUsers from "./MockOnlineUsers";
import { userProps, errorProps } from "../../../test/testUtils";

describe("Online Users", () => {
  it("should have render online users", () => {
    render(<MockOnlineUsers props={userProps} />);
    screen.debug();
  });

  it("should have render error", () => {
    render(<MockOnlineUsers props={errorProps} />);
    screen.debug();
  });
});
