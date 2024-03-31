import { useState } from "react";
import "../styling/Calculathor.css";

type CalculathorProps = {
  isVisible: boolean;
  onClose: () => void;
};

function Calculathor({ isVisible, onClose }: CalculathorProps) {
  const [displayValue, setDisplayValue] = useState<string>("");

  const handleClear = (): void => {
    setDisplayValue("");
  };

  const handleDelete = (): void => {
    setDisplayValue(displayValue.slice(0, -1));
  };

  const handleDecimal = (): void => {
    if (!displayValue.includes(".")) {
      setDisplayValue(displayValue + ".");
    }
  };

  const handleOperator = (operator: string): void => {
    setDisplayValue(displayValue + operator);
  };

  const handleNumber = (number: string): void => {
    setDisplayValue(displayValue + number);
  };

  const handleEquals = (): void => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  return (
    <form className={isVisible ? "" : "hidden"}>
      <div className="calcdisplay ">
        {/* closing row */}
        <div className="row g-3 ">
          <div className="col-10 align-self-center">
            <h3 className="calctitle">
              <i className="bi bi-calculator"></i> Calculathor
            </h3>
          </div>
          <div className="col-2">
            <button
              type="button"
              value="Close"
              onClick={onClose}
              className="calcclose btn btn-primary"
            >
              X
            </button>
          </div>
        </div>
        {/* monitor first row  g-3 */}
        <div className="row  g-3">
          <div className="col-12">
            <input
              className="inputMonitor"
              type="text"
              name="display"
              value={displayValue}
              placeholder="Click buttons to start"
              readOnly
            />
          </div>
        </div>
        {/* 2ndrow */}
        <div className="row  g-3">
          <div className="col-3">
            <button
              type="button"
              value="AC"
              onClick={handleClear}
              className="calcbutt btn btn-primary"
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
          <div className="col-3">
            <button
              type="button"
              value="DEL"
              onClick={handleDelete}
              className="calcbutt btn btn-primary"
            >
              <i className="bi bi-backspace-fill"></i>
            </button>
          </div>
          <div className="col-3">
            <button
              type="button"
              value="."
              onClick={handleDecimal}
              className="calcbutt btn btn-primary"
            >
              <i className="bi bi-dot"></i>
            </button>
          </div>
          <div className="col-3">
            <button
              type="button"
              value="/"
              onClick={() => handleOperator("/")}
              className="calcbutt btn btn-primary"
            >
              ÷
            </button>
          </div>
        </div>
        {/* 3rd row  g-3 */}
        <div className="row  g-3">
          <div className="col-3">
            <button
              type="button"
              value="7"
              onClick={() => handleNumber("7")}
              className="calcbutt btn btn-primary"
            >
              7
            </button>
          </div>
          <div className="col-3">
            <button
              type="button"
              value="8"
              onClick={() => handleNumber("8")}
              className="calcbutt btn btn-primary"
            >
              8
            </button>
          </div>
          <div className="col-3">
            <button
              type="button"
              value="9"
              onClick={() => handleNumber("9")}
              className="calcbutt btn btn-primary"
            >
              9
            </button>
          </div>
          <div className="col-3">
            <button
              type="button"
              value="*"
              onClick={() => handleOperator("*")}
              className="calcbutt btn btn-primary"
            >
              *
            </button>
          </div>
        </div>
        {/* 4throw */}
        <div className="row  g-3">
          <div className="col-3">
            <button
              type="button"
              value="4"
              onClick={() => handleNumber("4")}
              className="calcbutt btn btn-primary"
            >
              4
            </button>
          </div>
          <div className="col-3">
            <button
              type="button"
              value="5"
              onClick={() => handleNumber("5")}
              className="calcbutt btn btn-primary"
            >
              5
            </button>{" "}
          </div>
          <div className="col-3">
            <button
              type="button"
              value="6"
              onClick={() => handleNumber("6")}
              className="calcbutt btn btn-primary"
            >
              6
            </button>
          </div>
          <div className="col-3">
            <button
              type="button"
              value="-"
              onClick={() => handleOperator("-")}
              className="calcbutt btn btn-primary"
            >
              -
            </button>
          </div>
        </div>
        {/* 5th row  g-3 */}
        <div className="row  g-3">
          <div className="col-3">
            <button
              type="button"
              value="1"
              onClick={() => handleNumber("1")}
              className="calcbutt btn btn-primary"
            >
              1
            </button>
          </div>
          <div className="col-3">
            <button
              type="button"
              value="2"
              onClick={() => handleNumber("2")}
              className="calcbutt btn btn-primary"
            >
              2
            </button>
          </div>
          <div className="col-3">
            <button
              type="button"
              value="3"
              onClick={() => handleNumber("3")}
              className="calcbutt btn btn-primary"
            >
              3
            </button>
          </div>
          <div className="col-3">
            <button
              type="button"
              value="+"
              onClick={() => handleOperator("+")}
              className="calcbutt btn btn-primary"
            >
              +
            </button>
          </div>
        </div>
        {/* 6th row  g-3 */}
        <div className="row  g-3">
          <div className="col-3">
            <button
              type="button"
              value="0"
              onClick={() => handleNumber("0")}
              className="calcbutt btn btn-primary"
            >
              0
            </button>
          </div>
          <div className="col-6">
            <button
              type="button"
              value="00"
              onClick={() => handleNumber("00")}
              className="calcbutt btn btn-primary"
            >
              00
            </button>
          </div>
          <div className="col-3">
            <button
              type="button"
              value="="
              onClick={handleEquals}
              id="calcequal"
              className="calcbutt btn btn-primary"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Calculathor;
