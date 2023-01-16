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
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  img {
    width: 45%;
  }
`;
