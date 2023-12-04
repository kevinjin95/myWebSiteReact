import React from "react";
import Logo from "../component/Logo";
import Navigation from "../component/Navigation";
import { useState } from "react";
import { Fade } from "../component/Fade";

const Projets = () => {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen((o) => !o);
  const [text, setText] = useState(
    "Veuillez séléctionner un projet à afficher"
  );
  const [image, setImage] = useState(null);
  const hangmanProj = () => {
    setText("Projet de groupe, développé en golang");
    setImage("./IMG/Hangman.png");
  };

  const hangmanWebProj = () => {
    setText("Projet de groupe, développé en golang et html/css");
    setImage("./IMG/HangmanWeb.png");
  };

  const groupieProj = () => {
    setText("Projet de groupe, développé en golang avec la librairie fyne");
    setImage("./IMG/Groupie.png");
  };

  const gameJs = () => {
    setText("Projet solo, développé avec en javascript pure");
    setImage("./IMG/JeuJs.png");
  };

  const forum = () => {
    setText("Projet de groupe, développé en golang");
    setImage("./IMG/Forum.png");
  };

  const calculatrice = () => {
    setText("Projet solo, développé en python et la librairie tkinter");
    setImage("./IMG/Calculatrice.png");
  };
  return (
    <div className="Main">
      <div className="NavBar">
        <Logo />
        <Navigation />
      </div>
      <div className="Content">
        <h1>Mes projets</h1>
        <h2>Introduction</h2>
        <p>
          Cette partie a pour but de parler de mes projets de code auxquels j'ai
          été impliqué. Il présentera les projets brèvement cités la partie
          Compétences par ordre chronologique, le rôle que j'ai eu dans chacun,
          le tout avec une image présentant chacun des projets.
        </p>
        <br />
        <div className="navBarProj">
          <div onClick={(hangmanProj, toggle)}>
            <li>Hangman</li>
          </div>
          <div onClick={(hangmanWebProj, toggle)}>
            <li>Hangman web</li>
          </div>
          <div onClick={(groupieProj, toggle)}>
            <li>Groupie tracker</li>
          </div>
          <div onClick={(gameJs, toggle)}>
            <li>Jeu js</li>
          </div>
          <div onClick={(forum, toggle)}>
            <li>Forum</li>
          </div>
          <div onClick={(calculatrice, toggle)}>
            <li>Calculatrice</li>
          </div>
        </div>
        <Fade visible={!!open} from={{ opacity: 0 }} animateEnter>
          <div className="projet">
            <ul>{text}</ul>
            <img src={image} alt="img" />
          </div>
        </Fade>
      </div>
    </div>
  );
};
export default Projets;
