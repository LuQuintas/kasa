import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  return (
    <NavBarStyled>
      <NavLink to="/">
        <img src="/images/logo.svg" alt="Logo de kasa" />
      </NavLink>
      <div>
        <NavLink className="link" to="/">
          Accueil
        </NavLink>
        <NavLink className="link" to="/about">
          A propos
        </NavLink>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 1px;
  margin: 20px;

  img {
    width: 145px;
    height: 47px;
  }
  .link {
    text-decoration: #ff6060;
    font-size: 12px;
    font-weight: 500;
    margin-left: 25px;
    color: #ff6060;
    &.active {
      border-bottom: 2px solid #ff6060;
      padding-bottom: 2px;
    }
  }

  @media screen and (min-width: 1440px) {
    max-width: 1240px;
    margin: 40px auto;
  }
  /* @media screen and (min-width: 1024px) {
    margin-top: 40px;
    margin-bottom: 40px;
  } */
  @media screen and (min-width: 768px) {
    .link {
      font-size: 24px;
    }
    img {
      width: 210px;
      height: 68px;
    }
  }
`;
