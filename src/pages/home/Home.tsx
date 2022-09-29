import { Box } from "@mui/material";
import React from "react";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Banner/Banner";
import Profile from "../../components/Profile/Profile";
import SectionConsulta from "../../components/SectionConsulta/SectionConsulta";
import WhatIs from "../../components/WhatIs/WhatIs";
import Logo from "../../components/Logo/Logo";
import SectionVideo from "../../components/SectionVideo/SectionVideo";

const Home: React.FC = () => {
  return (
    <Box sx={{ margin: 0, padding: 0 }}>
      <Logo />
      <Header />
      <SectionVideo />
      <WhatIs />
      <SectionConsulta />
      <Profile />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Home;
