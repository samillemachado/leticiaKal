import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import defaultTheme from "../../config/theme/Default";
import perfil from "../../assets/images/perfilPb.png";
import TituloSecao from "../Titulo/TituloSecao";

const Profile: React.FC = () => {
  return (
    <>
      <Grid
        id="section-profile"
        container
        spacing={2}
        sx={{
          backgroundColor: defaultTheme.palette.primary.main,
          color: defaultTheme.palette.primary.contrastText,
          padding: { xs: 2, sm: 5, md: 10, lg: 15, xl: 20 },
          margin: 0,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
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
          <Avatar
            alt="foto-Leticia"
            src={`${perfil}`}
            sx={{ width: 300, height: 300 }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <TituloSecao titulo="QUEM SOU EU?" />
          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            tempore repellat in deserunt blanditiis perspiciatis ipsa ipsam
            tempora vitae minima animi officiis a? Ut ipsam, totam ab tempora
            nemo non? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
