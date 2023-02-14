import styled from "styled-components";
import LogoFooter from "../../assets/images/LogoFooter.svg";

export default function Footer() {
  return (
    <FooterStyled>
      <img src={LogoFooter} alt="" />
      <span>&copy; kasa. All rights reserved</span>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: black;
  color: white;
  width: 100%;
  min-height: 212px;
  img {
    width: 122px;
    height: 40px;
  }
`;
