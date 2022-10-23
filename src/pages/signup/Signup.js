import "./Signup.css";

import { useState } from "react";

// hooks
import { useSignup } from "../../hooks/useSignup";

export default function Create() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);
  const { signup, isPending, error } = useSignup();

  const handleFileUpload = (e) => {
    setThumbnailError(null);
    let selected = e.target.files[0];
    if (!selected) {
      setThumbnailError("Please Select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Please Select an image");
      return;
    }
    if (selected.size > 200000) {
      setThumbnailError("File size must be under 200kb");
      return;
    }
    setThumbnail(selected);
    console.log("thumbnail updated");
    setThumbnailError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, thumbnail);
    setEmail("")
    setPassword("")
    setDisplayName("")
    setThumbnail(null)
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Sign Up</h2>
      <label>
        <span>Email:</span>
        <input
          title='email'
          required
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          title='password'
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Display Name:</span>
        <input
          title='displayName'
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
        {thumbnailError &&
          <div className="error">{thumbnailError}</div>
        }
      </label>

      {!isPending &&
        <button className="btn">Signup</button>
      }

      {isPending && (
        <button disabled className="btn">
          loading
        </button>
      )}

      {error
        && <div className="error">{error}</div>
      }
    </form>
  );
}
