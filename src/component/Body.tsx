import "../styling/ThemeColor.css";
import "../styling/Nav.css";
import "bootstrap/dist/css/bootstrap.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Body() {
  //used array destructuring in typedWords variable from text to [typedWords] and from {typedWords} to {[typedWords]}
  let [typedWords] = useTypewriter({
    words: ["Gamer", "Programmer", "Graphic Designer", "Novice Animator"],
    loop: false,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="container-fluid">
      <div className="leftColumn">
        <h1 className=""> Hi my name is John</h1>
        <h1>from philippines</h1>
        <h2>
          I'm a <span>{[typedWords]}</span>
          <Cursor />
        </h2>
      </div>
      <div className="rightColumn"></div>
    </div>
  );
}
export default Body;
