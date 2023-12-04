import React from "react";
import Logo from "../component/Logo";
import Navigation from "../component/Navigation";

const Competences = () => {
  return (
    <div className="Main">
      <div className="NavBar">
        <Logo />
        <Navigation />
      </div>
      <div className="Content">
        <h1>Compétences</h1>
        <h2>Le Code</h2>
        <p>
          Grâce à ma première année en informatique, j'ai pu apprendre à le
          langage golang durant la piscine en début d'année. Et puis les projets
          sont tombés l'un après l'autre, le hangman d'abord en version
          terminale pour faire nos premiers pas dans le code. Ensuite, il y eu
          le hangman web, spécialement dans un soucis de nous faire apprendre le
          web. Il y a ensuite eu le groupie tracker, application en golang et la
          librairie fyne permettant de référencer des groupes de chanteurs à
          l'aide d'un fichier json. Puis, la piscine js et le challenge js avec
          pour objectif de faire un jeu en javascript. Et enfin, le forum
          comportant page de connexion, des posts avec l'option filtre, la
          possibilité de liker et disliker, tout ça avec des animations en js.
        </p>
        <br />
      </div>
    </div>
  );
};
export default Competences;
