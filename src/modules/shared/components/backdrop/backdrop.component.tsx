import React from "react";
import ReactDOM from "react-dom";
import "./backdrop.style.scss";

const BackdropComponent = ({ onClick }: any) => {
  const backdrop = (
    <div className="backdrop" onClick={onClick} onKeyPress={onClick} />
  );
  return ReactDOM.createPortal(
    backdrop,
    document.getElementById("backdrop") as Element
  );
};

export default BackdropComponent;
