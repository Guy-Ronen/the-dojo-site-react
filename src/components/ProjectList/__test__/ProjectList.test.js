import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Projects } from '../../../test/testUtils'
import ProjectList from "../ProjectList";

const MockProjectList = () => {
    return (
        <BrowserRouter>
            <ProjectList projects={Projects} />
        </BrowserRouter>
    );
};

const EmptyProjectList = () => {
    return (
        <BrowserRouter>
            <ProjectList projects={[]} />
        </BrowserRouter>
    );
};



describe("ProjectList", () => {
    it('should have render a ProjectList', () => {
        const projectList = render(<MockProjectList />)
        expect(projectList).toBeDefined()

    });

    it('Should have 2 projects', () => {
        render(<MockProjectList />)
        const ProjectList = screen.getAllByRole('link')
        expect(ProjectList).toHaveLength(2)
    });

    it('Should have a design the logo project', () => {
        render(<MockProjectList />)
        const project = screen.getByRole('link', { name: /Designing the logo Due by: Thu Nov 03 2022 avatar\-logo avatar\-logo/i })
        expect(project).toBeInTheDocument()
    });

    it('Should have a adding a footer project', () => {
        render(<MockProjectList />)
        const project = screen.getByRole('link', { name: /Adding a footer Due by: Thu Nov 03 2022 avatar\-logo avatar\-logo/i })
        expect(project).toBeInTheDocument()
    });

    it('Should render that theres no projects if empty', () => {
        const emptyProjectList = render(<EmptyProjectList />)
        const p = emptyProjectList.getByText('No Projects Yet!')
        expect(p).toBeInTheDocument()

    });
});

