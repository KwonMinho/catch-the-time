import React from "react";
import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import { SidebarMenuData } from "./MenuData";

import logo from "../assets/angler.png";
import toogleCloseIcon from "../assets/menu-toggle-close.png";
import toogleOpenIcon from "../assets/menu-toggle-open.png";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

//tmp
import user from "../assets/user.jpeg";

function SideMenu({ onCollapse }) {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    onCollapse(inactive);
  }, [inactive]);

  const openSideMenu = () => {
    setInactive(false);
  };

  return (
    <div className={`side-menu ${inactive ? "inactive" : null}`}>
      <div className="top-section inactive">
        <div className="logo">
          <img src={logo} alt="logo" />
          {inactive ? null : <div id="logo-title">세월을 낚다</div>}
        </div>
        <div className="toggle-menu" onClick={() => setInactive(!inactive)}>
          <img
            className="toggle-menu-btn"
            alt="toogle-button"
            src={inactive ? toogleOpenIcon : toogleCloseIcon}
          />
        </div>
      </div>
      <div className="search-controller">
        <button className="search-btn">
          <SearchTwoToneIcon className="search-icon" />
        </button>
        <input type="text" placeholder="검색" />
      </div>
      <div className="divider" />
      <div className="side-menu-profile">
        <div className="avatar">
          <img src={user} />
        </div>
        <div className="user-info">
          <h5>Kownminho</h5>
          <p>alsgh45@gg.com</p>
        </div>
      </div>
      <div className="main-menu">
        <ul>
          {SidebarMenuData.map((menu, id) => {
            return (
              <MenuItem
                key={id}
                title={menu.title}
                icon={menu.icon}
                to={menu.to}
                subMenus={menu.sub}
                inactive={inactive}
                onClick={openSideMenu}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
