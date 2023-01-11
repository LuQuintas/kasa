import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import NavBarRightSide from "./NavBarRightSide";

export default function NavBar() {
  return (
    <NavBarStyled>
      <Logo />
      <NavBarRightSide />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 100px;
`;
