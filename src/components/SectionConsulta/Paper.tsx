import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

interface PaperSectionProps {
  text: string;
}

const PaperSection: React.FC<PaperSectionProps> = ({ text }) => {
  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={2}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          direction: "row",
          margin: 1,
        }}
      >
        <Paper elevation={3} sx={{ minWidth: 150, minHeight: 150, padding: 5 }}>
          <Typography variant="body1">{text}</Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default PaperSection;
