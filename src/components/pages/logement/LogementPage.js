import styled from "styled-components";
import NavBar from "../../reusable-ui/NavBar";
import Footer from "../../reusable-ui/Footer";
import { useParams } from "react-router-dom";
import datasProducts from "../../../assets//Datas/Api.json";
// import Tag from "./Tag";
import Collapse from "../../reusable-ui/Collapse";
import Tag from "./Tag";
import Host from "./Host";
// import Info from "./Info";
// import Host from "./Host";
export default function Logement() {
  const idProduct = useParams();

  const product = datasProducts.find((product) => product.id === idProduct.id);

  return (
    <LogementStyled>
      <NavBar />
      <div className="info">
        {/* <div> */}
        <Host title={product.title} location={product.location} />
        {product.tags.map((tag) => (
          <Tag className="tags" key={tag} name={tag} />
        ))}
        {/* </div> */}
        <div className="rating">
          <div>
            <span>{product.rating}</span>
            <span>{product.host.name}</span>
            <img src={product.host.picture} alt="" />
          </div>
        </div>
      </div>

      <div className="description">
        <Collapse title="Description" texte={product.description} />
        <Collapse
          title="Equipements"
          texte={
            (product.equipments.map = (equipement) => {
              <ul key={equipement.id}>{equipement}</ul>;
            })
          }
        />
      </div>

      <Footer />
    </LogementStyled>
  );
}
const LogementStyled = styled.div`
  margin: 20px;
  max-width: 1240px;
  /* .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  } */

  .description {
    display: inline-flex;
    width: 100%;
    justify-content: space-between;
  }

  .rating {
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* justify-content: space-between; */
  }
`;
