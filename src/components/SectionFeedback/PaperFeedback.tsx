import React from "react";
import defaultTheme from "../../config/theme/Default";
import { Grid, Paper, Typography, Box } from "@mui/material";

interface PaperFeedbackProps {
  text: string;
}

const PaperFeedback: React.FC<PaperFeedbackProps> = ({ text }) => {
  return (
    <>
      <Grid
        item
        xs={12}
        sx={{
          margin: 1,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            maxWidth: 300,
            minWidth: 200,
            minHeight: 150,
            padding: 5,
            color: defaultTheme.palette.primary.main,
            textAlign: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Typography variant="h4">"</Typography>
          <Typography
            variant="body1"
            sx={{ color: defaultTheme.palette.primary.dark, marginTop: 1 }}
          >
            {text}
          </Typography>
          <Typography variant="h4">"</Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default PaperFeedback;
