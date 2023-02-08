import { useState } from "react";
import styled from "styled-components";
import ArrowBackSlide from "../../../assets/images/ArrowLeftSlide.svg";
import ArrowForwardSlide from "../../../assets/images/ArrowRightSlide.svg";

export default function Carousel({ slides }) {
  const [currImg, setCurrImg] = useState(0);

  const prevSlide = () => {
    const firstSlide = currImg === 0;
    const newImage = firstSlide ? slides.length - 1 : currImg - 1;
    setCurrImg(newImage);
  };
  const nextSlide = () => {
    const lastSlide = currImg === slides.length - 1;
    const newImage = lastSlide ? 0 : currImg + 1;
    setCurrImg(newImage);
  };
  return (
    <CarouselStyled>
      <div className="carouselInner">
        <div className="left" onClick={prevSlide}>
          <img className="arrow" src={ArrowBackSlide} alt="" />
        </div>
        <img src={slides[currImg]} alt="" />
        <div className="right" onClick={nextSlide}>
          <img className="arrow" src={ArrowForwardSlide} alt="" />
        </div>
        <div className="bulletpoints">
          <span>
            {currImg + 1}/{slides.length}
          </span>
        </div>
      </div>
    </CarouselStyled>
  );
}
const CarouselStyled = styled.div`
  height: 255px;
  min-width: 335px;
  margin: 20px auto;

  .carouselInner {
    max-width: 1240px;
    position: relative;
    justify-content: space-between;
    display: flex;
    height: 100%;
    margin: 20px;
    img {
      border-radius: 10px;
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .arrow {
      width: 1em;
      height: 1em;
    }
    .left,
    .right {
      z-index: 1;
      justify-content: center;
      align-items: center;
      display: flex;
      height: 100%;
      width: 40px;
      cursor: pointer;
    }
    .bulletpoints {
      color: #ffffff;
      position: absolute;
      bottom: 5%;
      left: 45%;
    }
  }
  @media screen and (min-width: 768px) {
    height: 415px;
  }
  @media screen and (min-width: 1440px) {
    .carouselInner {
      margin: auto;
    }
  }
`;
