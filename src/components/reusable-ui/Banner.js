import styled from "styled-components";

export default function Banner({ image, texte, ClassName }) {
  return (
    <BannerStyled className={ClassName}>
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
  height: 111px;
  margin: 0 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  img {
    position: absolute;
    border-radius: 10px;
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
    /* padding-left: 20px; */
    align-items: center;

    span {
      color: #ffffff;
      width: 217px;
      margin-left: 20px;
    }
  }

  @media screen and (min-width: 1440px) {
    margin: 40px auto;
    max-width: 1240px;
    height: 223px;

    span {
      font-size: 48px;
    }
  }
  @media screen and (min-width: 768px) {
    .containerText {
      justify-content: center;
      align-items: center;
      text-align: center;
      span {
        width: 100%;
        font-size: 32px;
      }
    }
  }
`;
