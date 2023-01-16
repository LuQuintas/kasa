import React from "react";
import styled from "styled-components";
import NavBarRightSide from "./NavBarRightSide";

export default function NavBar() {
  return (
    <NavBarStyled>
      <img src="/images/logo.png" alt="Logo de kasa" />
      <NavBarRightSide />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  /* margin: auto; */
  max-width: 1440px;
  img {
    width: 25%;
  }
`;
