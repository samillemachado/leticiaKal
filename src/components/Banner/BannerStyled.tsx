import styled from "styled-components";
import img1 from "../../assets/images/banner.jpg";

const BannerStyled = styled.div`
  background-image: url(${img1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  min-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  overflow-x: hidden;
`;
export default BannerStyled;
