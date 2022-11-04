import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MockSidebar from "./MockSidebar";
import { user } from "../../../test/testUtils";

const MockSidebarTest = () => {
  return (
    <BrowserRouter>
      <MockSidebar mockUser={user} />
    </BrowserRouter>
  );
};

describe("MockSidebar", () => {
  it("should have render a MockSidebar", () => {
    const MockSidebar = render(<MockSidebarTest />);
    screen.debug();
  });
});
