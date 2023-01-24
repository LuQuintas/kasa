import styled from "styled-components";

export default function Card({ title, image, onClick, ...extraProps }) {
  return (
    <CardStyled onClick={onClick}>
      <img src={image} alt={title} />
      <span>{title}</span>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  position: relative;
  margin: 25px;
  width: 340px;
  height: 340px;
  cursor: pointer;

  img {
    position: absolute;
    border-radius: 25px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  span {
    position: absolute;
    font-size: 18px;
    color: #ffffff;
    left: 20px;
    bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    border-radius: 10px;
    width: 335px;
    height: 255px;
    img {
      border-radius: 10px;
    }
  }
`;