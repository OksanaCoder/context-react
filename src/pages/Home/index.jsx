import React, { useContext } from "react";
import CardUser from "../../components/CardSection/CardUser";
import { LANG } from "../../constants";
import { LangContext } from "../../contexts";

const Home = () => {
  const { lang } = useContext(LangContext);
  return (
    <div>
      <h1>{lang === LANG.UA ? "Домашня" : "Home"}</h1>
      <CardUser />
    </div>
  );
};

export default Home;
