//React stuff
import React from "react";
import { NavLink } from "react-router-dom";

//styles and images
import "../Sidebar.css";
import User from "../../../assets/user.svg";

export default function AccountIcon() {
  return (
    <li className="list-item">
      <NavLink to="/account">
        <img src={User} alt="user-icon" />
        <span>Account</span>
      </NavLink>
    </li>
  );
}
