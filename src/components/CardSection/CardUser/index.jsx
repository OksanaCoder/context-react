import React, { useContext } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./CardUser.module.scss";
import { ThemeContext, UserContext } from "../../../contexts";
import { THEMES } from "../../../constants";

const CardUser = (props) => {
  const {
    user: { id, firstName, lastName, isSelect, avatar },
    selectorUser
  } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  const classes = cx(styles.container, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK
  });
  const selectHandle = () => {
    selectorUser(id);
  };
  const stylesSelect = { backgroundColor: isSelect ? "pink" : "grey" };

  return (
    <article onClick={selectHandle} className={classes}>
      <h3 style={stylesSelect}>
        {firstName} {lastName}
      </h3>
      <img src={avatar} alt="" />
    </article>
  );
};

export default CardUser;
