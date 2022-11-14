import { Grid } from "@mui/material";
import React from "react";
import BannerLinks from "./BannerLinks";
import BannerStyled from "./BannerStyled";

const Banner: React.FC = () => {
  const links: string[] = [
    "APRESENTAÇÃO",
    "TERAPIA",
    "CONSULTA",
    "PERFIL",
    "CONTATO",
  ];

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
          justifyContent: "space-around",
        }}
      >
        {links.map((link, index) => {
          return <BannerLinks key={index} nomeLink={link} />;
        })}
      </Grid>
    </BannerStyled>
  );
};

export default Banner;
