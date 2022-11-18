import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo3.png";

const FooterStyled = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100vw;
  height: 15vh;
  margin: 0;
  padding: 0;
`;

const Footer: React.FC = () => {
  return (
    <>
      <FooterStyled />
    </>
  );
};

export default Footer;
