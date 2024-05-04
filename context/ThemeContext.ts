import React, { useContext } from 'react';

export type Theme = 'light' | 'dark' | 'green';

export const ThemeContext = React.createContext({
  theme: 'light' as Theme,
  setTheme: (_theme: Theme) => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}