import styled from "styled-components";
import NavBar from "../../reusable-ui/NavBar";
import Banner from "../../reusable-ui/Banner";
import Bannerhome from "../../../assets/images/BannerHome.svg";
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
  /* margin: 20px; */
  /* width: 100%; */
  margin: auto;
  max-width: 1440px;
  min-width: 375px;
`;
