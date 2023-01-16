import styled from "styled-components";

export default function Card({ id, title, image }) {
  return (
    <CardStyled>
      <div className="card" id={id}>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <span className="title">{title}</span>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  .card {
    position: relative;
    margin-bottom: 50px;
    width: 340px;
    height: 340px;

    .image {
      /* width: 100%;
      height: 100%; */
      img {
        position: absolute;
        border-radius: 25px;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
    .title {
      position: absolute;
      font-size: 18px;
      color: #ffffff;
      left: 20px;
      bottom: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    .card {
      margin-bottom: 20px;
      border-radius: 10px;
      width: 335px;
      height: 255px;
    }
    img {
      border-radius: 10px;
    }
  }
`;
