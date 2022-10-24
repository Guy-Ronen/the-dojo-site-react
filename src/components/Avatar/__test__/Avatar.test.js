import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Avatar from "../Avatar";

describe("Avatar", () => {
  it('Avatar must have src "hello-world" and alt "avatar-logo"', () => {
    const src = "hello-world";
    render(<Avatar src={src} />);

    const avatar = screen.getByRole("img");

    expect(avatar).toContainHTML("img");
    expect(avatar).toHaveAttribute("src", "hello-world");
    expect(avatar).toHaveAttribute("alt", "avatar-logo");
  });
});
