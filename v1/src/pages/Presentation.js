import React from "react";
import Logo from "../component/Logo";
import Navigation from "../component/Navigation";

const Presentation = () => {
  return (
    <div className="Main">
      <div className="NavBar">
        <Logo />
        <Navigation />
      </div>
      <div className="Content">
        <h1>Présentation</h1>
        <p>
          Bonjour je m'appelle Kevin, j'ai 27 ans et je vis à Montmagny dans le
          95. Ceci est mon site internet, il permet d'exposer les faits
          importants à retenir à mon sujet, aussi bien en terme de scolarité,
          que professionnel
        </p>
      </div>
    </div>
  );
};
export default Presentation;
