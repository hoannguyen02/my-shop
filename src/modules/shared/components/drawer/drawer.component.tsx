import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import NavLinksComponent from "../nav-links/nav-links.component";
import "./drawer.style.scss";

type DrawerType = {
  show: boolean;
  onClick: () => void;
};

const DrawerComponent = ({ show, onClick }: DrawerType) => {
  const drawer = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="drawer" onClick={onClick}>
        <nav className="drawer-nav-links">
          <NavLinksComponent />
        </nav>
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    drawer,
    document.getElementById("drawer") as Element
  );
};

export default DrawerComponent;
