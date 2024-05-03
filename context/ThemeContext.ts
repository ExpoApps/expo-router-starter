import React from 'react';

type Theme = 'light' | 'dark' | null | undefined;

export const ThemeContext = React.createContext({
  theme: 'light' as Theme,
  setTheme: (theme: Theme) => {},
});