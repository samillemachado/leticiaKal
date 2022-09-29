import React from "react";
import GlobalStyles from "@mui/material/GlobalStyles";

const StylesGlobal: React.FC = () => {
  return (
    <GlobalStyles
      styles={{
        margin: 0,
        padding: 0,
        a: { textDecoration: "none", color: "inherit" },
      }}
    />
  );
};

export default StylesGlobal;
