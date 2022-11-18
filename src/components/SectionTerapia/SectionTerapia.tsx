import { Grid } from "@mui/material";
import React from "react";
import defaultTheme from "../../config/theme/Default";
import TituloSecao from "../Titulo/TituloSecao";
import img1 from "../../assets/images/img1-pb.jpg";
import img2 from "../../assets/images/img2-pb.jpg";
import img3 from "../../assets/images/img3-pb.jpg";
import img4 from "../../assets/images/img5-pb.jpg";
import CardTerapia from "./CardTerapia";

const SectionTerapia: React.FC = () => {
  return (
    <React.Fragment>
      <Grid
        id="section-terapia"
        container
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
            color: defaultTheme.palette.secondary.dark,
            bgcolor: defaultTheme.palette.primary.main,
            padding: 0,
            margin: 0,
          }}
        >
          <TituloSecao titulo="Terapia Sexual:" />
          <TituloSecao titulo="O que é? como ela pode te ajudar?" />
        </Grid>
        <CardTerapia
          titulo="TODOS"
          texto="Trabalha as dificuldades relacionadas ao desejo, à autoaceitação e preconceitos."
          imagem={img1}
        />
        <CardTerapia
          titulo="CASAL"
          texto="Melhora comunicação entre o casal, aumentando intimidade e a qualidade do sexo."
          imagem={img2}
          reverse
        />
        <CardTerapia
          titulo="HOMENS"
          texto="Trabalha as disfunções sexuais masculinas (como dificuldade em manter a ereção ou controlar a ejaculação)."
          imagem={img3}
        />
        <CardTerapia
          titulo="MULHERES"
          texto="Trabalha as dificuldades relacionadas ao desejo, à autoaceitação e preconceitos."
          imagem={img4}
          reverse
        />
      </Grid>
    </React.Fragment>
  );
};

export default SectionTerapia;
