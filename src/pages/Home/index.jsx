import React from "react";
import CardUser from "../../components/CardSection/CardUser";
import { withLang } from "../../components/HOCs";
import { LANG } from "../../constants";

const Home = (props) => {
  const { lang } = props;
  return (
    <div>
      <h1>{lang === LANG.UA ? "Домашня" : "Home"}</h1>
      <CardUser />
    </div>
  );
};

export default withLang(Home);
