import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#BF9341",
      light: "#404040",
      dark: "#0D0D0D",
      contrastText: "#F2F2F2",
    },
    secondary: {
      main: "#075e54",
      light: "#262626",
      dark: "#0D0D0D",
      contrastText: "#ffffff",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default defaultTheme;
