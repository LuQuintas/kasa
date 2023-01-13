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
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    margin-left: 20px;
    color: #ff6060;
    /* margin-left: 57px; */
    :hover,
    :focus {
      text-decoration: underline;
    }
    @media screen and (min-width: 768px) {
      font-size: 24px;
    }
  }
`;
