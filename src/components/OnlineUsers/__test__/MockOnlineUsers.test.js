import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockOnlineUsers from "./MockOnlineUsers";
import { userProps, errorProps } from "../../../test/userProps";

describe("Online Users", () => {
  it("should have render online users", () => {
    const { container } = render(<MockOnlineUsers props={userProps} />);
    const users = container.getElementsByClassName("user-list-item");
    expect(users).toHaveLength(3);
  });

  it("should have 2 online users", () => {
    const { container } = render(<MockOnlineUsers props={userProps} />);
    const users = container.getElementsByClassName("online-user");
    expect(users).toHaveLength(2);
  });

  it("should have 1 offline users", () => {
    const { container } = render(<MockOnlineUsers props={userProps} />);
    const user = container.getElementsByClassName("offline-user");
    expect(user).toHaveLength(1);
  });

  it("should have render error", () => {
    render(<MockOnlineUsers props={errorProps} />);
    const error = screen.getByText(/could not fetch the documents/i);
    expect(error).toBeInTheDocument();
  });
});
