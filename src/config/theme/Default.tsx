import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#a5456b",
      main: "#731440",
      dark: "#43001a",
      contrastText: "#ffff",
    },
    secondary: {
      main: "#260417",
      light: "#4f2c3d",
      dark: "#000",
      contrastText: "#ffff",
    },
  },
});

export default defaultTheme;
