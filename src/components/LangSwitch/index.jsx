import React from "react";
import { LangContext } from "../../contexts";

const LangSwitch = () => {
  const render = ([lang, changeLang]) => {
    return (
      <>
        <button
          onClick={() => {
            changeLang("UA");
          }}
        >
          UA
        </button>
        <button onClick={() => changeLang("ENG")}>ENG</button>
      </>
    );
  };
  return <LangContext.Consumer>{render}</LangContext.Consumer>;
};

export default LangSwitch;
