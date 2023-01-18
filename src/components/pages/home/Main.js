import { useNavigate } from "react-router";
import styled from "styled-components";
import datasProducts from "../../../assets/Datas/Api.json";
import Banner from "../../reusable-ui/Banner";
import BannerHome from "../home/images/BannerHome.png";
import Card from "./Card";

export default function Main() {
  //states
  const navigate = useNavigate();

  //comportements

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`<Logement/.id}`);
  };

  //render
  return (
    <MainStyled>
      <Banner image={BannerHome} texte="Chez vous, partout et ailleurs" />
      <div className="container-card">
        {datasProducts.map((product) => {
          return (
            <Card
              onclick={handleClick}
              key={product.id}
              title={product.title}
              alt={product.title}
              image={product.cover}
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
