import { Grid, Paper, Typography } from "@mui/material";
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
    padding: 0px 30px;
  }
  h2 {
    padding-bottom: 20px;
    font-family: "Nothing You Could Do", cursive;
    font-size: 3em;
  }
  p {
    line-height: 1.5em;
  }
`;

const BoxImageStyled = styled.div<BoxImageProps>`
  width: 50vw;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.urlimagem});
`;

const CardWhatIs: React.FC<CardWhatIsProps> = ({ texto, imagem, reverse }) => {
  return (
    <SectionContentStyled ordem={reverse}>
      <div>
        <p>{texto}</p>
      </div>
      <BoxImageStyled urlimagem={imagem} />
    </SectionContentStyled>
  );
};

export default CardWhatIs;
