import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  return (
    <NavBarStyled>
      <img src="/images/logo.png" alt="Logo de kasa" />
      <div>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about"> A propos </NavLink>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  width: 335px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 1px;
  margin-top: 20px;
  margin-left: 20px;
  img {
    min-width: 145px;
    max-height: 47px;
  }
  a {
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    margin-left: 20px;
    /* letter-spacing: 0.3px; */
    color: #ff6060;
    :hover,
    :focus {
      text-decoration: underline;
    }
    /* @media screen and (min-width: 768px) {
      font-size: 24px;
    } */
  }
`;
