import React, { createContext, useState } from 'react';

export const IsDarkContext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const value = {
    theme,
    setTheme,
  };
  return <IsDarkContext value={value}>{children}</IsDarkContext>;
};

export default ThemeContext;
