import styled from "styled-components";
import NavBar from "../../reusable-ui/NavBar";
import Footer from "../../reusable-ui/Footer";
import { useParams } from "react-router-dom";
import datasProducts from "../../../assets//Datas/Api.json";
import Collapse from "../../reusable-ui/Collapse";
import { VscStarFull } from "react-icons/vsc";
import Tag from "./Tag";
import Info from "./Info";
import Carousel from "./Carousel";

export default function Logement() {
  const idProduct = useParams();
  const product = datasProducts.find((product) => product.id === idProduct.id);

  const listEquipment = product.equipments.map((equipment) => (
    <span key={equipment}>{equipment}</span>
  ));

  const stars = [1, 2, 3, 4, 5];

  return (
    <LogementStyled>
      <NavBar />
      <Carousel slides={product.pictures} />
      <div className="info">
        <Info title={product.title} location={product.location} />
        {product.tags.map((tags) => (
          <Tag className="tags" key={tags} name={tags} />
        ))}
      </div>
      <div className="rating">
        <div className="etoile">
          {stars.map((rating) => (
            <VscStarFull
              key={rating}
              className={product.rating >= rating ? "color" : "grey"}
            />
          ))}
        </div>
        <div className="hostName">
          <span>{product.host.name}</span>
          <img src={product.host.picture} alt="" />
        </div>
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
  .etoile {
    font-size: 18px;
    .color {
      margin-right: 5px;
      color: #ff6060;
    }
    .grey {
      color: #e3e3e3;
    }
  }
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
    margin-top: 16px;
    margin-left: 20px;
    margin-right: 20px;
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
    .hostName {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
  }
`;
