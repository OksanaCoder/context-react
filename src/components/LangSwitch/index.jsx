import React from "react";
import { withLang } from "../HOCs";

const LangSwitch = (props) => {
  const { lang, changeLang } = props;

  return (
    <div>
      <button
        onClick={() => {
          changeLang("UA");
        }}
      >
        UA
      </button>
      <button onClick={() => changeLang("ENG")}>ENG</button>
    </div>
  );
};

export default withLang(LangSwitch);
