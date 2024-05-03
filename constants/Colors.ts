const white = '#fff';
const black = '#000';
const lightGrey = '#ccc';
const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  light: {
    text: black,
    background: white,
    tint: tintColorLight,
    tabIconDefault: lightGrey,
    tabIconSelected: tintColorLight,
    navBgColor: white, //used for header and bottom tabs
  },
  dark: {
    text: white,
    background: black,
    tint: tintColorDark,
    tabIconDefault: lightGrey,
    tabIconSelected: tintColorDark,
    navBgColor: black,
  },
  lightColor: '#eee',
  darkColor: 'rgba(255,255,255,0.1)'
};
