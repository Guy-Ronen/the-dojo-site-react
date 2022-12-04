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
    const { container } = render(<MockSidebarTest />);
    expect(container).toBeInTheDocument();
  });

  it("should have 3 links", () => {
    const { container } = render(<MockSidebarTest />);
    const links = container.getElementsByClassName("list-item");
    expect(links).toHaveLength(3);
  });

  it("should have an account link", () => {
    render(<MockSidebarTest />);
    const accountLink = screen.getByText(/account/i);

    expect(accountLink).toBeInTheDocument();
    expect(accountLink.closest("a")).toHaveAttribute("href", "/account");
  });

  it("should have a dashboard link", () => {
    render(<MockSidebarTest />);
    const dashboardLink = screen.getByText(/dashboard/i);

    expect(dashboardLink).toBeInTheDocument();
    expect(dashboardLink.closest("a")).toHaveAttribute("href", "/");
  });

  it("should have an 'add project' link", () => {
    render(<MockSidebarTest />);
    const addProjectLink = screen.getByText(/add project/i);

    expect(addProjectLink).toBeInTheDocument();
    expect(addProjectLink.closest("a")).toHaveAttribute("href", "/create");
  });
});
