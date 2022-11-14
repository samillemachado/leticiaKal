import React from "react";
import defaultTheme from "../../config/theme/Default";
import { Paper, Typography } from "@mui/material";

interface PaperFeedbackProps {
  text: string;
}

const PaperFeedback: React.FC<PaperFeedbackProps> = ({ text }) => {
  return (
    <>
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
          paddingLeft: "30px",
          paddingRight: "30px",
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
    </>
  );
};

export default PaperFeedback;
