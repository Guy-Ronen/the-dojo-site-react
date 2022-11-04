//React stuff
import { NavLink } from "react-router-dom";

//styles and images
import "../Sidebar.css";
import DashboardIcon from "../../../assets/dashboard_icon.svg";
import AddIcon from "../../../assets/add_icon.svg";
import User from "../../../assets/user.svg";
import Avatar from "../../Avatar/Avatar";

export default function MockSidebar({ mockUser }) {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          <Avatar src={mockUser.photoURL} />
          <p>Hey {mockUser.displayName}</p>
        </div>

        <nav className="links">
          <ul>
            <li>
              <NavLink to="/account">
                <img src={User} alt="user-icon" />
                <span>Account</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="dashboard-icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="add-icon" />
                <span>Add Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
