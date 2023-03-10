import { useParams } from "react-router-dom";
import styled from "styled-components";
import datasProducts from "../../../assets//Datas/Api.json";

export default function Host() {
  const idProduct = useParams();
  const product = datasProducts.find((product) => product.id === idProduct.id);
  return (
    <HostStyled className="hostName">
      <span>{product.host.name}</span>
      <img src={product.host.picture} alt="" />
    </HostStyled>
  );
}
const HostStyled = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 12px;

  img {
    border-radius: 50%;
    height: 32px;
    width: 32px;
  }
  span {
    margin-right: 10px;
    color: #ff6060;
    width: min-content;
    text-align: right;
  }
`;
