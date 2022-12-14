import React, { ReactNode } from "react";
import defaultTheme from "../../config/theme/Default";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

interface GridTituloPros {
  component: ReactNode;
}

const GridTituloStyled = styled(Grid)({
  minWidth: "100%",
  minHeight: "20%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: defaultTheme.palette.primary.main,
});

const GridTitulo: React.FC<GridTituloPros> = ({ component }) => {
  return <GridTituloStyled>{component}</GridTituloStyled>;
};

export default GridTitulo;
