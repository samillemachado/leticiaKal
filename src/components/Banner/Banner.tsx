import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import BannerStyled from "./BannerStyled";

const LinkStyled = styled.div`
  color: #f2f2f2;
  :hover {
    scale: 1.3;
    color: #bf9341;
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  @keyframes scale-up-center {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Banner: React.FC = () => {
  const scrollToApresentacao = () => {
    const section = document.getElementById(
      "section-apresentacao"
    ) as HTMLElement;
    section.scrollIntoView({ block: "start" });
  };

  const scrollToTerapia = () => {
    const section = document.getElementById("section-terapia") as HTMLElement;
    section.scrollIntoView({ block: "start" });
  };

  const scrollToConsulta = () => {
    const section = document.getElementById("section-consulta") as HTMLElement;
    section.scrollIntoView({ block: "start" });
  };

  const scrollToProfile = () => {
    const section = document.getElementById("section-profile") as HTMLElement;
    section.scrollIntoView({ block: "start" });
  };

  const scrollToContact = () => {
    const section = document.getElementById("section-contact") as HTMLElement;
    section.scrollIntoView({ block: "start" });
  };

  return (
    <BannerStyled>
      <Grid
        container
        xs={12}
        sx={{
          position: "static",
          top: 10,
          width: "100vw",
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
            md: "space-around",
            lg: "space-around",
            xl: "space-around",
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
        <Button
          variant="text"
          sx={{ width: 200 }}
          onClick={scrollToApresentacao}
        >
          <LinkStyled>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              APRESENTA????O
            </Typography>
          </LinkStyled>
        </Button>
        <Button variant="text" sx={{ width: 200 }} onClick={scrollToTerapia}>
          <LinkStyled>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              TERAPIA
            </Typography>
          </LinkStyled>
        </Button>
        <Button variant="text" sx={{ width: 200 }} onClick={scrollToConsulta}>
          <LinkStyled>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              CONSULTA
            </Typography>
          </LinkStyled>
        </Button>
        <Button variant="text" sx={{ width: 200 }} onClick={scrollToProfile}>
          <LinkStyled>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              PERFIL
            </Typography>
          </LinkStyled>
        </Button>
        <Button variant="text" sx={{ width: 200 }} onClick={scrollToContact}>
          <LinkStyled>
            <Typography
              variant="h5"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: "center",
              }}
            >
              CONTATO
            </Typography>
          </LinkStyled>
        </Button>
      </Grid>
    </BannerStyled>
  );
};

export default Banner;
