import { Typography } from "@mui/material";
import React from "react";
import defaultTheme from "../../config/theme/Default";

interface TituloSecaoProps {
  titulo: string;
}

const TituloSecao: React.FC<TituloSecaoProps> = ({ titulo }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        textTransform: "uppercase",
        textAlign: "center",
        color: defaultTheme.palette.primary.contrastText,
        fontWeight: 300,
        paddingX: 5,
      }}
    >
      {titulo}
    </Typography>
  );
};

export default TituloSecao;
