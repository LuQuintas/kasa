import Banner from "../../reusable-ui/Banner";
import Collapse from "../../reusable-ui/Collapse";
import Footer from "../../reusable-ui/Footer";
import NavBar from "../../reusable-ui/NavBar";
import bannerAbout from "../about/images/bannerAbout.png";
import styled from "styled-components";
import infoAbout from "../../../assets/Datas/infoAbout.json";

export default function About() {
  return (
    <AboutStyled>
      <NavBar />
      <Banner ClassName="banner" image={bannerAbout} />
      {infoAbout.map((info) => (
        <Collapse title={info.title} texte={info.description} />
      ))}
      <Footer />
    </AboutStyled>
  );
}
const AboutStyled = styled.div`
  .banner {
    max-width: 100%;
    height: 223px;
    max-width: 1240px;
    @media screen and (min-width: 1024px) {
      margin-bottom: 30px;
      img,
      .bg-dark {
        border-radius: 25px;
      }
    }
  }
`;
