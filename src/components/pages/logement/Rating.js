import datasProducts from "../../../assets//Datas/Api.json";
import { VscStarFull } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Rating() {
  const idProduct = useParams();

  const product = datasProducts.find((product) => product.id === idProduct.id);
  const stars = [1, 2, 3, 4, 5];

  return (
    <RatingStyled>
      {stars.map((rating) => (
        <VscStarFull
          key={rating}
          className={product.rating >= rating ? "color" : "grey"}
        />
      ))}
    </RatingStyled>
  );
}
const RatingStyled = styled.div`
  font-size: 18px;
  .color {
    margin-right: 5px;
    color: #ff6060;
  }
  .grey {
    color: #e3e3e3;
  }
  @media screen and (min-width: 1024px) {
    font-size: 30px;
  }
`;
