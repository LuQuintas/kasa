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
  margin: 10px;
  min-width: 335px;
  min-height: 255px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  img {
    position: absolute;
    border-radius: 10px;
    object-fit: cover;
    width: 100%;
    height: 100%;
    :hover {
      filter: contrast(45%);
    }
  }

  span {
    position: absolute;
    color: #ffffff;
    left: 20px;
    bottom: 20px;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 20px;
    border-radius: 10px;
    min-width: 340px;
    min-height: 340px;
    margin-top: 50px;
    img {
      border-radius: 10px;
    }
  }
`;
