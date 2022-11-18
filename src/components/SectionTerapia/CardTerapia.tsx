import { Typography, Grid, Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface CardWhatIsProps {
  titulo: string;
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

const CardStyledH = styled.div<DivProps>`
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100vw;
  max-height: 400px;
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
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.urlimagem});
`;

// VERTICAL --------------------------------------------

const CardStyledV = styled.div<DivProps>`
  margin: 0;
  padding: 0;
  height: 80vh;
  color: ${(props) => props.theme.color};
  div {
    width: 50vh;
  }
`;

const BoxImageStyledV = styled.div<BoxImageProps>`
  height: 40vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.urlimagem});
`;

const CardTerapia: React.FC<CardWhatIsProps> = ({
  titulo,
  texto,
  imagem,
  reverse,
}) => {
  return (
    <>
      <Grid item sx={{ display: { xs: "none", sm: "block" } }}>
        <CardStyledH ordem={reverse}>
          <Box>
            <Typography
              variant="h3"
              sx={{
                padding: 6,
                fontWeight: 600,
              }}
            >
              {titulo}
            </Typography>
            <Typography variant="h5" sx={{ padding: 6 }}>
              {texto}
            </Typography>{" "}
          </Box>
          <BoxImageStyled urlimagem={imagem} />
        </CardStyledH>
      </Grid>
      <Grid item sx={{ display: { xs: "block", sm: "none" } }}>
        <CardStyledV>
          <BoxImageStyledV urlimagem={imagem}>
            <Grid
              item
              sx={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                }}
              >
                {titulo}
              </Typography>
            </Grid>
          </BoxImageStyledV>
          <Typography variant="h5" sx={{ padding: 6 }}>
            {texto}
          </Typography>{" "}
        </CardStyledV>
      </Grid>
    </>
  );
};

export default CardTerapia;
