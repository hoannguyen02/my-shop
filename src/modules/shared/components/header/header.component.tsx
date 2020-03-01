import React from "react";
import NavLinksComponent from "../nav-links/nav-links.component";
import "./header.style.scss";

const HeaderComponent = ({ onClick }: any) => {
  return (
    <header>
      <button className="side-drawer-button" onClick={onClick}>
        <i className="material-icons">menu</i>
      </button>
      <nav className="nav-links">
        <NavLinksComponent />
      </nav>
    </header>
  );
};

export default HeaderComponent;
