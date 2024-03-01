
import React from "react"
import { useState, useEffect } from "react"
// import ReactDOM from "react-dom"

const CorrectWord = ["John", "Vhan", "JPVC","Live","love","Code"];
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let currentIndex = 0;
let currentWord = CorrectWord[currentIndex];
let animationInterval;



function getRandomLetter() {
  return letters[Math.floor(Math.random() * 26)];
}

function startAnimation() {
  let iteration = 0;
  const targetElements = document.querySelectorAll(".randomLetters");

  clearInterval(animationInterval);

  animationInterval = setInterval(() => {
    targetElements.forEach((targetElement) => {
      targetElement.innerText = targetElement.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return currentWord[index];
          }

          return getRandomLetter();
        })
        .join("");
    });

    if (iteration >= currentWord.length) {
      clearInterval(animationInterval);
      setTimeout(() => {
        clearWordAndProceed();
      }, 1000); // Freeze for 1 second
    }

    iteration += 1;
  }, 60);
}

function clearWordAndProceed() {
  currentIndex = (currentIndex + 1) % CorrectWord.length;
  currentWord = CorrectWord[currentIndex];
  startAnimation();
}
export default function LogoLoad(){
  useEffect(() => {
    startAnimation();
    return () => clearInterval(animationInterval); // Cleanup interval on unmount
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="root">
      {/* Add any JSX elements you want here */}
    </div>
  );
}

// ReactDOM.render(startAnimation(),document.getElementsByClassName("root"));