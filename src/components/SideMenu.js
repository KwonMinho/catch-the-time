import React from "react";
import logo from "../assets/banner-logo.png";

import MenuOpenTwoToneIcon from "@mui/icons-material/MenuOpenTwoTone";

function SideMenu() {
  return (
    <div className="side-menu">
      <div className="top-section">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="toggle-menu">
          <MenuOpenTwoToneIcon className="toggle-menu__item" />
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
