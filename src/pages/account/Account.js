import "./Account.css";
import { useState } from "react";
import { useQoutes } from "../../hooks/useQoutes";
import { useHistory } from "react-router-dom";
import { useUpdate } from "../../hooks/useUpdate";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useUploadThumbnail } from "../../hooks/useHandleFileUpload";

export default function Account() {
  const [displayName, setDisplayName] = useState("");
  const { thumbnail, thumbnailError, handleFileUpload } = useUploadThumbnail();

  const { user } = useAuthContext();
  const { qoute } = useQoutes();
  const history = useHistory();
  const { update, isPending, error } = useUpdate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update(displayName, thumbnail);
    history.push("/");
    setDisplayName("");
  };

  return (
    <div>
      <div className="account-summary">
        <div className="account-container">
          <div className="account-image">
            <img src={user.photoURL} alt="" />
          </div>
        </div>
        <h2 className="display-name">Display name: {user.displayName}</h2>
        <h4>{`\`${qoute.quote}\``}</h4>
        <h4>{`${qoute.author}, (${qoute.profession})`}</h4>

        <form onSubmit={handleSubmit} className="account-form">
          <h3>Update Account Details:</h3>
          <label>
            <span>Display Name:</span>
            <input
              title="displayName"
              required
              placeholder={`${user.displayName}...`}
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
          {!isPending && <button className="btn">Update Account</button>}

          {isPending && (
            <button disabled className="btn">
              updating...
            </button>
          )}

          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
}
