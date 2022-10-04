import { Grid, Typography } from "@mui/material";
import React from "react";
import defaultTheme from "../../config/theme/Default";
import TituloSecao from "../TituloSecao";
import PaperSection from "./PaperSection";
import SectionConsultaStyled from "./SectionConsultaStyled";

import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";

const SectionConsulta: React.FC = () => {
  return (
    <SectionConsultaStyled>
      <Grid
        container
        spacing={2}
        sx={{
          color: defaultTheme.palette.primary.main,
          paddingY: 20,
          paddingX: 0,
          margin: 0,
        }}
      >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <TituloSecao titulo="O que a consulta inclui?" />
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", textAlign: "center" }}>
          <PaperSection
            icon={(props) => <NoteAltOutlinedIcon />}
            text="Avaliação personalizada"
          />
          <PaperSection
            icon={(props) => <CalendarMonthOutlinedIcon />}
            text="Agendamento das sessões"
          />
          <PaperSection
            icon={(props) => <AddTaskOutlinedIcon />}
            text="Plano de ação"
          />
          <PaperSection
            icon={(props) => <QueryStatsOutlinedIcon />}
            text="Acompanhamento investigativo"
          />
          <PaperSection
            icon={(props) => <TipsAndUpdatesOutlinedIcon />}
            text="Ferramentas práticas"
          />
        </Grid>
      </Grid>
    </SectionConsultaStyled>
  );
};

export default SectionConsulta;
