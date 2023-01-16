import styled from "styled-components";
import LogoFooter from "../../assets/images/LogoFooter.png";

export default function Footer() {
  return (
    <FooterStyled>
      <div className="trademark">
        <img src={LogoFooter} alt="" />
      </div>
      <span>&copy; 2020 Kasa. Allrights reserved</span>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  width: 100%;
  height: 209px;
  display: flex;
  margin: auto;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: black;

  span {
    color: white;
  }
`;
