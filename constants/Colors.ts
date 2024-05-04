const white = '#fff';
const black = '#000';
const grey = '#8E8E8F';
const blue = '#2f95dc';
const darkGreen = '#006400';
const lightGreen = '#90EE90';
const darkBrown = '#8B4513';

export default {
  light: {
    text: black,
    background: white,
    tabIconDefault: grey,
    tabIconSelected: blue,
    tabBgColor: white,
    headerBgColor: white, 
    seperator: '#eee',
  },
  dark: {
    text: white,
    background: black,
    tabIconDefault: grey,
    tabIconSelected: blue,
    tabBgColor: black,
    headerBgColor: black,
    seperator: 'rgba(255,255,255,0.1)',
  },
  green: {
    text: black,
    background: lightGreen,
    tabIconDefault: grey,
    tabIconSelected: darkBrown,
    tabBgColor: lightGreen,
    headerBgColor: darkGreen,
    seperator: 'rgba(0,100,0,0.5)',
  },
};
