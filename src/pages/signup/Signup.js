import "./Signup.css";

import { useState } from "react";

// hooks
import { useSignup } from "../../hooks/useSignup";
import { useUploadThumbnail } from "../../hooks/useUploadThumbnail";

export default function Create() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignup();
  const { thumbnail, thumbnailError, handleFileUpload } = useUploadThumbnail();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
    setEmail("");
    setPassword("");
    setDisplayName("");
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Sign Up</h2>
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
      <label>
        <span>Display Name:</span>
        <input
          title="displayName"
          required
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>Profile Thumbnail:</span>
        <input
          title="profileThumbnail"
          required
          type="file"
          onChange={handleFileUpload}
        />
        {thumbnailError && <div className="error">{thumbnailError}</div>}
      </label>

      {!isPending && <button className="btn">Signup</button>}

      {isPending && (
        <button disabled className="btn">
          loading
        </button>
      )}

      {error && <div className="error">{error}</div>}
    </form>
  );
}
