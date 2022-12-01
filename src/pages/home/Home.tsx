import { Grid } from "@mui/material";
import React from "react";
import Contact from "../../components/SectionContact/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Banner/Banner";
import Profile from "../../components/Profile/Profile";
import Logo from "../../components/Logo/Logo";
import SectionTerapia from "../../components/SectionTerapia/SectionTerapia";
import SectionFeedback from "../../components/SectionFeedback/SectionFeedback";
import FloatingWhats from "../../components/FloatingWhats";
import SectionConsulta from "../../components/SectionConsulta/SectionConsulta";
import SectionApresentacao from "../../components/SectionApresentacao/SectionApresentacao";

const Home: React.FC = () => {
  return (
    <Grid container sx={{ margin: 0, padding: 0 }}>
      <Logo />
      <Header />
      <SectionApresentacao />
      <SectionTerapia />
      <SectionConsulta />
      <Profile />
      <SectionFeedback />
      <Contact />
      <Footer />
      <FloatingWhats />
    </Grid>
  );
};

export default Home;
