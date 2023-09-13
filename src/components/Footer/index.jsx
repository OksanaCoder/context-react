import React from "react";
import cx from "classnames";
import { THEMES } from "../../constants";
import LangSwitch from "../LangSwitch";
import styles from "./Footer.module.scss";
import { withLang, withTheme } from "../HOCs";

const Footer = (props) => {
  const { theme } = props;

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

export default withTheme(withLang(Footer));
