import { React } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>Présentation</li>
        </NavLink>
        <NavLink to="/ParcoursScolaire">
          <li>Parcours scolaire</li>
        </NavLink>
        <NavLink to="/ParcoursProfessionnel">
          <li>Parcours professionnel</li>
        </NavLink>
        <NavLink to="/Competences">
          <li>Compétences</li>
        </NavLink>
        <NavLink to="/Projets">
          <li>Projets</li>
        </NavLink>
        <NavLink to="/CentreInterets">
          <li>Centre intérêts</li>
        </NavLink>
      </ul>
    </div>
  );
};
export default Navigation;
