import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OnlineUsers from "../OnlineUsers";
import { AuthContextProvider } from "../../../context/AuthContext";

const MockOnlineUsers = () => {
    return (
        <AuthContextProvider>
            <OnlineUsers />
        </AuthContextProvider>
    );
};


describe("Online Users", () => {
    it('should have render a navbar', () => {
        render(<MockOnlineUsers />)
        screen.debug()
    });
});

