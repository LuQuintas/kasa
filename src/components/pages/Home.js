import React from "react";
import Banner from "../reusable-ui/Banner";
import NavBar from "../reusable-ui/Navbar/NavBar";
import BannerHome from "../../assets/BannerHome.png";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner image={BannerHome} texte="Chez vous, partout et ailleurs" />
    </div>
  );
}
