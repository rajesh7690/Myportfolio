import { createContext, useEffect, useState } from "react";

function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem('data-theme');
  const hasPersistedPreference = typeof persistedColorPreference === 'string';

  if (hasPersistedPreference) return persistedColorPreference;

  const mediaQueryPreference = window.matchMedia('(prefers-color-scheme: dark)');
  const hasMediaQueryPreference = typeof mediaQueryPreference === 'boolean';

  if (hasMediaQueryPreference) 
    return mediaQueryPreference ? 'dark' : 'light';

  return 'light';
}

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, rawSetTheme] = useState(getInitialColorMode());

  const setTheme = (value) => {
    rawSetTheme(value);
    document.firstElementChild.setAttribute('data-theme', value);
    window.localStorage.setItem('data-theme', value);
  };

  useEffect(() => {
    setTheme(theme);
    // eslint-disable-next-line
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  );
}