// import React from "react";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Presentation from "./pages/Presentation";
import ParcoursScolaire from "./pages/ParcoursScolaire";
import ParcoursProfessionnel from "./pages/ParcoursProfessionnel";
import Competences from "./pages/Competences";
import Projets from "./pages/Projets";
import CentreInterets from "./pages/CentreInterets";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/ParcoursScolaire" element={<ParcoursScolaire />} />
        <Route
          path="/ParcoursProfessionnel"
          element={<ParcoursProfessionnel />}
        />
        <Route path="/Competences" element={<Competences />} />
        <Route path="/Projets" element={<Projets />} />
        <Route path="/CentreInterets" element={<CentreInterets />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
