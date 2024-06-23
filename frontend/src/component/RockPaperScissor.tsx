/* eslint-disable @typescript-eslint/no-unused-vars */
import "../styling/RockPaperScissor.css";
import { useState } from "react";

type RockPaperScissorProps = {
  isVisible: boolean;
  onClose: () => void;
};
//to add reel funtion here for each button for starters

function RockPaperScissor({ isVisible, onClose }: RockPaperScissorProps) {
  const [isResetVisible, setResetVisible] = useState(false);
  const [isPicksVisible, setPicksVisible] = useState(true);

  const picks = ["rock", "paper", "scissor"];
  const icon_width = 500,
    icon_height = 411,
    num_icons = 3,
    time_per_icon = 100;

  const roll = (reel: HTMLElement, i?: number) => {
    const delta = num_icons + Math.round(Math.random() * num_icons);
    const style = getComputedStyle(reel);
    const backgroundPositionY = parseFloat(style.backgroundPositionY);
    reel.style.transition = `background-position-y ${
      2 + delta * time_per_icon
    }ms`;
    reel.style.backgroundPositionY = `${
      backgroundPositionY + delta * icon_height
    }px`;
  };

  const resetRoll = (reel: HTMLElement, i?: number) => {
    const delta = num_icons + Math.round(Math.random() * num_icons);
    const style = getComputedStyle(reel);
    const backgroundPositionY = parseFloat(style.backgroundPositionY);
    reel.style.transition = `background-position-y ${
      2 + delta * time_per_icon
    }ms`;
    reel.style.backgroundPositionY = `0px`;
  };

  function rollAll() {
    const reelsCompList = document.querySelectorAll(".reel");
    [...reelsCompList].map((reel, i) => {
      console.log(reel, i);
      roll(reel as HTMLElement, i);
      setResetVisible(true);
      setPicksVisible(false);
    });
  }

  const clickRollRock = () => {
    const rollRock = (reel: HTMLElement, i?: number) => {
      const delta = num_icons + Math.round(Math.random() * num_icons);
      const style = getComputedStyle(reel);
      const backgroundPositionY = parseFloat(style.backgroundPositionY);
      reel.style.transition = `background-position-y ${
        2 + delta * time_per_icon
      }ms`;
      reel.style.backgroundPositionY = `2466px`;
    };
    const reelsCompList = document.querySelectorAll(".reelplayer");
    [...reelsCompList].map((reel, i) => {
      console.log(reel, i);
      rollRock(reel as HTMLElement, i);
      rollAll();
    });
  };

  const clickRollPaper = () => {
    const rollPaper = (reel: HTMLElement, i?: number) => {
      const delta = num_icons + Math.round(Math.random() * num_icons);
      const style = getComputedStyle(reel);
      const backgroundPositionY = parseFloat(style.backgroundPositionY);
      reel.style.transition = `background-position-y ${
        2 + delta * time_per_icon
      }ms`;
      reel.style.backgroundPositionY = `2055px`;
    };
    const reelsCompList = document.querySelectorAll(".reelplayer");
    [...reelsCompList].map((reel, i) => {
      console.log(reel, i);
      rollPaper(reel as HTMLElement, i);
      rollAll();
    });
  };
  const clickRollScissor = () => {
    const rollScissor = (reel: HTMLElement, i?: number) => {
      const delta = num_icons + Math.round(Math.random() * num_icons);
      const style = getComputedStyle(reel);
      const backgroundPositionY = parseFloat(style.backgroundPositionY);
      reel.style.transition = `background-position-y ${
        2 + delta * time_per_icon
      }ms`;
      reel.style.backgroundPositionY = `1644px`;
    };
    const reelsCompList = document.querySelectorAll(".reelplayer");
    [...reelsCompList].map((reel, i) => {
      console.log(reel, i);
      rollScissor(reel as HTMLElement, i);
      rollAll();
    });
  };

  function resetRollAll() {
    const reelsCompList = document.querySelectorAll(".reel");
    [...reelsCompList].map((reel, i) => {
      console.log(reel, i);
      resetRoll(reel as HTMLElement, i);
      setResetVisible(false);
      setPicksVisible(true);
    });
  }

  return (
    <form className={isVisible ? "" : "hidden"}>
      <div className="rockpaperscissordisplay container ps-5 pe-5">
        <button
          type="button"
          value="Close"
          onClick={onClose}
          className=" btn btn-primary"
        >
          X
        </button>
        <div className="titlearea row">Rock Ppaper scissor</div>
        <div className="gamearea row">
          <div className="selector col-4">
            <div className="row">
              <h4>Choose your pick!!</h4>
              {isPicksVisible && (
                <>
                  <button className=" btn btn-primary" onClick={clickRollRock}>
                    Rock
                  </button>
                  <button className=" btn btn-primary" onClick={clickRollPaper}>
                    Paper
                  </button>
                  <button
                    className=" btn btn-primary"
                    onClick={clickRollScissor}
                  >
                    Scissor
                  </button>
                </>
              )}
              {!isPicksVisible && (
                <button className=" btn btn-primary" onClick={resetRollAll}>
                  Reset
                </button>
              )}
            </div>
          </div>
          <div className="reelareaplayer col-4 p-0">
            <div className="reelplayer h-100"></div>
          </div>
          <div className="reelareacomp  col-4 p-0">
            <div className="reel h-100"></div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default RockPaperScissor;
