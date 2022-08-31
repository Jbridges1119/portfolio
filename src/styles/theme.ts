import {
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles';


const primaryColor = "#0A3943";
const secondaryColor = "#0F6E83";
const dangerColor = "#976606";

let theme = createTheme({
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