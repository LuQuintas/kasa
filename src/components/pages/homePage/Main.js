import styled from "styled-components";
import { DatasLogements } from "../../../assets/Datas/Api";
import Banner from "../../layout/Banner";
import BannerHome from "../homePage/images/BannerHome.png";
import Card from "./Card";

export default function Main() {
  return (
    <MainStyled>
      <Banner image={BannerHome} texte="Chez vous, partout et ailleurs" />
      <div className="container-card">
        {DatasLogements.map((produit) => {
          return (
            <Card
              key={produit.id}
              title={produit.title}
              image={produit.cover}
            />
          );
        })}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  margin: auto;
  max-width: 1440px;
  .container-card {
    border-radius: 25px;
    justify-content: space-around;
    padding-top: 23px;

    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background: #f6f6f6;
  }

  /* @media screen and (max-width: 768px) {
    background: white;
    padding-top: 0;
    margin-top: 0;
  } */
`;
