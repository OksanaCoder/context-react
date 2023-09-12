import React from "react";
import { NavLink } from "react-router-dom";
import { LANG } from "../../constants";
import { LangContext } from "../../contexts";

const NavMenu = () => {
  const render = ([lang]) => {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">{lang === LANG.UA ? "головна" : "home"}</NavLink>
          </li>
          <li>
            <NavLink to="/users">
              {lang === LANG.UA ? "користувачі" : "users"}
            </NavLink>
          </li>
          <li>
            <NavLink to="/loader">
              {lang === LANG.UA ? "лоадер" : "loader"}
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  };

  return <LangContext.Consumer>{render}</LangContext.Consumer>;
};
export default NavMenu;
