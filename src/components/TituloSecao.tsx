import { Typography } from "@mui/material";
import React from "react";
import defaultTheme from "../config/theme/Default";

interface TituloSecaoProps {
  titulo: string;
}

const TituloSecao: React.FC<TituloSecaoProps> = ({ titulo }) => {
  return (
    <Typography
      variant="h3"
      sx={{
        marginY: 5,
        textTransform: "uppercase",
        color: defaultTheme.palette.primary.main,
        paddin: 5,
      }}
    >
      <strong>{titulo}</strong>
    </Typography>
  );
};

export default TituloSecao;
