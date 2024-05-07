const white = '#fff';
const black = '#000';
const grey = '#8E8E8F';
const blue = '#2f95dc';

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
};
