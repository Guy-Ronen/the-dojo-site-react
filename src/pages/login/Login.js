import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Log in</h2>
      <label>
        <span>Email:</span>
        <input
          title="email"
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          title="password"
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!isPending && <button className="btn">Login</button>}
      {isPending && (
        <button disabled className="btn">
          Logging in...
        </button>
      )}
      {error && <div className="error">{error}</div>}
    </form>
  );
}
