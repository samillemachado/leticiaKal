import { Grid, Paper, Typography, Box } from "@mui/material";
import React from "react";
import defaultTheme from "../../config/theme/Default";

interface IconTypeProps {
  width: number;
  height: number;
}

type IconType = (props: IconTypeProps) => JSX.Element;

interface PaperSectionProps {
  text: string;
  icon: IconType;
}

const PaperSection: React.FC<PaperSectionProps> = ({ text, icon }) => {
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
            minWidth: 150,
            minHeight: 150,
            padding: 5,
            color: defaultTheme.palette.primary.main,
            textAlign: "center",
            verticalAlign: "middle",
          }}
        >
          {React.createElement(icon, {
            width: 40,
            height: 40,
          })}
          <Typography
            variant="h6"
            sx={{ color: defaultTheme.palette.primary.dark, marginTop: 1 }}
          >
            {text}
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default PaperSection;
