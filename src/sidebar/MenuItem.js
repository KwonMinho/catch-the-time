import React from "react";
import { useState } from "react";

function MenuItem({ title, icon, to, subMenus, inactive, onClick }) {
  const [expand, setExpand] = useState(false);

  const onSubMenu = () => {
    setExpand(!expand);
  };

  return (
    <div>
      <li onClick={onClick}>
        <a onClick={onSubMenu} className="menu-item">
          <div className="menu-icon">{icon}</div>
          <div className="menu-title">{inactive ? null : title}</div>
        </a>
      </li>
      {inactive
        ? null
        : subMenus.map((subTitle) => {
            return (
              <ul
                key={subTitle}
                className={`sub-menu ${expand ? "active" : ""}`}
              >
                <li>
                  <a>{subTitle}</a>
                </li>
              </ul>
            );
          })}
    </div>
  );
}

export default MenuItem;
