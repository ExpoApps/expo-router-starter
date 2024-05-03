import React from 'react';

type Theme = 'light' | 'dark';

export const ThemeContext = React.createContext({
  theme: 'light' as Theme,
  setTheme: (_theme: Theme) => {},
});