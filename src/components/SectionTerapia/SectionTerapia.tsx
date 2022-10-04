import { Grid, Typography } from "@mui/material";
import React from "react";
import defaultTheme from "../../config/theme/Default";
import TituloSecao from "../TituloSecao";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import CardTerapia from "./CardTerapia";

const SectionTerapia: React.FC = () => {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={3}
        sx={{
          backgroundColor: defaultTheme.palette.secondary.contrastText,
          color: defaultTheme.palette.secondary.dark,
          padding: 0,
          margin: 0,
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            textAlign: "center",
            bgcolor: defaultTheme.palette.primary.main,
          }}
        >
          <TituloSecao titulo="O que é Terapia Sexual e como ela pode te ajudar?" />
        </Grid>
        <CardTerapia
          texto="COMUNS À TODOS: Trabalha as dificuldades relacionadas ao desejo, à autoaceitação e preconceitos."
          imagem={img1}
        />
        <CardTerapia
          texto="COMUNS AO CASAL: Melhora comunicação entre o casal, aumentando intimidade e a qualidade do sexo."
          imagem={img2}
          reverse
        />
        <CardTerapia
          texto="COMUNS AOS HOMENS: Trabalha as disfunções sexuais masculinas (como dificuldade em manter a ereção ou controlar a ejaculação)."
          imagem={img3}
        />
        <CardTerapia
          texto="COMUNS ÀS MULHERES: Trabalha as dificuldades relacionadas ao desejo, à autoaceitação e preconceitos."
          imagem={img2}
          reverse
        />
      </Grid>
    </React.Fragment>
  );
};

export default SectionTerapia;
