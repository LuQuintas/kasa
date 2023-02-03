import { useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function Carousel({ img, alt, imageSlider }) {
  const [currImg, setCurrImg] = useState(0);
  console.log(currImg);

  const prevSlide = () => {
    setCurrImg(currImg - 1);
    if (currImg === 0) setCurrImg(imageSlider.length - 1);
  };
  const nextSlide = () => {
    setCurrImg(currImg + 1);
    if (currImg === imageSlider.length - 1) setCurrImg(0);
  };
  return (
    <CarouselStyled>
      <div className="carouselInner">
        <div className="left" onClick={prevSlide}>
          <ArrowBackIosIcon className="arrow" />
        </div>
        <img src={img[currImg]} alt={alt} />
        <div className="right" onClick={nextSlide}>
          <ArrowForwardIosIcon className="arrow" />
        </div>
      </div>
    </CarouselStyled>
  );
}
const CarouselStyled = styled.div`
  height: 255px;
  border-radius: 10px;
  /* background: black; */

  min-width: 335px;
  margin: 20px auto;
  .carouselInner {
    display: flex;
    height: 100%;
    width: 100%;
    img {
      object-fit: cover;
    }
    .arrow {
      color: black;
    }
    .left,
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      background: blue;
      height: 100%;
      width: 15%;
    }
  }
`;
