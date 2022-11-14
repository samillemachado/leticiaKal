import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import defaultTheme from "../../config/theme/Default";
import img from "../../assets/images/certificado.png";
import TituloSecao from "../TituloSecao";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { create } from "../../store/modules/gridId";

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
          padding: 10,
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
          <TituloSecao titulo="Vamos conversar?" />
          <Typography variant="h6">
            Se você está aqui, possivelmente, existe algo te incomodando em seu
            relacionamento(s) ou na sua vida sexual.
          </Typography>
          <Typography variant="h6">
            Normalmente esse tipo de relação só tem a piorar se não tratada
            desde o início de certos comportamentos.
          </Typography>
          <Typography variant="h6">
            Vem conhecer meu instagram e me envia uma mensagem!
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default SectionVideo;
