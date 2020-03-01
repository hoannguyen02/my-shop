import React, { useState } from "react";
import BackdropComponent from "../backdrop/backdrop.component";
import DrawerComponent from "../drawer/drawer.component";
import HeaderComponent from "../header/header.component";

const NavigationComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const showDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {isDrawerOpen && <BackdropComponent onClick={closeDrawer} />}
      <DrawerComponent show={isDrawerOpen} onClick={closeDrawer} />
      <HeaderComponent onClick={showDrawer} />
    </>
  );
};

export default NavigationComponent;
