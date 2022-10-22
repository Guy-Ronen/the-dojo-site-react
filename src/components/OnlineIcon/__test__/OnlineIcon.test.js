import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OnlineIcon from '../OnlineIcon';



afterEach(cleanup)


describe("Online Icon", () => {
    const isOnline = true
    it('Online Icon must be green when user is online', () => {
        render(<OnlineIcon isOnline={isOnline} />)
        const userOnline = screen.getByTitle('icon-true')
        expect(userOnline).toBeInTheDocument()
        expect(userOnline).toHaveStyle("background: rgb(14, 187, 80)")
        expect(userOnline).toHaveAttribute('class', 'online-user')
    });


    it('Online Icon must be light grey when user is offline', () => {
        const isOnline = false
        render(<OnlineIcon isOnline={isOnline} />)
        const userOffline = screen.getByTitle('icon-false')
        expect(userOffline).toBeInTheDocument()
        expect(userOffline).toHaveStyle("background: lightgrey")
        expect(userOffline).toHaveAttribute('class', 'offline-user')
    });
});
