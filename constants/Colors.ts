import { useTheme } from "@/context/ThemeContext";

const white = '#fff';
const black = '#000';

const darkColors = {
  background: "#181818",
  surface: "#242424",
  shadow: "#333333",  
  text: white,
  brand: "orange", 
  gray: "#757575", 
}

const lightColors = {
  background: "#F5F5F5",
  surface: white,
  shadow: "#BBBBBB",
  text: black,
  brand: "orange",
  gray: "#BBBBBB",
}

export function useColors() {
  const { theme } = useTheme();
  return theme === 'dark' ? darkColors : lightColors
}

