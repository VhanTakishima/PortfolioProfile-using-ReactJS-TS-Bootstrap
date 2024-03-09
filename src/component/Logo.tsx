import { useEffect } from "react";
import "../styling/Nav.css";
const CorrectWord: string[] = ["JOHN", "VHAN", "JPVC", "LIVE", "LOVE", "CODE"];
const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let currentIndex: number = 0;
let currentWord: string = CorrectWord[currentIndex];
let animationInterval: number;

function getRandomLetter(): string {
  return letters[Math.floor(Math.random() * 26)];
}

function startAnimation(): void {
  let iteration: number = 0;
  const targetElements: NodeListOf<Element> =
    document.querySelectorAll(".randomLetters");

  clearInterval(animationInterval);

  animationInterval = setInterval(() => {
    targetElements.forEach((targetElement) => {
      targetElement.textContent = Array.from(targetElement.textContent || "")
        .map((_letter: string, index: number) => {
          // Use underscore to indicate unused variable
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

function clearWordAndProceed(): void {
  currentIndex = (currentIndex + 1) % CorrectWord.length;
  currentWord = CorrectWord[currentIndex];
  startAnimation();
}

export default function Logo(): JSX.Element {
  useEffect(() => {
    startAnimation();
    return () => clearInterval(animationInterval); // Cleanup interval on unmount
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <p className="randomLetters text-secondary">LOVE</p>
    </div>
  );
}
