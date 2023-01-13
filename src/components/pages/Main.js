import styled from "styled-components";
import { DatasLogements } from "../../assets/Datas/Api";
import Card from "./Card";

export default function Main() {
  return (
    <MainStyled>
      {DatasLogements.map((produit) => {
        return <Card title={produit.title} image={produit.cover} />;
      })}
      <Card />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  border-radius: 25px;
  background: #f6f6f6;
  padding-top: 56px;
  margin-top: 23px;
`;
