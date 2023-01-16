import styled from "styled-components";
import Footer from "../../layout/Footer";
import NavBar from "../../layout/navbar/NavBar";
import Main from "./Main";

export default function Home() {
  return (
    <HomeStyled>
      <NavBar classname="Nav" />
      <Main classname="main" />
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
