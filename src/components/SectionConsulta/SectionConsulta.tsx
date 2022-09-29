import { Grid, Typography } from "@mui/material";
import React from "react";
import defaultTheme from "../../config/theme/Default";
import TituloSecao from "../TituloSecao";
import PaperSection from "./Paper";

const SectionConsulta: React.FC = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: defaultTheme.palette.primary.light,
          color: defaultTheme.palette.primary.contrastText,
          padding: 10,
        }}
      >
        <TituloSecao titulo="O que a consulta inclui?" />
        <PaperSection text="Dificuldades relacionadas ao desejo." />
      </Grid>
    </>
  );
};

export default SectionConsulta;
