import React from "react";
import defaultTheme from "../../config/theme/Default";
import { Paper, Typography, Grid } from "@mui/material";

interface PaperFeedbackProps {
  text: string;
}

const PaperFeedback: React.FC<PaperFeedbackProps> = ({ text }) => {
  return (
    <Grid item xs={12}>
      <Paper
        elevation={3}
        sx={{
          minWidth: "35%",
          minHeight: 200,
          maxWidth: 300,
          maxHeight: 250,
          backgroundColor: defaultTheme.palette.primary.contrastText,
          display: "flex",
          alignItems: "center",
          paddingX: { xs: 5, md: 10, lg: 20, xg: 30 },
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
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
