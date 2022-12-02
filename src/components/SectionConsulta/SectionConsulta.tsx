import { Grid, styled } from "@mui/material";
import React from "react";
import PaperSection from "./PaperSection";
import TituloSecao from "../Titulo/TituloSecao";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import HttpsIcon from "@mui/icons-material/Https";
import SectionConsultaStyled from "./SectionConsultaStyled";

const GridStyled = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  bgcolor: "red",
  boxSizing: "border-box",
  alignItems: "start",
});

const Section2: React.FC = () => {
  return (
    <SectionConsultaStyled id="section-consulta">
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={12} md={12} xl={12} sx={{ textAlign: "center" }}>
          <TituloSecao titulo="O que a consulta inclui?" />
        </Grid>
        <GridStyled item xs={12} sm={6} md={4} xl={4}>
          <PaperSection
            icon={(props) => <NoteAltOutlinedIcon color="primary" />}
            text="Avaliação personalizada"
          />
        </GridStyled>
        <GridStyled item xs={12} sm={6} md={4} xl={4}>
          <PaperSection
            icon={(props) => <CalendarMonthOutlinedIcon color="primary" />}
            text="Agendamento das sessões"
          />
        </GridStyled>
        <GridStyled item xs={12} sm={6} md={4} xl={4}>
          <PaperSection
            icon={(props) => <AddTaskOutlinedIcon color="primary" />}
            text="Plano de ação"
          />
        </GridStyled>
        <GridStyled item xs={12} sm={6} md={4} xl={4}>
          <PaperSection
            icon={(props) => <QueryStatsOutlinedIcon color="primary" />}
            text="Acompanhamento investigativo"
          />
        </GridStyled>
        <GridStyled item xs={12} sm={6} md={4} xl={4}>
          <PaperSection
            icon={(props) => <TipsAndUpdatesOutlinedIcon color="primary" />}
            text="Ferramentas práticas"
          />
        </GridStyled>
        <GridStyled item xs={12} sm={6} md={4} xl={4}>
          <PaperSection
            icon={(props) => <HttpsIcon color="primary" />}
            text="Confidencialidade"
          />
        </GridStyled>
      </Grid>
    </SectionConsultaStyled>
  );
};

export default Section2;
