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
      <div className="info">
        <Info />
        <Tag />
      </div>
      <div className="rating">
        <Rating />
        <Host />
      </div>
      <div className="collapse_container">
        <Collapse title="Description" texte={product.description} />
        <Collapse title="Equipements" texte={listEquipment} />
      </div>
      <Footer />
    </LogementStyled>
  );
}
const LogementStyled = styled.div`
  .collapse {
    width: 100%;
  }
  .info {
    margin-left: 20px;
  }

  .rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    margin: 20px;
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
  }
`;
