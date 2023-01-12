import React from "react";
import Banner from "../reusable-ui/Banner";
import NavBar from "../reusable-ui/Navbar/NavBar";
import BannerHome from "../../assets/BannerHome.png";
import styled from "styled-components";

export default function Home() {
  return (
    <HomeStyled>
      <NavBar />
      <Banner image={BannerHome} texte="Chez vous, partout et ailleurs" />
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
