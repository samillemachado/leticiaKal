import { Typography } from "@mui/material";
import React from "react";

interface TituloSecaoProps {
  titulo: string;
}

const TituloSecao: React.FC<TituloSecaoProps> = ({ titulo }) => {
  return (
    <Typography
      variant="h4"
      sx={{ marginBottom: 5, textTransform: "uppercase" }}
    >
      <strong>{titulo}</strong>
    </Typography>
  );
};

export default TituloSecao;
