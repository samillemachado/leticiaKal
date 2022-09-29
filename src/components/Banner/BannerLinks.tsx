import { Typography } from "@mui/material";
import React from "react";
import defaultTheme from "../../config/theme/Default";

interface BannerLinksProps {
  nomeLink: string;
}

const BannerLinks: React.FC<BannerLinksProps> = ({ nomeLink }) => {
  return (
    <>
      <Typography
        variant="h6"
        component="div"
        sx={{
          color: defaultTheme.palette.primary.contrastText,
          flexGrow: 1,
          textAlign: "center",
        }}
      >
        {nomeLink}
      </Typography>
    </>
  );
};

export default BannerLinks;
