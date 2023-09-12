import React from 'react';
import { ThemeContext } from '../../contexts';

const SwitchTheme = () => {
  const render = ([theme, changeTheme]) => {
    return <button onClick={changeTheme}>switch Theme</button>;
  };
  return <ThemeContext.Consumer>{render}</ThemeContext.Consumer>;
};

export default SwitchTheme;
