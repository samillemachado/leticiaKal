import React from "react";
import defaultTheme from "../../config/theme/Default";
import { Paper, Typography, Grid } from "@mui/material";

interface PaperFeedbackProps {
  text: string;
}

const PaperFeedback: React.FC<PaperFeedbackProps> = ({ text }) => {
  return (
    <Grid
      item
      xs={12}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Paper
        elevation={3}
        sx={{
          minWidth: "35%",
          minHeight: 200,
          maxWidth: 300,
          maxHeight: 250,
          backgroundColor: defaultTheme.palette.primary.contrastText,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingX: { xs: 5, md: 10, lg: 15, xg: 20 },
          paddingY: { xs: 2, md: 5, lg: 5, xg: 10 },
          flexDirection: "column",
          borderRadius: 10,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: defaultTheme.palette.primary.light,
            marginY: 1,
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          "
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: defaultTheme.palette.primary.light,
            marginY: 1,
            textAlign: "center",
          }}
        >
          {text}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default PaperFeedback;
