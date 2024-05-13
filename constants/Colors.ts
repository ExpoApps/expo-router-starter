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


export const darkThemes = [
  {
    name: 'neutral',
    colors: {
      background: "#181818",
      surface: "#242424",
    },
  },
  {
    name: 'red',
    colors: {
      background: "#401818",
      surface: "#602424",
    },
  },
  {
    name: 'green',
    colors: {
      background: "#184018",
      surface: "#246024",
    },
  },
  {
    name: 'blue',
    colors: {
      background: "#181840",
      surface: "#242460",
    },
  },
  {
    name: 'yellow',
    colors: {
      background: "#404018",
      surface: "#606024",
    },
  },
  {
    name: 'purple',
    colors: {
      background: "#401840",
      surface: "#602460",
    },
  },
  {
    name: 'cyan',
    colors: {
      background: "#184040",
      surface: "#246060",
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
  const themeColors = theme === 'dark' 
  ? {
    ...darkColors,
    ...darkThemes.find(t => t.name === colorTheme)?.colors,
  }
  : {
    ...lightColors,
    ...lightThemes.find(t => t.name === colorTheme)?.colors,
  };
  return themeColors;
}

