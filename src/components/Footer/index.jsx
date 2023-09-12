import React from "react";
import { LangContext } from "../../contexts";
import LangSwitch from "../LangSwitch";

const Footer = () => {
  const render = ([lang, changeLang]) => {
    return (
      <div>
        <div>&copy;2023</div>
        <LangSwitch />
      </div>
    );
  };
  return <LangContext.Consumer>{render}</LangContext.Consumer>;
};

export default Footer;
