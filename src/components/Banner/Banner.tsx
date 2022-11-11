import { Grid } from "@mui/material";
import React from "react";
import BannerLinks from "./BannerLinks";
import BannerStyled from "./BannerStyled";

const Banner: React.FC = () => {
  const links: string[] = [
    "APRESENTAÇÃO",
    "O QUE É",
    "COMO É",
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
        {links.map((item, index) => {
          return <BannerLinks key={index} nomeLink={item} />;
        })}
      </Grid>
    </BannerStyled>
  );
};

export default Banner;
