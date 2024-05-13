import { useTheme } from "@/context/ThemeContext";

export const lightThemes = [
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
  background: "#F5F5F5",
  surface: "#FFFFFF",
  text: "#000000",
  gray: "#BBBBBB",
  brand: "orange",
}

export function useColors() {
  const { theme, colorTheme } = useTheme();
  const themeColors = theme === 'dark' ? darkColors : {
    ...lightColors,
    ...lightThemes.find(t => t.name === colorTheme)?.colors,
  };
  return themeColors;
}

