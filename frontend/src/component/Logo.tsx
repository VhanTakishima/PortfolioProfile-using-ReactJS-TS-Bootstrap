import { useEffect, useState } from "react";
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
      }, 1000);
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
  const [fontSize, setFontSize] = useState<number>(0);
  const [navbarHeight, setNavbarHeight] = useState<number>(0);

  useEffect(() => {
    const updateFontSize = () => {
      const screenHeight = window.innerHeight;
      const navbarElement = document.querySelector(".navbar");
      if (navbarElement) {
        const navbarRect = navbarElement.getBoundingClientRect();
        const navbarHeight = navbarRect.height;
        // Set font size based on a percentage of navbar height
        setFontSize(navbarHeight * 0.9); // Adjust this value as needed
        setNavbarHeight(navbarHeight);
        console.log(screenHeight);
      }
    };

    updateFontSize(); // Initial font size update

    window.addEventListener("resize", updateFontSize); // Update font size on window resize

    startAnimation();

    return () => {
      clearInterval(animationInterval); // Cleanup interval on unmount
      window.removeEventListener("resize", updateFontSize); // Cleanup event listener on unmount
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="logoContainer"
      style={{
        height: `${navbarHeight}px`,
        lineHeight: `${navbarHeight}px`,
      }}
    >
      <p
        className="randomLetters text-secondary"
        style={{ fontSize: `${fontSize}px` }}
      >
        LOVE
      </p>
    </div>
  );
}
