import { Grid } from "@mui/material";
import React from "react";
import defaultTheme from "../../config/theme/Default";
import TituloSecao from "../TituloSecao";
import img1 from "../../assets/images/capaB.jpg";
import img2 from "../../assets/images/capaB.jpg";
import img3 from "../../assets/images/capaB.jpg";
import img4 from "../../assets/images/capaB.jpg";
import CardTerapia from "./CardTerapia";

const SectionTerapia: React.FC = () => {
  return (
    <React.Fragment>
      <Grid
        id="section-terapia"
        container
        spacing={2}
        sx={{
          backgroundColor: defaultTheme.palette.secondary.contrastText,
          color: defaultTheme.palette.primary.main,
          padding: 0,
          margin: 0,
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            textAlign: "center",
            color: defaultTheme.palette.secondary.contrastText,
            bgcolor: defaultTheme.palette.primary.main,
            padding: 0,
            margin: 0,
          }}
        >
          <TituloSecao titulo="O que é Terapia Sexual e como ela pode te ajudar?" />
        </Grid>
        <CardTerapia
          titulo="COMUNS À TODOS"
          texto="Trabalha as dificuldades relacionadas ao desejo, à autoaceitação e preconceitos."
          imagem={img1}
        />
        <CardTerapia
          titulo="COMUNS AO CASAL"
          texto="Melhora comunicação entre o casal, aumentando intimidade e a qualidade do sexo."
          imagem={img2}
          reverse
        />
        <CardTerapia
          titulo="COMUNS AOS HOMENS"
          texto="Trabalha as disfunções sexuais masculinas (como dificuldade em manter a ereção ou controlar a ejaculação)."
          imagem={img3}
        />
        <CardTerapia
          titulo="COMUNS ÀS MULHERES"
          texto="Trabalha as dificuldades relacionadas ao desejo, à autoaceitação e preconceitos."
          imagem={img4}
          reverse
        />
      </Grid>
    </React.Fragment>
  );
};

export default SectionTerapia;
