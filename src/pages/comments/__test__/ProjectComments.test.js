import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { timestamp } from "../../../firebase/config";

import "@testing-library/jest-dom";

import { AuthContextProvider } from "../../../context/AuthContext";
import ProjectComments from "../ProjectComments";

const MockProjectComments = () => {
   const mockUser = {
        displayName: 'guy2',
        online: true,
        photoUrl: 'photoUrl'
    }
    
    const mockProject = {
        assignedUsersList: [],
        category: 'design',
        comments: [
            {
            content: "so excited",
            createdAt: timestamp.fromDate(new Date()),
            displayName: mockUser.displayName,
            id: Math.random(),
            photoUrl: 'photoUrl'
        }, 
        {
            content: "wow!!!",
            createdAt: timestamp.fromDate(new Date()),
            displayName: mockUser.displayName,
            id: Math.random(),
            photoUrl: 'photoUrl'
        }]
    }
    return (
        <AuthContextProvider>
            <ProjectComments project={mockProject} />
        </AuthContextProvider>
    );
};
describe("Project Comments", () => {
    it('should render the project comments', () => {
        render(<MockProjectComments />);
        const projectComments = screen.getByText('Project Comments')
        expect(projectComments.length).toBe(2)
    });
});