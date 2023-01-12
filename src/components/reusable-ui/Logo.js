import React from "react";
import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
      <img src="/images/logo.png" alt="Logo de kasa" />
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  img {
    width: 80%;
  }
`;
