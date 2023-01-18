import styled from "styled-components";
import NavBar from "../../reusable-ui/NavBar";
import Banner from "../../reusable-ui/Banner";
import Bannerhome from "./images/BannerHome.png";
import Main from "./Main";
import Footer from "../../reusable-ui/Footer";

export default function Home() {
  return (
    <HomeStyled>
      <NavBar />
      <Banner image={Bannerhome} texte="Chez vous, partout ailleurs" />
      <Main />
      <Footer />
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: auto;
`;
