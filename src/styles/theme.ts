import {
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';


const primaryColor = "#5802ff";
const secondaryColor = "#5802ff";


let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1050,
      lg: 1292,
      xl: 1536,
    },},
  palette: {
    primary: {
      main: primaryColor,
      dark: "#5802ff"
    },
    secondary: {
      main: secondaryColor,
    },
    action: {
      hoverOpacity: 0
    }
  },
  
  typography:{
  fontFamily: 'PT Serif',
  button: {
    textTransform: 'none',
    fontFamily:' DM Sans',
    letterSpacing: '0.04em'
  },
  h4:{
    letterSpacing:"0.01em"
  },
  h6:{
    fontFamily: 'DM Sans'
  },
  body1: {
    fontFamily: 'DM Sans',
    fontSize: '1.1rem'
  }
  }
});

theme = responsiveFontSizes(theme);

export default theme