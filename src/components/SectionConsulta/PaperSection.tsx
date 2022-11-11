import { Grid, Paper, styled, Typography } from "@mui/material";
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
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        color: defaultTheme.palette.primary.contrastText,
        textAlign: "center",
        verticalAlign: "middle",
        borderRadius: 2,
        fontSize: 2,
        margin: 0,
        width: 180,
      }}
    >
      {React.createElement(icon, {
        width: 40,
        height: 40,
      })}
      <Typography
        variant="body1"
        sx={{
          color: defaultTheme.palette.primary.light,
          marginTop: 2,
          textTransform: "uppercase",
        }}
      >
        {text}
      </Typography>
    </Paper>
  );
};

export default PaperSection;
