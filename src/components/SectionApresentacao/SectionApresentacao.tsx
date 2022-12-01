import { Grid, Typography } from "@mui/material";
import React from "react";
import img from "../../assets/images/certificado.png";
import defaultTheme from "../../config/theme/Default";
import perfil from "../../assets/images/perfilPb.png";
import TituloSecao from "../Titulo/TituloSecao";
import styled from "styled-components";
import GridTitulo from "../Titulo/GridTitulo";

const ImgStyled = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 150px;
  height: 150px;
  padding-left: 10px;
`;

const SectionApresentacao: React.FC = () => {
  return (
    <>
      <GridTitulo component={<TituloSecao titulo="Vamos conversar?" />} />
      <Grid
        id="section-apresentacao"
        container
        spacing={2}
        sx={{
          minHeight: "80%",
          backgroundColor: defaultTheme.palette.primary.contrastText,
          color: defaultTheme.palette.primary.light,
          paddingX: { xs: 2, sm: 5, md: 5, lg: 10, xl: 20 },
          paddingY: { xs: 2, sm: 5, md: 5, lg: 5, xl: 10 },
          margin: 0,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={8}
          xl={8}
          sx={{
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "space-between",
              lg: "space-between",
              xl: "space-between",
            },
            alignItems: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "center",
              xl: "center",
            },
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={8}
            xl={8}
            sx={{
              margin: 0,
              padding: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h5"
              sx={{ paddingBottom: 5, textAlign: "center" }}
            >
              SERÁ QUE TEU CASO TEM SOLUÇÃO?{" "}
            </Typography>
            <Typography variant="h6">
              Se você está aqui, possivelmente, existe algo te incomodando em
              seu relacionamento(s) ou na sua vida sexual.
            </Typography>
            <Typography variant="h6" sx={{ paddingY: 5 }}>
              Normalmente esse tipo de relação só tem a piorar se não tratada
              desde o início de certos comportamentos.
            </Typography>
            <Typography variant="h6">
              Vem conhecer meu Instagram ou me envia uma mensagem no Whatsapp!
            </Typography>
          </Grid>
          <ImgStyled>
            <div />
          </ImgStyled>
        </Grid>
      </Grid>
    </>
  );
};

export default SectionApresentacao;
