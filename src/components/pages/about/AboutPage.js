import Banner from "../../reusable-ui/Banner";
import Collapse from "../../reusable-ui/Collapse";
import Footer from "../../reusable-ui/Footer";
import NavBar from "../../reusable-ui/NavBar";
import BannerAbout from "../../../assets/images/BannerAbout.png";
import styled from "styled-components";
import infoAbout from "../../../assets/Datas/infoAbout.json";

export default function About() {
  return (
    <AboutStyled>
      <NavBar />
      <Banner ClassName="banner" image={BannerAbout} />
      <div className="container-collapse">
        {infoAbout.map((info, index) => (
          <Collapse
            ClassName="collapse"
            key={index}
            title={info.title}
            texte={info.description}
          />
        ))}
      </div>
      <Footer />
    </AboutStyled>
  );
}
const AboutStyled = styled.div`
  margin: auto;

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

  .container-collapse {
    max-width: 1240px;
    margin: 20px 20px 0 20px;
    @media screen and (min-width: 768px) {
      margin: auto;
      margin-top: 40px;
      margin-bottom: 30px;
      max-width: 63%;
    }
  }
`;
