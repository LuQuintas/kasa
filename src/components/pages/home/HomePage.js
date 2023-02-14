import styled from "styled-components";
import NavBar from "../../reusable-ui/NavBar";
import Banner from "../../reusable-ui/Banner";
import Bannerhome from "../../../assets/images/BannerHome.png";
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
  margin: auto;
  height: 100%;
`;
