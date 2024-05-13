import React, { useContext } from 'react';

export type Theme = 'light' | 'dark';
export type ColorTheme = 'neutral' | 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'cyan';

export const ThemeContext = React.createContext({
  theme: 'light' as Theme,
  setTheme: (_theme: Theme) => {},
  colorTheme: 'neutral' as ColorTheme,
  setColorTheme: (_colorTheme: ColorTheme) => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}