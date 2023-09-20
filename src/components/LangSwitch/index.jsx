import React, { useContext } from "react";
import { LangContext } from "../../contexts";

const LangSwitch = () => {
  const { lang, changeLang } = useContext(LangContext);

  return (
    <div>
      <button onClick={() => changeLang("UA")}>UA</button>
      <button onClick={() => changeLang("ENG")}>ENG</button>
    </div>
  );
};

export default LangSwitch;
