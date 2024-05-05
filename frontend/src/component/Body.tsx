/* eslint-disable prefer-const */
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

  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(0);
  useEffect(() => {
    () => {};
    const secondInterval = setInterval(() => {
      // Update the clock state every second
      setSeconds((prevSeconds) =>
        prevSeconds === 59
          ? (() => {
              setMinutes((prevMinutes) => prevMinutes + 1);
              return 0;
            })()
          : prevSeconds + 1
      );
    }, 1000);

    // Clean up the interval to avoid memory leaks
    return () => clearInterval(secondInterval);
  }, []); // Empty dependency array to run effect only once

  return (
    <div className="container-fluid responsiveness-div-body">
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
          My name is <span className="text-primary">John</span>
          <br />
          from The <span className="text-primary">Philippines</span>
        </h1>
        <h2 className="text-body mb-3">
          I'm a <br className="show-on-mobile" />
          <span className="text-primary">
            {[typedWords]} <Cursor />
          </span>
        </h2>
        <h6 className="text-body mb-4 responsive-h6">
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

        <a
          className="btn btn-primary"
          role="button"
          href="https://drive.google.com/file/d/1i1aaIdGncT7joTHt2NvaZKCkeJ9ohYdp/view?usp=drive_link"
          target="_blank"
        >
          Download My Resume
        </a>
        <p className="clockTest">
          {minutes} minutes {seconds} seconds on the page{" "}
        </p>
      </div>
      {/* to be added later */}
      {/* <img
          src="https://github-readme-stats.vercel.app/api/top-langs?username=vhantakishima&show_icons=true&locale=en&layout=compact&theme=chartreuse-dark"
          alt="vhantakishima"
        /> */}
    </div>
  );
}
export default Body;
