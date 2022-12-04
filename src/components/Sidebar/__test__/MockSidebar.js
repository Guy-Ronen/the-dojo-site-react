//styles and images
import "../Sidebar.css";
import Avatar from "../../Avatar/Avatar";

// Icons
import AccountIcon from "../icons/AccountIcon";
import AddProjectIcon from "../icons/AddProjectIcon";
import DashboardIcon from "../icons/DashboardIcon";


export default function MockSidebar({ mockUser }) {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={mockUser.photoURL} />
          <p>Hey {mockUser.displayName}</p>
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
