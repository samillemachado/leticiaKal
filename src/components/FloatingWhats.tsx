import React from "react";
import Fab from "@mui/material/Fab";
import { BsWhatsapp } from "react-icons/bs";

const FloatingWhats: React.FC = () => {
  return (
    <>
      <Fab
        color="secondary"
        aria-label="add"
        size="large"
        sx={{ position: "fixed", left: "2em", bottom: "2em" }}
      >
        <BsWhatsapp fontSize={30} />
      </Fab>
    </>
  );
};

export default FloatingWhats;
