import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav>
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">contacts</NavLink>
            </li>
            <li>
              Common: 
              <ul>
                <li>
                  <NavLink to="/commonblock/one">one</NavLink>
                </li>
                <li>
                  <NavLink to="/commonblock/two">two</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
  );
}

export default NavMenu;
