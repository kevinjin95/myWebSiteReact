import { React } from "react";
import { useState } from "react";

const Projets = () => {
  const [text, setText] = useState();
  const [image, setImage] = useState();
  const e = "hello";
  const hangmanProj = () => {
    setText(e);
    setImage("./IMG/Calculator.png");
  };
  // useEffect(() => {

  // }, []);
  // const [image, setImage] = useState();
  // useEffect(() => {
  //   setImage("./IMG/Calculator.png");
  // }, []);
  // const hangman = document.getElementById("hangmanProj");
  // hangman.addEventListener('click', (e) => {
  //   setText(e);
  // });
  return (
    <div onClick={hangmanProj}>
      <ul>
        <li>hangman</li>
      </ul>
      <div className="projet">
        <ul>{text}</ul>
        <img src={image} alt="img" />
      </div>
    </div>
  );
};
// export { text };
export default Projets;
