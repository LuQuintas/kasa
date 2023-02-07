import { useState } from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

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
          <ArrowForwardIosIcon className="arrow_left" />
        </div>
        <img src={slides[currImg]} alt="" />
        <div className="right" onClick={nextSlide}>
          <ArrowForwardIosIcon className="arrow_right" />
        </div>
      </div>
    </CarouselStyled>
  );
}
const CarouselStyled = styled.div`
  height: 255px;
  max-width: 1240px;

  min-width: 335px;
  margin: 20px auto;
  .carouselInner {
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
    .arrow_left {
      position: absolute;
      color: white;
      top: 45%;
      left: 5%;
      transform: rotate(180deg);
    }
    .arrow_right {
      position: absolute;
      top: 45%;
      color: white;
      right: 5%;
    }
    .left,
    .right {
      position: relative;
      z-index: 1;
      display: flex;
      height: 100%;
      width: 40px;
      cursor: pointer;
    }
  }
`;
