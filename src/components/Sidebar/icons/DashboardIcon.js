//React stuff
import React from "react";
import { NavLink } from "react-router-dom";

//styles and images
import "../Sidebar.css";
import Dashboard from "../../../assets/dashboard_icon.svg";

export default function AccountIcon() {
  return (
    <li className="list-item">
      <NavLink exact to="/">
        <img src={Dashboard} alt="dashboard-icon" />
        <span>Dashboard</span>
      </NavLink>
    </li>
  );
}
