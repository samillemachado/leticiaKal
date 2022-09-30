import { Box } from "@mui/material";
import React from "react";
import BannerLinks from "./BannerLinks";
import BannerStyled from "./BannerStyled";

const Banner: React.FC = () => {
  return (
    <BannerStyled>
      <Box
        sx={{
          position: "static",
          top: 10,
          width: "100vw",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <BannerLinks nomeLink="APRESENTAÇÃO" />
        <BannerLinks nomeLink="O QUE É" />
        <BannerLinks nomeLink="COMO É" />
        <BannerLinks nomeLink="PERFIL" />
        <BannerLinks nomeLink="CONTATO" />
      </Box>
    </BannerStyled>
  );
};

export default Banner;
