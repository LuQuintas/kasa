import styled from "styled-components";
import { useParams } from "react-router-dom";
import datasProducts from "../../../assets//Datas/Api.json";

export default function Tag() {
  const idProduct = useParams();
  const product = datasProducts.find((product) => product.id === idProduct.id);

  return (
    <TagStyled>
      {product.tags.map((tags) => (
        <div key={tags} className="tags">
          {tags}
        </div>
      ))}
    </TagStyled>
  );
}
const TagStyled = styled.div`
  .tags {
    display: inline-flex;
    flex-wrap: wrap;
    border-radius: 5px;
    min-height: 20px;
    min-width: 90px;
    letter-spacing: 0.5px;
    background-color: #ff6060;
    color: white;
    font-size: 10px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
  }
`;
