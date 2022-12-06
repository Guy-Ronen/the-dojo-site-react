// Context
import { useAuthContext } from "../../hooks/useAuthContext";

// Styles and images
import "./Sidebar.css";
import Avatar from "../Avatar/Avatar";

// Icons
import AccountIcon from "./icons/AccountIcon";
import DashboardIcon from "./icons/DashboardIcon";
import AddProjectIcon from "./icons/AddProjectIcon";

export default function Sidebar() {
  const { user } = useAuthContext();
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={user.photoURL} />
          <p>Hey {user.displayName}</p>
        </div>

        <nav className="links">
          <ul className="links-list">
            <AccountIcon />
            <DashboardIcon />
            <AddProjectIcon />
          </ul>
        </nav>
      </div>
    </div>
  );
}
