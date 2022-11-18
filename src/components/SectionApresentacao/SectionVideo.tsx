import { Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import defaultTheme from "../../config/theme/Default";
import img from "../../assets/images/certificado.png";
import TituloSecao from "../Titulo/TituloSecao";
import GridTitulo from "../Titulo/GridTitulo";

// const SectionVideoStyled = styled.div`
//   width: 100vw;
//   min-height: 85vh;
//   overflow-x: hidden;
// `;

const ImgStyled = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 180px;
  height: 180px;
`;

const SectionVideo: React.FC = () => {
  return (
    <>
      <GridTitulo component={<TituloSecao titulo="Vamos conversar?" />} />
      <Grid
        id="section-apresentacao"
        container
        spacing={2}
        sx={{
          backgroundColor: defaultTheme.palette.secondary.light,
          color: defaultTheme.palette.secondary.contrastText,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: { xs: 2, sm: 5, md: 10, lg: 15, xl: 20 },
          paddingY: { xs: 5 },
          margin: 0,
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImgStyled>
            <div />
          </ImgStyled>
          <Typography variant="h6">
            Se você está aqui, possivelmente, existe algo te incomodando em seu
            relacionamento(s) ou na sua vida sexual.
          </Typography>
          <Typography variant="h6" sx={{ paddingY: 5 }}>
            Normalmente esse tipo de relação só tem a piorar se não tratada
            desde o início de certos comportamentos.
          </Typography>
          <Typography variant="h6">
            Vem conhecer meu Instagram ou me envia uma mensagem no Whatsapp!
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default SectionVideo;
