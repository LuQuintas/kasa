import { useParams } from "react-router-dom";
import styled from "styled-components";
import datasProducts from "../../../assets//Datas/Api.json";

export default function Info() {
  const idProduct = useParams();
  const product = datasProducts.find((product) => product.id === idProduct.id);

  return (
    <InfoStyled>
      <h2>{product.title}</h2>
      <span>{product.location}</span>
    </InfoStyled>
  );
}
const InfoStyled = styled.div`
  color: #ff6060;
  letter-spacing: 1px;
  margin: 10px 20px;
  h2 {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 5px;
  }
  span {
    font-size: 14px;
  }
  @media screen and (min-width: 1024px) {
    h2 {
      font-size: 36px;
      line-height: 50px;
    }
    span {
      font-size: 18px;
    }
  }
  @media screen and (min-width: 1440px) {
    margin: 10px auto;
  }
`;
