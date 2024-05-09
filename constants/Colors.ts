import { useTheme } from "@/context/ThemeContext";

const white = '#fff';
const black = '#000';

/*const palette = {
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
}*/

const darkColors = {
  background: "#2F2F2F",
  header: "#111111", //brand
  surface: "#414141",
  brand: "#444444", //other
  select: "#666666", //accent 
  selected: "#757575", //brand
  shadow: "#2B2B2B",  
  text: white,
}

const lightColors = {
  background: "#F5F5F5",
  header: "#F0F0F0",
  surface: white,
  brand: "#BDBDBD",
  select: "#9E9E9E",
  selected: "#BBBBBB",
  shadow: "#BBBBBB",
  text: black,
}

export function useColors() {
  const { theme } = useTheme();
  return theme === 'dark' ? darkColors : lightColors
}

