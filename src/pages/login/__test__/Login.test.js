import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../Login";
import { AuthContextProvider } from "../../../context/AuthContext";

const MockLoginForm = () => {
  return (
    <AuthContextProvider>
      <Login />
    </AuthContextProvider>
  );
};

describe("Login", () => {
  it('should render the "Log in" heading', async () => {
    await act(async () => render(<MockLoginForm />));
    const loginHeading = screen.getByText("Log in");
    expect(loginHeading).toBeInTheDocument();
    expect(loginHeading).toContainHTML("h2");
  });
});

describe("Email input field", () => {
  it("Should have an Email heading", async () => {
    await act(async () => render(<MockLoginForm />));
    const emailHeading = screen.getByText("Email:");
    expect(emailHeading).toBeInTheDocument();
    expect(emailHeading).toContainHTML("span");
  });

  it("Should have an Email input Field", async () => {
    await act(async () => render(<MockLoginForm />));
    const emailInputField = screen.getByTitle("email");
    expect(emailInputField).toBeInTheDocument();
    expect(emailInputField).toContainHTML("input");
    expect(emailInputField).toHaveAttribute("required");
    expect(emailInputField).toHaveAttribute("type", "email");
  });

  it("Email input should change on typing", async () => {
    await act(async () => render(<MockLoginForm />));
    const emailInputField = screen.getByTitle("email");
    fireEvent.change(emailInputField, {
      target: { value: "testemail@gmail.com" },
    });
    expect(emailInputField.value).toBe("testemail@gmail.com");
  });
});

describe("Password input field", () => {
  it("Should havean Password heading", async () => {
    await act(async () => render(<MockLoginForm />));
    const passwordHeading = screen.getByText("Password:");
    expect(passwordHeading).toBeInTheDocument();
    expect(passwordHeading).toContainHTML("span");
  });
  it("Should havean Password input Field", async () => {
    await act(async () => render(<MockLoginForm />));
    const passwordInputField = screen.getByTitle("password");
    expect(passwordInputField).toBeInTheDocument();
    expect(passwordInputField).toContainHTML("input");
    expect(passwordInputField).toHaveAttribute("required");
    expect(passwordInputField).toHaveAttribute("type", "password");
  });

  it("Password input change based on typing", async () => {
    await act(async () => render(<MockLoginForm />));
    const passwordInputField = screen.getByTitle("password");
    fireEvent.change(passwordInputField, {
      target: { value: "password123456" },
    });
    expect(passwordInputField.value).toBe("password123456");
  });
});

describe("Login Button", () => {
  it("Should have a Button", async () => {
    await act(async () => render(<MockLoginForm />));
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Login");
    expect(button).toBeInTheDocument();
    expect(button).toContainHTML("button");
    expect(button).toHaveAttribute("class", "btn");
  });
});

describe("Submission", () => {
  it("Email and password inputs should be blank after submission", async () => {
    await act(async () => render(<MockLoginForm />));
    const emailInputField = screen.getByTitle("email");
    const passwordInputField = screen.getByTitle("password");
    const button = screen.getByRole("button");

    fireEvent.change(emailInputField, {
      target: { value: "testemail@gmail.com" },
    });
    fireEvent.change(passwordInputField, {
      target: { value: "password123456" },
    });
    fireEvent.click(button);

    expect(emailInputField.value).toBe("");
    expect(passwordInputField.value).toBe("");
  });
});
