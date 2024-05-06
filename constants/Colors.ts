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
  green: {
    text: black,
    background: lightGreen,
    tabIconDefault: grey,
    tabIconSelected: darkBrown,
    tabBgColor: lightGreen,
    headerBgColor: darkGreen,
    borderColor: '#D8D8D8',
    calendar: {
      backgroundColor: darkGreen,
      calendarBackground: lightGreen,
      selectedColor: blue,
      arrowColor: blue,
    }
  },
};
