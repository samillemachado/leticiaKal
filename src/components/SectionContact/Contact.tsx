import { Grid, Typography, Box, IconButton } from "@mui/material";
import React from "react";
import defaultTheme from "../../config/theme/Default";
import TituloSecao from "../Titulo/TituloSecao";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { IconContext } from "react-icons";

const Contact: React.FC = () => {
  return (
    <>
      <Grid
        id="section-profile"
        container
        spacing={2}
        sx={{
          backgroundColor: defaultTheme.palette.primary.light,
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
              md: "column",
              lg: "column",
              xl: "column",
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
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <TituloSecao titulo="Entre em contato comigo!" />
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{ color: defaultTheme.palette.primary.main, marginTop: 1 }}
            >
              Me envia a tua dúvida, eu quero te ajudar!
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ paddingTop: 3 }}>
            <Box>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input hidden accept="image/*" type="file" />
                <IconContext.Provider value={{ size: "2em" }}>
                  <div>
                    <BsInstagram />
                  </div>
                </IconContext.Provider>
              </IconButton>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input hidden accept="image/*" type="file" />
                <IconContext.Provider value={{ size: "2em" }}>
                  <div>
                    <BsWhatsapp />
                  </div>
                </IconContext.Provider>
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6">Letícia Kal</Typography>
          <Typography variant="h6" sx={{ paddingY: 1 }}>
            Passo Fundo | RS
          </Typography>
          <Typography variant="h6">Telefone: (55) 9907-9498</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
