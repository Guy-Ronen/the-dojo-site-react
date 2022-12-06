//React stuff
import React from "react";
import { NavLink } from "react-router-dom";

//styles and images
import "../Sidebar.css";
import AddIcon from "../../../assets/add_icon.svg";

export default function AddProjectIcon() {
  return (
    <li className="list-item">
      <NavLink to="/create">
        <img src={AddIcon} alt="add-icon" />
        <span>Add Project</span>
      </NavLink>
    </li>
  );
}
