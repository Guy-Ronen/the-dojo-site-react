import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockProject from "./MockProject";
import { projectProps } from "../../../test/projectProps";

afterEach(cleanup);

describe("Project summary", () => {
  it("should have render project", () => {
    const { baseElement } = render(<MockProject props={projectProps} />);
    expect(baseElement).toBeInTheDocument();
  });
  it("should have `Dessigning the logo` as the title ", () => {
    render(<MockProject props={projectProps} />);
    const header = screen.getByText(/designing the logo/i);
    expect(header).toBeInTheDocument();
  });
  it("should display who it was created by (guy1)", () => {
    render(<MockProject props={projectProps} />);
    const createdBy = screen.getByText(/project created by: guy1/i);
    expect(createdBy).toHaveTextContent("guy1");
  });
  it("should have the date its due by", () => {
    render(<MockProject props={projectProps} />);
    const projectDueDate = screen.getByText(/Project due by: Sun Jan 01 2023/i);
    expect(projectDueDate).toHaveTextContent("Sun Jan 01 2023");
  });
  it("should have `blah blah blah` as a description", () => {
    render(<MockProject props={projectProps} />);
    const description = screen.getByText(/blah blah blah/i);
    expect(description).toHaveTextContent("blah blah blah");
  });
  it("should have assinged users header", () => {
    render(<MockProject props={projectProps} />);
    const assignedToHeader = screen.getByText(/project is assigned to:/i);
    expect(assignedToHeader).toHaveTextContent("Project is assigned to:");
  });
  it("should have 2 users assigned to it", () => {
    const { container } = render(<MockProject props={projectProps} />);
    const assignedUsersList = container.getElementsByClassName("assinged-user");
    expect(assignedUsersList).toHaveLength(2);
  });
});

describe("Project comments", () => {
  it("should have a `Project Comments` header", () => {
    render(<MockProject props={projectProps} />);
    const commentsHeader = screen.getByText(/project comments/i);
    expect(commentsHeader).toHaveTextContent("Project Comments");
  });

  it("should have 2 comments", () => {
    const { container } = render(<MockProject props={projectProps} />);
    const projectComments = container.getElementsByClassName("project-comment");
    expect(projectComments).toHaveLength(2);
  });

  describe("Comment 1", () => {
    it("should have the name `guy1` as the displayname as the first comment", () => {
      render(<MockProject props={projectProps} />);
      const firstComment = screen.getAllByTestId(0);
      let guy1 = firstComment[0].getElementsByClassName("comment-author")[0];
      expect(guy1).toHaveTextContent("guy1");
    });
    it("should have created `less than a minute ago` ", () => {
      render(<MockProject props={projectProps} />);
      const firstComment = screen.getAllByTestId(0);
      let commentDate =
        firstComment[0].getElementsByClassName("comment-date")[0];
      expect(commentDate).toHaveTextContent("less than a minute ago");
    });
    it("should have `hello world` as its content", () => {
      render(<MockProject props={projectProps} />);
      const firstComment = screen.getAllByTestId(0);
      let commentContent =
        firstComment[0].getElementsByClassName("comment-content")[0];
      expect(commentContent).toHaveTextContent("hello world");
    });
    it("should have a delete button", () => {
      render(<MockProject props={projectProps} />);
      const firstComment = screen.getAllByTestId(0);
      let deleteButton =
        firstComment[0].getElementsByClassName("delete-comment-btn")[0];
      expect(deleteButton).toBeInTheDocument();
      expect(deleteButton).toContainHTML(
        '<button class="delete-comment-btn">X</button>'
      );
      expect(deleteButton).toHaveTextContent("X");
    });
  });

  describe("Comment 2", () => {
    it("should have the name `guy2` as the displayname as the first comment", () => {
      render(<MockProject props={projectProps} />);
      const secondComment = screen.getAllByTestId(1);
      let guy2 = secondComment[0].getElementsByClassName("comment-author")[0];
      expect(guy2).toHaveTextContent("guy2");
    });
    it("should have been created `less than a minute ago` ", () => {
      render(<MockProject props={projectProps} />);
      const secondComment = screen.getAllByTestId(1);
      let commentDate =
        secondComment[0].getElementsByClassName("comment-date")[0];
      expect(commentDate).toHaveTextContent("less than a minute ago");
    });
    it("should have `this is a second comment` as its content", () => {
      render(<MockProject props={projectProps} />);
      const secondComment = screen.getAllByTestId(1);
      let commentContent =
        secondComment[0].getElementsByClassName("comment-content")[0];
      expect(commentContent).toHaveTextContent("this is a second comment");
    });
    it("should NOT have a delete button", () => {
      render(<MockProject props={projectProps} />);
      const secondComment = screen.getAllByTestId(1);
      let deleteButton =
        secondComment[0].getElementsByClassName("delete-comment-btn")[0];
      expect(deleteButton).toBeFalsy();
    });
  });

  describe("Adding new comment", () => {
    it("should have `Add new comments` section", () => {
      render(<MockProject props={projectProps} />);
      const addANewCommentHeading = screen.getByText(/add new comment:/i);
      expect(addANewCommentHeading).toBeInTheDocument();
    });
    it("should have a textarea to write comments", () => {
      render(<MockProject props={projectProps} />);
      const newCommentTextbox = screen.getByRole("textbox", {
        name: /add new comment:/i,
      });
      expect(newCommentTextbox).toBeInTheDocument();
    });
    it("should have a button to submit comments", () => {
      render(<MockProject props={projectProps} />);
      const addNewCommentButton = screen.getByRole("button", {
        name: /add comment/i,
      });
      expect(addNewCommentButton).toBeInTheDocument();
    });

    // Adding new comment
    it("should add a new comment to the list that can be deleted", async () => {
      const { container } = render(<MockProject props={projectProps} />);
      const newCommentTextbox = screen.getByRole("textbox", {
        name: /add new comment:/i,
      });
      const addNewCommentButton = screen.getByRole("button", {
        name: /add comment/i,
      });
      await fireEvent.change(newCommentTextbox, {
        target: { value: "this is a third comment" },
      });
      await fireEvent.click(addNewCommentButton);

      // Should have three comments
      const projectComments =
        container.getElementsByClassName("project-comment");
      expect(projectComments).toHaveLength(3);

      // Should have a delete button as created by user
      const thirdComment = screen.getAllByTestId(2);
      let deleteButton =
        thirdComment[0].getElementsByClassName("delete-comment-btn")[0];
      expect(deleteButton).toBeInTheDocument();
      expect(deleteButton).toContainHTML(
        '<button class="delete-comment-btn">X</button>'
      );
      expect(deleteButton).toHaveTextContent("X");
    });
  });
});
