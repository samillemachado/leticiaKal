import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import defaultTheme from "../../config/theme/Default";

const Profile: React.FC = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: defaultTheme.palette.primary.main,
          color: defaultTheme.palette.primary.contrastText,
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={12} sm={6}>
          <Avatar
            alt="Leticia"
            src="../../assets/images/perfil.jpeg"
            sx={{ width: 300, height: 300 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4"> QUEM SOU EU? </Typography>
          <Typography variant="body1" sx={{ marginTop: 10 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            tempore repellat in deserunt blanditiis perspiciatis ipsa ipsam
            tempora vitae minima animi officiis a? Ut ipsam, totam ab tempora
            nemo non? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolore, tempore repellat in deserunt blanditiis perspiciatis ipsa
            ipsam tempora vitae minima animi officiis a? Ut ipsam, totam ab
            tempora nemo non? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolore, tempore repellat in deserunt blanditiis perspiciatis
            ipsa ipsam tempora vitae minima animi officiis a? Ut ipsam, totam ab
            tempora nemo non?
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
