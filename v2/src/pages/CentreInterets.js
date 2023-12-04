import React from "react";
import Logo from "../component/Logo";
import Navigation from "../component/Navigation";

const CentreInterets = () => {
  return (
    <div className="Main">
      <div className="NavBar">
        <Logo />
        <Navigation />
      </div>
      <div className="Content">
        <h1>Centre d'intérêts</h1>
        <h2>La littérature</h2>
        <p>
          Depuis la primaire, jusqu'à aujourd'hui, la littérature a toujours été
          un moyen pour moi de m'évader de la réalité, que ce soit un livre à
          lire pour les cours de français où encore de mon propre gré. Chacun de
          ces livres a été intéressants à lire, même si j'en retiendrai que
          certain d'entre eux:
        </p>
        <li>"Antigone" de Sophocle</li>
        <li>"Casse-Noisette"</li>
        <li>"Je suis une légende" de Richard Matheson</li>
        <li>"Cthulhu et autres nouvelles" de H.P. Lovecraft</li>
        <li>"Récit fantastiques" de théophile gautier</li>
        <br />
        <h2>Le jeu vidéo</h2>
        <p>
          Tout comme la littérature, les jeux vidéos ont été pour moi et le sont
          toujours, un moyen de voyager dans des mondes parallèles au nôtre. Mes
          jeux préférés sont sans aucune hésitation ceux de l'éditeur et
          développeur Klei, connu pour ses jeux de construction de base, de
          survie, de stratégie/casse-tête.
        </p>
        <br />
        <h2>Le 7e art</h2>
        <p>
          A croire que la réalité m'est ennuyeuse, j'apprécie regarder des
          oeuvres cinématographiques. Le genre de la SF m'attire tout
          particulièrement, voir ce que pourrait devenir la société, en cas de
          développement technologiquement, en cas de catastophe naturelle, ou
          encore d'invasion alien me fascine.
        </p>
        <p>
          Personne n'aimerait une invasion alien mais beaucoup rêve d'un
          développement technologique du style de "Ready player One", de "Blade
          runner" ou encore de "Ghost in the shell" en pensant aux avantages,
          possibilités que cela va ameneraient, mais je suis suis d'avis de
          penser que ce qu'on imagine dans les films/séries/romans/jeux SF
          devrait rester dedans.
        </p>
      </div>
    </div>
  );
};
export default CentreInterets;
