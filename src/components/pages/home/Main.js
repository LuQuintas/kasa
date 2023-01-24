import { useNavigate } from "react-router";
import styled from "styled-components";
import datasProducts from "../../../assets/Datas/Api.json";
import Card from "./Card";

export default function Main() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`Logement/${id}`);
  };

  return (
    <MainStyled>
      {datasProducts.map((product, index) => {
        return (
          <Card
            onClick={() => handleClick(product.id)}
            key={index}
            id={product.id}
            title={product.title}
            image={product.cover}
          />
        );
      })}
    </MainStyled>
  );
}

const MainStyled = styled.div`
  margin-top: 25px;
  max-width: 1240px;
  border-radius: 25px;
  justify-content: space-evenly;
  padding-top: 15px;

  display: flex;
  flex-wrap: wrap;
  /* width: 100%; */
  background: #f6f6f6;

  /* @media screen and (max-width: 768px) {
    background: white;
    padding-top: 0;
    margin-top: 0;
  } */
`;