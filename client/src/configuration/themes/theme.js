import { createTheme } from "@mui/material/styles";

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#f4c644',
    },
    secondary: {
      main: '#f56622',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 16,
    h1: {
      fontSize: 60,
      fontWeight: 900,
    },
    h2: {
      fontSize: 40,
      fontWeight: 700,
    },
    h3: {
      fontSize: 20,
      fontWeight: 600,
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
