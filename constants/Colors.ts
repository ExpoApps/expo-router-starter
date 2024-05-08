import { useTheme } from "@/context/ThemeContext";

const white = '#fff';
const black = '#000';
const grey = '#8E8E8F';
const blue = '#2f95dc';

const palette = {
  primary95: 'rgb(246, 237, 255)',
  primary90: 'rgb(234, 221, 255)',
  primary80: 'rgb(208, 188, 255)',
  primary70: 'rgb(182, 157, 248)',
  primary60: 'rgb(154, 130, 219)',
  primary50: 'rgb(127, 103, 190)',
  primary40: 'rgb(103, 80, 164)',
  primary30: 'rgb(79, 55, 139)',
  primary20: 'rgb(56, 30, 114)',
  primary10: 'rgb(33, 0, 93)',
}

const darkColors = {
  backgroundColor: palette.primary10
}

const lightColors = {
  backgroundColor: palette.primary90
}

export function useColors() {
  const { theme } = useTheme();
  return theme === 'dark' ? darkColors : lightColors
}

export default {
  light: {
    text: black,
    background: white,
    tabIconDefault: grey,
    tabIconSelected: blue,
    tabBgColor: white,
    headerBgColor: white, 
    borderColor: '#D8D8D8',
    calendar: {
      backgroundColor: '#f3f3f3',
      calendarBackground: '#fcfcfc',
      selectedColor: blue,
      arrowColor: blue,
    }
  },
  dark: {
    text: white,
    background: black,
    tabIconDefault: grey,
    tabIconSelected: blue,
    tabBgColor: black,
    headerBgColor: black,
    borderColor: '#D8D8D8',
    calendar: {
      backgroundColor: '#0c0c0c',
      calendarBackground: '#030303',
      selectedColor: blue,
      arrowColor: blue,
    }
  },
};
