import React from "react";
import styled from "styled-components";

export default function Banner({ image, texte }) {
  return (
    <BannerStyled>
      <img src={image} alt="Bannière" />
      <div className="bg-dark"></div>
      <span>{texte}</span>
    </BannerStyled>
  );
}

const BannerStyled = styled.div`
  width: 1240px;
  height: 223px;
  margin: 0px 100px;
  img {
    position: absolute;
    border-radius: 25px;
    z-index: 0;
  }
  .bg-dark {
    background-color: black;
    width: 100%;
    height: 100%;
    z-index: 1;
    mix-blend-mode: darken;
    opacity: 30%;
    border-radius: 25px;
  }
  span {
    position: absolute;
    left: 25.9%;
    right: 25.14%;
    top: 24.32%;
    bottom: 69.04%;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 142.6%;
    display: flex;
    align-items: flex-end;
    color: #ffffff;
  }
`;
