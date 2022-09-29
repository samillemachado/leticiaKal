import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import defaultTheme from "../../config/theme/Default";
import img from "../../assets/images/certificado.png";
import TituloSecao from "../TituloSecao";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardActions } from "@mui/material";

const ImgStyled = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100vw;
  height: 150px;
`;

const SectionVideo: React.FC = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: defaultTheme.palette.primary.contrastText,
          color: defaultTheme.palette.primary.main,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Grid item xs={12} md={6}>
          <CardContent>
            <iframe
              id="video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/"
              frameBorder="0"
              allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </CardContent>
          {/* <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/l2UDgpLz20M"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div> */}
        </Grid>

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
            <Box />
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
