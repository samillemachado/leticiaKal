import { Box } from "@mui/material";
import React from "react";
import Contact from "../../components/SectionContact/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Banner/Banner";
import Profile from "../../components/Profile/Profile";
import SectionConsulta from "../../components/SectionConsulta/SectionConsulta";
import Logo from "../../components/Logo/Logo";
import SectionVideo from "../../components/SectionVideo/SectionVideo";
import SectionTerapia from "../../components/SectionTerapia/SectionTerapia";
import SectionFeedback from "../../components/SectionFeedback/SectionFeedback";
import FloatingWhats from "../../components/FloatingWhats";

const Home: React.FC = () => {
  return (
    <Box sx={{ margin: 0, padding: 0 }}>
      <Logo />
      <Header />
      <SectionVideo />
      <SectionTerapia />
      <SectionConsulta />
      <Profile />
      <SectionFeedback />
      <Contact />
      <Footer />
      <FloatingWhats />
    </Box>
  );
};

export default Home;
