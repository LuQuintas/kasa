import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  return (
    <NavBarStyled>
      <img src="/images/logo.png" alt="Logo de kasa" />
      <div>
        <NavLink to="/"> Accueil </NavLink>
        <NavLink to="/about"> A propos </NavLink>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 100px;
  max-width: 1240px;
  img {
    max-width: 210px;
    max-height: 68px;
  }
  a {
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    margin-left: 20px;
    color: #ff6060;
    :hover,
    :focus {
      text-decoration: underline;
    }
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;
