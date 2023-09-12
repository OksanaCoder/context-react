import React from 'react';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import { LightMode, DarkMode } from '@mui/icons-material';
import { ThemeContext } from '../../contexts';
import { THEMES } from '../../constants';

const SwitchTheme = () => {
  const render = ([theme, changeTheme]) => {
    return (
      <div onClick={changeTheme}>
        {theme === THEMES.LIGHT ? <DarkMode /> : <LightMode />}
      </div>
    );
  };
  return <ThemeContext.Consumer>{render}</ThemeContext.Consumer>;
};

export default SwitchTheme;
