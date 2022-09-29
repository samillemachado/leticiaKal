import { Grid, Typography } from "@mui/material";
import React from "react";
import defaultTheme from "../../config/theme/Default";
import TituloSecao from "../TituloSecao";
import CardWhatIs from "./CardWhatIs";
import img1 from "../../assets/images/img1.jpeg";
import img2 from "../../assets/images/img2.jpeg";
import img3 from "../../assets/images/img3.jpeg";

const WhatIs: React.FC = () => {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={3}
        sx={{
          backgroundColor: defaultTheme.palette.primary.dark,
          color: defaultTheme.palette.primary.contrastText,
          padding: 10,
        }}
      >
        <Grid item xs={12}>
          <TituloSecao titulo="O que é Terapia Sexual e como ela pode te ajudar?" />
        </Grid>
        <CardWhatIs
          texto="Trabalha as dificuldades relacionadas ao desejo, à autoaceitação e preconceitos."
          imagem={img1}
        />
        <CardWhatIs
          texto="Melhora comunicação entre o casal, aumentando intimidade e a qualidade do sexo."
          imagem={img2}
          reverse
        />
        <CardWhatIs
          texto="Trabalha as disfunções sexuais masculinas (como dificuldade em manter a ereção ou controlar a ejaculação)."
          imagem={img3}
        />
      </Grid>
    </React.Fragment>
  );
};

export default WhatIs;
