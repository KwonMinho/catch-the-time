import React from "react";
import logo from "../assets/angler.png";
import toogleCloseLogo from "../assets/menu-toggle-close.png";
import toogleOpenLogo from "../assets/menu-toggle-open.png";

import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import HomeIcon from "@mui/icons-material/Home";

import { useState } from "react";

function SideMenu() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className={`side-menu ${inactive ? "inactive" : null}`}>
      <div className="top-section inactive">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="toggle-menu" onClick={() => setInactive(!inactive)}>
          <img
            className="toggle-menu-btn"
            src={inactive ? toogleOpenLogo : toogleCloseLogo}
          />
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <SearchTwoToneIcon className="search-icon" />
        </button>
        <input type="text" placeholder="검색"></input>
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          <li>
            <a className="menu-item">
              <HomeIcon className="menu-icon" />홈
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
