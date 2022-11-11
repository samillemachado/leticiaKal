import { Grid, styled } from "@mui/material";
import React from "react";
import PaperSection from "./PaperSection";
import BannerStyled from "../Banner/BannerStyled";
import TituloSecao from "../TituloSecao";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";

const GridStyled = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  bgcolor: "red",
  boxSizing: "border-box",
  alignItems: "start",
});

const Section2: React.FC = () => {
  return (
    <BannerStyled>
      <Grid container>
        <Grid item xs={12} md={12} xl={12} sx={{ textAlign: "center" }}>
          <TituloSecao titulo="O que a consulta inclui?" />
        </Grid>
        <GridStyled item xs={12} sm={6} md={4} xl={3}>
          <PaperSection
            icon={(props) => <NoteAltOutlinedIcon />}
            text="Avaliação personalizada"
          />
        </GridStyled>
        <GridStyled item xs={12} sm={6} md={4} xl={3}>
          <PaperSection
            icon={(props) => <CalendarMonthOutlinedIcon />}
            text="Agendamento das sessões"
          />
        </GridStyled>
        <GridStyled item xs={12} sm={6} md={4} xl={3}>
          <PaperSection
            icon={(props) => <AddTaskOutlinedIcon />}
            text="Plano de ação"
          />
        </GridStyled>
        <GridStyled item xs={12} sm={6} md={4} xl={3}>
          <PaperSection
            icon={(props) => <QueryStatsOutlinedIcon />}
            text="Acompanhamento investigativo"
          />
        </GridStyled>
        <GridStyled item xs={12} sm={6} md={4} xl={3}>
          <PaperSection
            icon={(props) => <TipsAndUpdatesOutlinedIcon />}
            text="Ferramentas práticas"
          />
        </GridStyled>
        <GridStyled item xs={12} sm={6} md={4} xl={3}>
          <PaperSection
            icon={(props) => <TipsAndUpdatesOutlinedIcon />}
            text="Teste teste"
          />
        </GridStyled>
      </Grid>
    </BannerStyled>
  );
};

export default Section2;
