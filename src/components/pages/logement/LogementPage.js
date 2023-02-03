import styled from "styled-components";
import NavBar from "../../reusable-ui/NavBar";
import Footer from "../../reusable-ui/Footer";
import { useParams } from "react-router-dom";
import datasProducts from "../../../assets//Datas/Api.json";
import Collapse from "../../reusable-ui/Collapse";
import Tag from "./Tag";
import Host from "./Host";

export default function Logement() {
  const idProduct = useParams();

  const product = datasProducts.find((product) => product.id === idProduct.id);

  const listEquipment = product.equipments.map((equipment) => (
    <span key={equipment}>{equipment}</span>
  ));
  console.log(product);

  return (
    <LogementStyled>
      <NavBar />
      <div className="carrousel">
        {product.pictures.map((pictures) => (
          <img key={pictures.id} src={pictures} alt="" />
        ))}
      </div>
      <div className="info">
        <Host title={product.title} location={product.location} />
        {product.tags.map((tag) => (
          <Tag className="tags" key={tag} name={tag} />
        ))}
      </div>
      <div className="rating">
        <div>
          <span>{product.rating}</span>
        </div>
        <div className="hostName">
          <span>{product.host.name}</span>
          <img src={product.host.picture} alt="" />
        </div>
      </div>
      <Collapse title="Description" texte={product.description} />
      <Collapse title="Equipements" texte={listEquipment} />
      <Footer />
    </LogementStyled>
  );
}
const LogementStyled = styled.div`
  /* margin: auto; */
  /* width: 100%; */
  /* height: 100%; */
  /* .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  } */

  .collapse {
    /* width: 335px; */
    /* margin: 20px; */
    /* min-height: 30px; */
    /* display: inline-flex; */
    /* width: 100%; */
  }
  .info {
    margin-left: 20px;
  }
  .carrousel {
    margin: auto;
    img {
      margin-left: 20px;
      width: 335px;
      object-fit: cover;
      border-radius: 10px;
    }
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
