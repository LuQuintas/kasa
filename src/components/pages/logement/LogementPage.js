import styled from "styled-components";
import NavBar from "../../reusable-ui/NavBar";
import Footer from "../../reusable-ui/Footer";
import { useParams } from "react-router-dom";
import datasProducts from "../../../assets//Datas/Api.json";
import Collapse from "../../reusable-ui/Collapse";
import Tag from "./Tag";
import Info from "./Info";
import Carousel from "./Carousel";
import Rating from "./Rating";
import Host from "./Host";

export default function Logement() {
  const idProduct = useParams();
  const product = datasProducts.find((product) => product.id === idProduct.id);

  const listEquipment = product.equipments.map((equipment) => (
    <span key={equipment}>{equipment}</span>
  ));

  return (
    <LogementStyled>
      <NavBar />
      <Carousel slides={product.pictures} />
      <div className="info-rating">
        <div className="info">
          <Info />
          <Tag className="tag" />
        </div>
        <div className="rating">
          <Rating />
          <Host />
        </div>
      </div>
      <div className="collapse-container">
        <Collapse
          className="collapse"
          title="Description"
          texte={product.description}
        />
        <Collapse
          className="collapse"
          title="Equipements"
          texte={listEquipment}
        />
      </div>
      <Footer />
    </LogementStyled>
  );
}
const LogementStyled = styled.div`
  .info-rating {
    .rating {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 20px;
    }
  }
  .collapse-container {
    margin: 20px;
  }

  @media screen and (min-width: 1024px) {
    .info-rating {
      max-width: 1240px;
      display: flex;
      justify-content: space-between;
      margin: 15px auto;
      .rating {
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-evenly;
        align-items: flex-end;
        img {
          height: 64px;
          width: 64px;
        }
        span {
          font-size: 18px;
        }
      }
    }
  }
  @media screen and (min-width: 1440px) {
    .info-rating {
      .rating {
        margin: 0;
      }
    }

    .collapse-container {
      margin: auto;
      width: 1240px;
      justify-content: space-between;
      display: flex;
      flex-wrap: wrap;
      .collapse {
        width: 582px;
      }
    }
  }
`;
