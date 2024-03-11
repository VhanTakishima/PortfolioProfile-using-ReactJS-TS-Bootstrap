import "../styling/ThemeColor.css";
import "../styling/Nav.css";
import "../styling/Body.css";
import "bootstrap/dist/css/bootstrap.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState, useEffect } from "react";

function Body() {
  //used array destructuring in typedWords variable from text to [typedWords] and from {typedWords} to {[typedWords]}
  let [typedWords] = useTypewriter({
    words: ["Gamer", "Programmer", "Graphic Designer", "Novice Animator"],
    loop: false,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const [clock, setClock] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the clock state every second
      setClock((prevClock) => prevClock + 1);
    }, 1000);

    // Clean up the interval to avoid memory leaks
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="container-fluid body-whole">
      <div className="leftColumn">
        <img
          src="../src/assets/Image2.png"
          className="img-fluid"
          alt="..."
        ></img>
      </div>
      <div className="rightColumn">
        <h1 className="text-body">
          {" "}
          Hi my name is John
          <br />
          from The Philippines
        </h1>
        <h2 className="text-body mb-3">
          I'm a <span className="text-primary">{[typedWords]}</span>
          <Cursor />
        </h2>
        <h6 className="text-body mb-4">
          {" "}
          I'm currently a Graphic specialist and aspiring to start my
          programming career. I've been studying and applying my knowledge in
          Basic Frontend tools (HTML,CSS and JS) with SASS in my public
          repository in github. As of the moment I'm starting my ReactJS
          journey(planning to migrate and convert my first repo into
          ReactJS-Bootstrap-Typescript based web site). I am willing to learn
          and update my knowledge in Web programming and I am hoping to get
          hired so I can learn more from your company's experts and practices as
          well. I have a good eye in detail and encountering & working on XML
          (JSx is just another form, of XML) files in a daily basis. I maybe a
          newbie as a professional web development but I have unofficial coding
          experiences as well. experiences that are just for hobbies, more like
          applied in the games I played in the past. Like creating a BBCode
          banner for my faction using BBCode as Primitive HTML, small tweaks in
          the mod scripts in skyrim and other pc and android offline games like
          mindustry, terarria and some other small games that I can tweak their
          game files . I'm also experimenting and tweaking with existing scripts
          in Linux (in short a script kiddie).{" "}
        </h6>
        <button className="btn btn-primary">Download My Resume</button>
        <p className="clockTest">{clock} seconds on the page </p>
      </div>
    </div>
  );
}
export default Body;
