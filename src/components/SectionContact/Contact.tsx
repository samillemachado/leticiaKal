import { Grid, Typography, Box, IconButton } from "@mui/material";
import React from "react";
import defaultTheme from "../../config/theme/Default";
import TituloSecao from "../TituloSecao";
import Maps from "./Maps";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { IconContext } from "react-icons";

const Contact: React.FC = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: defaultTheme.palette.primary.light,
          color: defaultTheme.palette.primary.contrastText,
          padding: 10,
        }}
      >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <TituloSecao titulo="Entre em contato comigo!" />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{ color: defaultTheme.palette.primary.dark, marginTop: 1 }}
          >
            Me envia a tua dúvida, eu quero te ajudar!
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Maps property="aqui vai o mapa"></Maps>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Grid item xs={12} md={4}>
            <Typography>
              End: Rua Lava Pés 451 | Centro | Passo Fundo-RS
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input hidden accept="image/*" type="file" />
                <IconContext.Provider value={{ size: "2.5em" }}>
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
                <IconContext.Provider value={{ size: "2.5em" }}>
                  <div>
                    <BsWhatsapp />
                  </div>
                </IconContext.Provider>
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography>Telefone: (55) 9907-9498</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
