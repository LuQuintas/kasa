import styled from "styled-components";
import { useParams } from "react-router-dom";
import datasProducts from "../../../assets//Datas/Api.json";

export default function Tag() {
  const idProduct = useParams();
  const product = datasProducts.find((product) => product.id === idProduct.id);

  return (
    <TagStyled>
      {product.tags.map((tags) => (
        <span key={tags} className="tags">
          {tags}
        </span>
      ))}
    </TagStyled>
  );
}
const TagStyled = styled.div`
  max-width: 1240px;
  margin-left: 20px;
  .tags {
    margin: 0 10px 5px 0;
    display: inline-flex;
    flex-wrap: wrap;
    border-radius: 5px;
    min-height: 20px;
    min-width: 90px;
    letter-spacing: 0.1em;
    background-color: #ff6060;
    color: white;
    font-size: 10px;
    justify-content: center;
    align-items: center;
    padding: 0px 5px;
  }
  @media screen and (min-width: 1024px) {
    .tags {
      border-radius: 10px;
      font-size: 14px;
      padding: 5px 20px;
      letter-spacing: 0.1em;
    }
  }
  @media screen and (min-width: 1440px) {
    margin: auto;
  }
`;
