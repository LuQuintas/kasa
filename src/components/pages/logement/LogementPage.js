import styled from "styled-components";
import NavBar from "../../reusable-ui/NavBar";
import Footer from "../../reusable-ui/Footer";
import { useParams } from "react-router-dom";
import datasProducts from "../../../assets//Datas/Api.json";
import Tag from "./Tag";
export default function Logement() {
  const idProduct = useParams();

  const product = datasProducts.find((product) => product.id === idProduct.id);

  return (
    <LogementStyled>
      <NavBar />
      <div className="container">
        <img src={product.pictures} alt={product.title} />
        <div className="title-host">
          <div>
            <h1>{product.title}</h1>
            <span className="location">{product.location}</span>
          </div>
          <div>{product.host.name}</div>
        </div>
        <div className="tags">
          {product.tags.map((tags) => (
            <Tag name={tags} />
          ))}
          <div className="rating">
            <span>{product.rating}</span>
          </div>
        </div>
        <div className="description">
          <div>{product.description}</div>
          <div>{product.equipments}</div>
        </div>
      </div>

      <Footer />
    </LogementStyled>
  );
}
const LogementStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 1240px;
  .container {
    /* background: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    img {
      width: 1240px;
      /* background: red; */
      height: 415px;
    }
    h1 {
      font-size: 36px;
      font-weight: 500;
      color: #ff6060;
    }
    .location {
      color: #ff6060;
      font-size: 18px;
      margin-bottom: 23px;
    }
  }
  .title-host,
  .tag-rating,
  .description {
    display: flex;
    color: white;
    /* background: blue; */
    width: 100%;
    min-height: 50px;
    justify-content: space-between;
    margin-top: 15px;
    padding: 5px;
  }

  .tags {
    width: 100%;
    display: flex;
    margin-top: 15px;
    /* justify-items: self-end; */
    .rating {
      text-align: right;
      /* justify-items: center; */
      width: 100%;
    }
    /* justify-content: space-around; */
  }
`;
