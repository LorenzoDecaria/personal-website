import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const lightGreyColor = "#6B6E70";
const mediumGreyColor = "#474B4F";
const darkGreyColor = "#222629";

const primary = "#FFA800";
const secondary = "#00D3FF";

const white = "#FFFFFF"
const black = "#000000"

const secondaryTextColor = "#AAAAAA";


let theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
        main: primary,
    },
    secondary: {
        main: secondary
    },
    text: {
      primary: white,
      secondary: secondaryTextColor
    },
    background: {
      paper: white,
      default: darkGreyColor // "#111111"
    },
  },
  transitions: {
    duration: {
      enteringScreen: 1500,
      leavingScreen: 1500
    }
  },
  typography: {
    letterSpacing: 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  },
});

theme = responsiveFontSizes(theme);

export default theme;