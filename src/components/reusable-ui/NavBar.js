import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export default function NavBar() {
  return (
    <HomeStyled>
      <div>
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="lien">
        <Link to="/">
          <p>Accueil</p>
        </Link>
        <Link to="/About">
          <p>A propos</p>
        </Link>
      </div>
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 100px;

  .lien {
    display: flex;
    margin-left: 57px;
    a {
      text-decoration: none;
    }
    p {
      font-family: "Monserrat", Tahoma, Geneva, Verdana, sans-serif;
      font-size: 24px;
      font-weight: 500;
      color: #ff6060;
      margin-left: 57px;
      :hover {
        text-decoration: underline;
      }
    }
  }
`;
