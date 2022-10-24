import "./OnlineUsers.css";
import Avatar from "../Avatar/Avatar";
import OnlineIcon from "../OnlineIcon/OnlineIcon";
import { useCollection } from "../../hooks/useCollection";

export default function OnlineUsers() {
  const { error, documents } = useCollection("users");

  return (
    <div className="user-list">
      <h2>All Users</h2>
      {error && <div>{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className="user-list-item">
            <OnlineIcon isOnline={user.online} />
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}
