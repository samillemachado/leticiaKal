import styled from "styled-components";
import img1 from "../../assets/images/banner.jpg";

const BannerStyled = styled.div`
  background-image: url(${img1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
export default BannerStyled;
