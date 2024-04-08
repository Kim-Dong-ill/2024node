import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-primary">
        <div className="container d-flex justify-content-between">
          <h1>로고</h1>
          <ul className="topMenu d-flex ">
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/com">COMPANY</NavLink>
            </li>
            <li>
              <NavLink to="/pro">PRODUCT</NavLink>
            </li>
            <li>
              <NavLink to="/comm">COMMUNITY</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
