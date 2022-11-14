import { Button, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface BannerLinksProps {
  nomeLink: string;
}

const LinkStyled = styled.div`
  color: #f2f2f2;
  :hover {
    scale: 1.3;
    color: #bf9341;
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  @keyframes scale-up-center {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const scrollTo = () => {
  const section = document.getElementById(
    "section-apresentacao"
  ) as HTMLElement;
  section.scrollIntoView({ block: "center" });
};

const BannerLinks: React.FC<BannerLinksProps> = ({ nomeLink }) => {
  return (
    <Button variant="text" onClick={scrollTo}>
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
    </Button>
  );
};

export default BannerLinks;
