import styled from "styled-components";
import NavBar from "../../reusable-ui/NavBar";
import Footer from "../../reusable-ui/Footer";

export default function Logement() {
  return (
    <LogementStyled>
      <NavBar />
      <div className="container">
        <img src="{image}" alt="" />
        <div className="title-host">
          <div>title</div>
          <div>info</div>
        </div>
        <div className="tag-rating">
          <div>tag</div>
          <div> rating</div>
        </div>
        <div className="description">
          <div>description</div>
          <div>equipement</div>
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
  max-width: 1440px;
  .container {
    background: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
  }
  .title-host,
  .tag-rating,
  .description {
    display: flex;
    background: blue;
    width: 100%;
    justify-content: space-between;
  }
`;
