import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../reusable-ui/Footer";
import NavBar from "../../reusable-ui/NavBar";

export default function ErrorPage() {
  return (
    <ErrorStyled>
      <NavBar />
      <div className="title_error">
        <h1>404</h1>
        <span>"Oups ! La page que vous demandez n'existe pas ."</span>
        <NavLink to="/"> Retourner sur la page d'accueil</NavLink>
      </div>
      <Footer className="footer" />
    </ErrorStyled>
  );
}
const ErrorStyled = styled.div`
  text-align: center;
  .title_error {
    margin-top: 200px;
    h1 {
      color: #ff6060;
      font-size: 96px;
      font-weight: 700;
    }
    span {
      line-height: 25px;
      text-align: center;
      font-size: 18px;
      color: #ff6060;
    }
    a {
      margin: 130px auto;
      display: block;
      color: #ff6060;
      font-size: 14px;
    }
  }
`;
