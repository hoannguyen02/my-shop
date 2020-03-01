import React from "react";
import { NavLink } from "react-router-dom";
import "./nav-links.style.scss";

const NavLinksComponent = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Shop</NavLink>
      </li>
      <li>
        <NavLink to="/">SignIn</NavLink>
      </li>
      <li>
        <NavLink to="/">Register</NavLink>
      </li>
    </ul>
  );
};

export default NavLinksComponent;
