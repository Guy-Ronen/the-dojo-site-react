import "../OnlineUsers.css";
import Avatar from "../../Avatar/Avatar";
import OnlineIcon from "../../OnlineIcon/OnlineIcon";

export default function MockOnlineUsers({ props }) {
  return (
    <div className="user-list">
      <h2>All Users</h2>
      {props.error && <div>{props.error}</div>}
      {props.users &&
        props.users.map((user) => (
          <div key={user.id} className="user-list-item">
            <OnlineIcon isOnline={user.online} />
            <span>{user.displayName}</span>
            <Avatar src={user.photoURL} />
          </div>
        ))}
    </div>
  );
}
