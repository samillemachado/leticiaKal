import { Typography } from "@mui/material";
import React from "react";
import defaultTheme from "../../config/theme/Default";
import styled from "styled-components";

interface BannerLinksProps {
  nomeLink: string;
}

const LinkStyled = styled.div`
  color: #f2f2f2;
  :hover {
    scale: 1.3;
    color: #bf9341;
  }
`;

const BannerLinks: React.FC<BannerLinksProps> = ({ nomeLink }) => {
  return (
    <LinkStyled>
      <Typography
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          textAlign: "center",
        }}
      >
        {nomeLink}
      </Typography>
    </LinkStyled>
  );
};

export default BannerLinks;
