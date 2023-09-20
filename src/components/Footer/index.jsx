import React, { useContext } from "react";
import cx from "classnames";
import { THEMES } from "../../constants";
import LangSwitch from "../LangSwitch";
import styles from "./Footer.module.scss";
import { ThemeContext } from "../../contexts";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const classes = cx(styles.container, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK
  });
  return (
    <div className={classes}>
      <div>&copy;2023</div>
      <LangSwitch />
    </div>
  );
};

export default Footer;
