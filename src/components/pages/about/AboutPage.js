import Banner from "../../reusable-ui/Banner";
import Collapse from "../../reusable-ui/Collapse";
import Footer from "../../reusable-ui/Footer";
import NavBar from "../../reusable-ui/NavBar";
import bannerAbout from "../about/images/bannerAbout.png";
import styled from "styled-components";

export default function About() {
  return (
    <AboutStyled>
      <NavBar />
      <Banner ClassName="banner" image={bannerAbout} />
      <Collapse
        title="Fiabilité"
        texte="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
      />
      <Collapse
        title="Respect"
        texte="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
      <Collapse
        title="Service"
        texte="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      />
      <Collapse
        title="Sécurité"
        texte="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />

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
      img,
      .bg-dark {
        border-radius: 25px;
      }
    }
  }
`;
