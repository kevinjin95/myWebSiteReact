import React from "react";
import Logo from "../component/Logo";
import Navigation from "../component/Navigation";

const ParcoursProfessionnel = () => {
  return (
    <div className="Main">
      <div className="NavBar">
        <Logo />
        <Navigation />
      </div>
      <div className="Content">
        <h1>Parcours professionnel</h1>
        <h2>Société Mtair</h2>
        <p>
          En avril 2018, j'ai été pris en intérim pendant 5 mois puis en CDI
          pour un total de 4 ans dans une société du BTP. J'y avait pour mission
          de faire l'analyse fonctionnelle, la programmation, la mise en service
          et les tests d'équipements de régulation automatique du Chauffage,
          Ventilation, Climatisation(CVC) des bureaux, écoles, entrepôts
        </p>
        <br />
        <h2>Reconversion</h2>
        <p>
          Au final, je me suis rendu compte que l'environnement de travail
          quand-on travaille dans le BTP(bruit, poussière, température...)
          étaient des choses auxquelles je ne pourrait m'y habituer. C'est
          pourquoi, j'ai arrêté d'être salarié de cette société en juillet 2022
        </p>
      </div>
    </div>
  );
};
export default ParcoursProfessionnel;
