import {
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';


const primaryColor = "#0A3943";
const secondaryColor = "#0F6E83";
const dangerColor = "#976606";

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1050,
      lg: 1292,
      xl: 1536,
    },}
  // palette: {
  //   primary: {
  //     main: primaryColor,
  //   },
  //   secondary: {
  //     main: secondaryColor,
  //   },
  //   error: {
  //     main: dangerColor,
  //   },
  // },
  
});

theme = responsiveFontSizes(theme);

export default theme