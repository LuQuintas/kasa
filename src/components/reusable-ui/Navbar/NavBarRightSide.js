import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBarRightSide() {
  return (
    <NavBarRightSideStyled>
      <Link to="/" className="LinkNavBar">
        Accueil
      </Link>
      <Link to="/About" className="LinkNavBar">
        A propos
      </Link>
    </NavBarRightSideStyled>
  );
}

const NavBarRightSideStyled = styled.div`
  a {
    text-decoration: none;
    font-family: "Monserrat", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 24px;
    font-weight: 500;
    color: #ff6060;
    margin-left: 57px;
    :hover {
      text-decoration: underline;
    }
  }
`;
