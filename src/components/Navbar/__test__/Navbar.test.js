import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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
    it('should have render a navbar', () => {
        render(<MockNavbar />)
        const navbar = screen.getByRole('navigation')
        expect(navbar).toBeInTheDocument()
    });

    it('should have render a logo', () => {
        render(<MockNavbar />)
        const logo = screen.getByRole('img', { name: /dojo\-logo/i })
        expect(logo).toBeInTheDocument()
    });

    it('should have render a heading', () => {
        render(<MockNavbar />)
        const theDojoHeading = screen.getByText(/the dojo/i)
        expect(theDojoHeading).toBeInTheDocument()
    });

    it('should have render a login button', () => {
        render(<MockNavbar />)
        const loginLink = screen.getByRole('link', {  name: /login/i})
        expect(loginLink).toBeInTheDocument()
    });

    it('should have render a signup button', () => {
        render(<MockNavbar />)
        const loginLink = screen.getByRole('link', {  name: /Signup/i})
        expect(loginLink).toBeInTheDocument()
    });
});

