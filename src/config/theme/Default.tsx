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
      main: "#8C8181",
      light: "#262626",
      dark: "#0D0D0D",
      contrastText: "#D9D9D9",
    },
  },
});

export default defaultTheme;