import { useTheme } from "@/context/ThemeContext";

const darkColors = {
  background: "#181818",
  surface: "#242424",
  text: "#FFFFFF",
  brand: "orange", 
  gray: "#555555", 
}

const lightColors = {
  background: "#F5F5F5",
  surface: "#FFFFFF",
  text: "#000000",
  brand: "orange",
  gray: "#BBBBBB",
}

export function useColors() {
  const { theme } = useTheme();
  return theme === 'dark' ? darkColors : lightColors
}

