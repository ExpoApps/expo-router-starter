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
  background: black,
  header: "#111111",
  surface: "#222222",
  brand: "#444444",
  select: "#666666",
  selected: "#757575",
  text: white,
}

const lightColors = {
  background: white,
  header: "#F0F0F0",
  surface: "#E0E0E0",
  brand: "#BDBDBD",
  select: "#9E9E9E",
  selected: "#BBBBBB",
  text: black,
}

export function useColors() {
  const { theme } = useTheme();
  return theme === 'dark' ? darkColors : lightColors
}

