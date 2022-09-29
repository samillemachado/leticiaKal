import { Grid, Typography } from "@mui/material";
import React from "react";
import defaultTheme from "../config/theme/Default";

const Contact: React.FC = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: defaultTheme.palette.primary.main,
          color: defaultTheme.palette.primary.contrastText,
          padding: 10,
        }}
      >
        <Typography> CONTACT </Typography>
      </Grid>
    </>
  );
};

export default Contact;
