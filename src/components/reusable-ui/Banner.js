import React from "react";
import styled from "styled-components";

export default function Banner({ image, texte }) {
  return (
    <BannerStyled>
      <img src={image} alt="Bannière" />
      <div className="bg-dark"></div>
      <div className="containerText">
        <span>{texte}</span>
      </div>
    </BannerStyled>
  );
}

const BannerStyled = styled.div`
  position: relative;
  width: 100%;
  height: 111px;

  img {
    position: absolute;
    border-radius: 10px;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .bg-dark {
    background-color: black;
    width: 100%;
    height: 100%;
    z-index: 1;
    mix-blend-mode: darken;
    opacity: 30%;
    border-radius: 10px;
  }
  .containerText {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    padding-left: 20px;
    align-items: center;

    span {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      color: #ffffff;
      width: 217px;
    }
  }

  @media screen and (min-width: 769px) {
    height: 223px;
    .containerText {
      justify-content: center;
      align-items: center;
      text-align: center;
      span {
        width: 100%;
        font-size: 48px;
      }
    }
  }
`;
