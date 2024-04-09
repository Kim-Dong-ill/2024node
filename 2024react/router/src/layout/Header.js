import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <h1 className="logo">
          <NavLink to="/">Logo</NavLink>
        </h1>
        <div className="mainMenuWrap">
          <ul className="mainMenu">
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/company">COMPANY</NavLink>
            </li>
            <li>
              <NavLink to="/product">PRODUCT</NavLink>
            </li>
            <li>
              <NavLink to="/community">COMMUNITY</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
