import Banner from "../reusable-ui/Banner";
import NavBar from "../reusable-ui/Navbar/NavBar";
import BannerHome from "../../assets/BannerHome.png";
import styled from "styled-components";
import Main from "./Main";

export default function Home() {
  return (
    <HomeStyled>
      <NavBar />
      <Banner image={BannerHome} texte="Chez vous, partout et ailleurs" />
      <Main />
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1440px;
  margin: auto;
`;
