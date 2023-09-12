import React from "react";
import CardUser from "../../components/CardSection/CardUser";
import { LANG } from "../../constants";
import { LangContext } from "../../contexts";

const Home = () => {
  const render = ([lang, changeLang]) => {
    return (
      <div>
        <h1>{lang === LANG.UA ? "Домашня" : "Home"}</h1>
        <CardUser />
      </div>
    );
  };
  return <LangContext.Consumer>{render}</LangContext.Consumer>;
};

export default Home;
