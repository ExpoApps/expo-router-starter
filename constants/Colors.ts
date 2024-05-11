import { useTheme } from "@/context/ThemeContext";

const lightThemes = [
  {
    name: 'neutral',
    colors: {
      background: "#F5F5F5",
      surface: "#FFFFFF",
    },
  },
  {
    name: 'red',
    colors: {
      background: "#FFBBBB",
      surface: "#FFDDDD",
    },
  },
  {
    name: 'green',
    colors: {
      background: "#BBFFBB",
      surface: "#DDFFDD",
    },
  },
  {
    name: 'blue',
    colors: {
      background: "#BBBBFF",
      surface: "#DDDDFF",
    },
  },
  {
    name: 'yellow',
    colors: {
      background: "#FFFFBB",
      surface: "#FFFFDD",
    },
  },
  {
    name: 'purple',
    colors: {
      background: "#FFBBFF",
      surface: "#FFDDFF",
    },
  },
  {
    name: 'cyan',
    colors: {
      background: "#BBFFFF",
      surface: "#DDFFFF",
    },
  },
]

const darkColors = {
  background: "#181818",
  surface: "#242424",
  text: "#FFFFFF",
  gray: "#555555", 
  brand: "orange", 
}

const lightColors = {
  ...lightThemes[0].colors,
  text: "#000000",
  gray: "#BBBBBB",
  brand: "orange",
}

export function useColors() {
  const { theme } = useTheme();
  return theme === 'dark' ? darkColors : lightColors
}

