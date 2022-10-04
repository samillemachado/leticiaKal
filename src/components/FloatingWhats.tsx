import React from "react";
import Fab from "@mui/material/Fab";
import { BsWhatsapp } from "react-icons/bs";

const FloatingWhats: React.FC = () => {
  return (
    <React.Fragment>
      <Fab color="secondary" aria-label="add">
        <BsWhatsapp />
      </Fab>
    </React.Fragment>
  );
};

export default FloatingWhats;