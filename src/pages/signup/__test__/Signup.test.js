import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";

import Signup from "../Signup";
import { AuthContextProvider } from "../../../context/AuthContext";

const MockSignupForm = () => {
  return (
    <AuthContextProvider>
      <Signup />
    </AuthContextProvider>
  );
};
describe("Signup", () => {
  it('should render the "Log in" heading', async () => {
    await act(async () => render(<MockSignupForm />));
    const SignupHeading = screen.getByText("Sign Up");
    expect(SignupHeading).toBeInTheDocument();
    expect(SignupHeading).toContainHTML("h2");
  });
});

describe("Email input field", () => {
  it("Should have an Email heading", async () => {
    await act(async () => render(<MockSignupForm />));
    const emailHeading = screen.getByText("Email:");
    expect(emailHeading).toBeInTheDocument();
    expect(emailHeading).toContainHTML("span");
  });

  it("Should have an Email input Field", async () => {
    await act(async () => render(<MockSignupForm />));
    const emailInputField = screen.getByTitle("email");
    expect(emailInputField).toBeInTheDocument();
    expect(emailInputField).toContainHTML("input");
    expect(emailInputField).toHaveAttribute("required");
    expect(emailInputField).toHaveAttribute("type", "email");
  });

  it("Email input should change on typing", async () => {
    await act(async () => render(<MockSignupForm />));
    const emailInputField = screen.getByTitle("email");
    fireEvent.change(emailInputField, {
      target: { value: "testemail@gmail.com" },
    });
    expect(emailInputField.value).toBe("testemail@gmail.com");
  });
});

describe("Password input field", () => {
  it("Should havean Password heading", async () => {
    await act(async () => render(<MockSignupForm />));
    const passwordHeading = screen.getByText("Password:");
    expect(passwordHeading).toBeInTheDocument();
    expect(passwordHeading).toContainHTML("span");
  });
  it("Should havean Password input Field", async () => {
    await act(async () => render(<MockSignupForm />));
    const passwordInputField = screen.getByTitle("password");
    expect(passwordInputField).toBeInTheDocument();
    expect(passwordInputField).toContainHTML("input");
    expect(passwordInputField).toHaveAttribute("required");
    expect(passwordInputField).toHaveAttribute("type", "password");
  });

  it("Password input change based on typing", async () => {
    await act(async () => render(<MockSignupForm />));
    const passwordInputField = screen.getByTitle("password");
    fireEvent.change(passwordInputField, {
      target: { value: "password123456" },
    });
    expect(passwordInputField.value).toBe("password123456");
  });
});

describe("DisplayName input field", () => {
  it("Should havean DisplayName heading", async () => {
    await act(async () => render(<MockSignupForm />));
    const displayNameHeading = screen.getByText("Display Name:");
    expect(displayNameHeading).toBeInTheDocument();
    expect(displayNameHeading).toContainHTML("span");
  });
  it("Should havean DisplayName input Field", async () => {
    await act(async () => render(<MockSignupForm />));
    const displayNameInputField = screen.getByTitle("displayName");
    expect(displayNameInputField).toBeInTheDocument();
    expect(displayNameInputField).toContainHTML("input");
    expect(displayNameInputField).toHaveAttribute("required");
    expect(displayNameInputField).toHaveAttribute("type", "text");
  });

  it("DisplayName input change based on typing", async () => {
    await act(async () => render(<MockSignupForm />));
    const displayNameInputField = screen.getByTitle("displayName");
    fireEvent.change(displayNameInputField, { target: { value: "guy8" } });
    expect(displayNameInputField.value).toBe("guy8");
  });
});

describe("Profile thumbnail", () => {
  it("Should have Profile Thumbnail heading", async () => {
    await act(async () => render(<MockSignupForm />));
    const profileThumbnailHeading = screen.getByText("Profile Thumbnail:");
    expect(profileThumbnailHeading).toBeInTheDocument();
    expect(profileThumbnailHeading).toContainHTML("span");
  });

  it("Should havean Profile Thumbnail input Field", async () => {
    await act(async () => render(<MockSignupForm />));
    const profileThumbnailInputField = screen.getByTitle("profileThumbnail");
    expect(profileThumbnailInputField).toBeInTheDocument();
    expect(profileThumbnailInputField).toContainHTML("input");
    expect(profileThumbnailInputField).toHaveAttribute("required");
    expect(profileThumbnailInputField).toHaveAttribute("type", "file");
  });

  it("ProfileThumbnail input change based on uploading", async () => {
    await act(async () => render(<MockSignupForm />));
    const profileThumbnailInputField = screen.getByTitle("profileThumbnail");
    const mockFile = new File(["hello"], "hello.png", {
      type: "image/png",
      size: 5000,
      name: "hello-world",
    });
    await waitFor(() =>
      fireEvent.change(profileThumbnailInputField, {
        target: { files: [mockFile] },
      })
    );
    expect(profileThumbnailInputField.files[0].name).toBe("hello.png");
  });
});

describe("Signup Button", () => {
  it("Should have a Button", async () => {
    await act(async () => render(<MockSignupForm />));
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Signup");
    expect(button).toBeInTheDocument();
    expect(button).toContainHTML("button");
    expect(button).toHaveAttribute("class", "btn");
  });
});

describe("Submission", () => {
  it("Email and password inputs should be blank after submission", async () => {
    await act(async () => render(<MockSignupForm />));
    const emailInputField = screen.getByTitle("email");
    const passwordInputField = screen.getByTitle("password");
    const profileThumbnailInputField = screen.getByTitle("profileThumbnail");
    const displayNameInputField = screen.getByTitle("displayName");
    const button = screen.getByRole("button");

    fireEvent.change(emailInputField, {
      target: { value: "testemail@gmail.com" },
    });
    fireEvent.change(passwordInputField, {
      target: { value: "password123456" },
    });
    fireEvent.change(displayNameInputField, { target: { value: "guy8" } });

    const mockFile = new File(["hello"], "hello.png", {
      type: "image/png",
      size: 5000,
      name: "hello-world",
    });
    await waitFor(() =>
      fireEvent.change(profileThumbnailInputField, {
        target: { files: [mockFile] },
      })
    );
    fireEvent.click(button);
    console.log(profileThumbnailInputField.files[0]);
    expect(emailInputField.value).toBe("");
    expect(passwordInputField.value).toBe("");
    expect(displayNameInputField.value).toBe("");
    expect(profileThumbnailInputField.files[0].name).toBe("hello.png");
  });
});
