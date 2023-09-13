import React from "react";
import { NavLink } from "react-router-dom";
import { LANG } from "../../constants";
import { withLang } from "../HOCs";

const NavMenu = (props) => {
  const { lang } = props;
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

export default withLang(NavMenu);
