/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "../styling/RockPaperScissor.css";
import { useState, useEffect } from "react";

type RockPaperScissorProps = {
  isVisible: boolean;
  onClose: () => void;
};

function RockPaperScissor({ isVisible, onClose }: RockPaperScissorProps) {
  const [isResetVisible, setResetVisible] = useState(false);
  const [isPicksVisible, setPicksVisible] = useState(true);
  const [playerChoice, setPlayerChoice] = useState("rock");
  const [computerChoice, setComputerChoice] = useState("rock");
  const [playerPoints, setPlayerPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [resetRoundTimeout, setResetRoundTimeout] = useState(10);
  const [resetState, setResetState] = useState(false);

  useEffect(() => {
    const timeOut = setInterval(() => {
      setResetRoundTimeout(
        (prevResetRoundTimeout) => prevResetRoundTimeout - 1
      );
    }, 1000);
    return () => clearInterval(timeOut);
  }, []);

  useEffect(() => {
    if (resetRoundTimeout === 0) {
      setTimeout(() => {
        setResetRoundTimeout(10);
      }, 1000);
      resetRollAll();
    }
  }, [resetRoundTimeout]);

  useEffect(() => {
    if (playerChoice && computerChoice && resetState) {
      pointsHandler();
    }
  }, [playerChoice, computerChoice]);

  const pointsHandler = () => {
    if (playerChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissor") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissor" && computerChoice === "paper")
    ) {
      setPlayerPoints((prevPoints) => prevPoints + 1);
    } else if (playerChoice === "" || computerChoice === "") {
      console.log("Clearing choices...");
    } else {
      setComputerPoints((prevPoints) => prevPoints + 1);
    }
  };

  const choices = ["rock", "paper", "scissor"];
  const toTitleCase = (str: string) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const icon_width = 500,
    icon_height = 400,
    num_icons = 3,
    time_per_icon = 100;

  const delta = num_icons + Math.round(Math.random() * num_icons);

  const rollRock = (reel: HTMLElement) => {
    reel.style.transition = `background-position-y ${
      2 + delta * time_per_icon
    }ms`;
    // reel.style.backgroundPositionY = `173vh`;
    reel.style.backgroundPositionY = "0%";
  };

  const rollPaper = (reel: HTMLElement) => {
    reel.style.transition = `background-position-y ${
      2 + delta * time_per_icon
    }ms`;
    // reel.style.backgroundPositionY = `290vh`;
    reel.style.backgroundPositionY = `50%`;
  };

  const rollScissor = (reel: HTMLElement) => {
    reel.style.transition = `background-position-y ${
      2 + delta * time_per_icon
    }ms`;
    // reel.style.backgroundPositionY = `405vh`;
    reel.style.backgroundPositionY = "100%";
  };

  const rollFunctions: {
    [key: string]: (element: HTMLElement) => void;
  } = {
    rock: rollRock,
    paper: rollPaper,
    scissor: rollScissor,
  };

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    return randomChoice;
  };

  const handleOnClick = (choice: string) => {
    setPlayerChoice(choice);
    const reelsPlayerList = document.querySelectorAll(".reelplayer");
    [...reelsPlayerList].map((reel) => {
      const rollFunction = rollFunctions[choice];
      rollFunction(reel as HTMLElement);
    });

    const compChoice = generateComputerChoice();
    const reelsCompList = document.querySelectorAll(".reelcomputer");
    [...reelsCompList].map((reel) => {
      const rollFunction = rollFunctions[compChoice];
      rollFunction(reel as HTMLElement);
    });

    setResetVisible(true);
    setPicksVisible(false);
    console.log({ playerChoice: choice }, { computerChoice: compChoice });
    console.log(playerPoints);
    console.log(computerPoints);
    setResetState(true);
  };

  const resetRollAll = () => {
    const reelsCompList = document.querySelectorAll(".reelcomputer");
    [...reelsCompList].map((reel) => {
      if (reel instanceof HTMLElement) {
        reel.style.transition = `background-position-y ${
          2 + delta * time_per_icon
        }ms`;
        reel.style.backgroundPositionY = `0px`;
      }
    });

    const reelsPlayerList = document.querySelectorAll(".reelplayer");
    [...reelsPlayerList].map((reel) => {
      if (reel instanceof HTMLElement) {
        reel.style.transition = `background-position-y ${
          2 + delta * time_per_icon
        }ms`;
        reel.style.backgroundPositionY = `0px`;
      }
    });

    setResetVisible(false);
    setPicksVisible(true);
    setPlayerChoice("");
    setComputerChoice("");
    setResetRoundTimeout(10);
    setResetState(false);
  };

  return (
    <form className={isVisible ? "" : "hidden"}>
      <div className="rockpaperscissordisplay container ps-5 pe-5">
        <button
          type="button"
          value="Close"
          onClick={onClose}
          className="btn btn-primary w-100"
        >
          X
        </button>

        <div className="titlearea row">
          <h4 className="col-4">Rock Paper Scissor</h4>
          <h4 className="col-4 text-center">Player's Points: {playerPoints}</h4>
          <h4 className="col-3 text-center">AI's Points: {computerPoints}</h4>
        </div>
        <div className="gamearea row">
          <div className="selector col-4">
            <div className="row">
              <h5 className="text-center">Choose your pick!!</h5>

              {isPicksVisible && (
                <>
                  {choices.map((choice, index) => (
                    <button
                      className="btn btn-primary"
                      key={index}
                      onClick={() => handleOnClick(choice)}
                    >
                      {toTitleCase(choice)}
                    </button>
                  ))}
                </>
              )}
              {!isPicksVisible && (
                <>
                  <button className="btn btn-primary" onClick={resetRollAll}>
                    Reset Now
                  </button>
                  <p className="text-center">
                    {" "}
                    Round will reset in: {resetRoundTimeout}s
                  </p>
                </>
              )}
              <div className="row h-auto">
                <div className="col-12 text-center">
                  {window.innerWidth > 1199 && (
                    <div className="d-flex flex-column align-items-center mt-4">
                      <p>
                        Mechanics: <br /> Rock beats Paper,Paper beats Scissors,
                        Scissor beats Rock. Simple as that.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="reelareaplayer col-4 p-0">
            <div className="reelplayer h-100"></div>
          </div>
          <div className="reelareacomp col-4 p-0">
            <div className="reelcomputer h-100"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            {window.innerWidth < 1199 && (
              <div>
                <p>
                  Mechanics: Rock beats Paper,Paper beats Scissors, Scissor
                  beats Rock. Simple as that.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

export default RockPaperScissor;
