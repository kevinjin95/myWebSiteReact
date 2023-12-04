import React from "react";
import Logo from "../component/Logo";
import Navigation from "../component/Navigation";

const ParcoursScolaire = () => {
  return (
    <div className="Main">
      <div className="NavBar">
        <Logo />
        <Navigation />
      </div>
      <div className="Content">
        <h1>Parcours scolaire</h1>
        <h2>Baccalauréat et BTS</h2>
        <p>
          Diplômé d'un BAC électrotechnique en 2015, et d'un BTS CRSA en 2017,
          ces 2 diplômes m'ont permis d'acquérir des connaissances en
          électrotechnique, ses dangers et ses utilisations. Je me suis ensuite
          lancé dans le monde du travail, où j'ai pu être monteur mécanique,
          poste où il faut savoir manipuler vis et tournevis, pendant un CDD de
          3 mois à partir de décembre 2017.
        </p>
        <br />
        <h2>L'informatique</h2>
        <p>
          A l'année scolaire 2022/2023, j'ai rejoint une école en informatique
          où j'ai pu apprendre le language de code Golang, Java, Javascript, me
          perfectionner en Python puisque je connaissais déjà ce language par
          autodidacte lors de mon entrée dans mon école.
        </p>
      </div>
    </div>
  );
};
export default ParcoursScolaire;
