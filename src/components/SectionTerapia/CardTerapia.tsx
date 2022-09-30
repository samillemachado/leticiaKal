import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface CardWhatIsProps {
  texto: string;
  imagem: string;
  reverse?: boolean;
}

interface DivProps {
  ordem?: boolean; // só vai inverter se nós definirmos; Passa por props para o SectionContentStyled
}

interface BoxImageProps {
  urlimagem: string;
}

const SectionContentStyled = styled.div<DivProps>`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 400px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
  flex-direction: ${(props) =>
    props.ordem
      ? "row-reverse"
      : "row"}; //quando a invertADiv for true, mostra o row-reverse. Se não, mostra no posicionamento normal (ternário);
  div {
    width: 50vw;
  }
`;

const BoxImageStyled = styled.div<BoxImageProps>`
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.urlimagem});
`;

const CardTerapia: React.FC<CardWhatIsProps> = ({ texto, imagem, reverse }) => {
  return (
    <SectionContentStyled ordem={reverse}>
      <Box>
        <Typography variant="h5" sx={{ padding: 5 }}>
          {texto}
        </Typography>
      </Box>
      <BoxImageStyled urlimagem={imagem} />
    </SectionContentStyled>
  );
};

export default CardTerapia;
