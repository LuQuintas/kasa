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
  justify-content: space-between;
  margin-bottom: 10px;
`;
