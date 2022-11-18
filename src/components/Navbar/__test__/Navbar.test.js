import { render, screen, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Navbar from "../Navbar";
import { AuthContextProvider } from "../../../context/AuthContext";

const MockNavbar = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </AuthContextProvider>
  );
};

describe("Navbar", () => {
  it("should have render a navbar", async () => {
    await act(async () => render(<MockNavbar />));
    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });

  it("should have render a logo", async () => {
    await act(async () => render(<MockNavbar />));
    const logo = screen.getByRole("img", { name: /dojo\-logo/i });
    expect(logo).toBeInTheDocument();
  });

  it("should have render a heading", async () => {
    await act(async () => render(<MockNavbar />));
    const theDojoHeading = screen.getByText(/the dojo/i);
    expect(theDojoHeading).toBeInTheDocument();
  });

  it("should have render a login button", async () => {
    await act(async () => render(<MockNavbar />));
    const loginLink = screen.getByRole("link", { name: /login/i });
    expect(loginLink).toBeInTheDocument();
  });

  it("should have render a signup button", async () => {
    await act(async () => render(<MockNavbar />));
    const loginLink = screen.getByRole("link", { name: /Signup/i });
    expect(loginLink).toBeInTheDocument();
  });
});
