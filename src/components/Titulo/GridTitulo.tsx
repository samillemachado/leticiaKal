import React, { ReactNode } from "react";
import defaultTheme from "../../config/theme/Default";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

interface GridTituloPros {
  component: ReactNode;
}

const GridTituloStyled = styled(Grid)({
  maxWidth: "100%",
  minHeight: "25%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: defaultTheme.palette.secondary.contrastText,
});

const GridTitulo: React.FC<GridTituloPros> = ({ component }) => {
  return <GridTituloStyled>{component}</GridTituloStyled>;
};

export default GridTitulo;
