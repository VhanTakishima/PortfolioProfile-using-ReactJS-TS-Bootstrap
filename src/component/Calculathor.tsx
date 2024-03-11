import { useState } from "react";

function Calculathor() {
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
    <form action="">
      <div className="calcdisplay">
        <input type="text" name="display" value={displayValue} readOnly />
      </div>
      <div>
        <input
          type="button"
          value="AC"
          onClick={handleClear}
          className="calcbutt"
        />
        <input
          type="button"
          value="DEL"
          onClick={handleDelete}
          className="calcbutt"
        />
        <input
          type="button"
          value="."
          onClick={handleDecimal}
          className="calcbutt"
        />
        <input
          type="button"
          value="/"
          onClick={() => handleOperator("/")}
          className="calcbutt"
        />
      </div>
      <div>
        <input
          type="button"
          value="7"
          onClick={() => handleNumber("7")}
          className="calcbutt"
        />
        <input
          type="button"
          value="8"
          onClick={() => handleNumber("8")}
          className="calcbutt"
        />
        <input
          type="button"
          value="9"
          onClick={() => handleNumber("9")}
          className="calcbutt"
        />
        <input
          type="button"
          value="*"
          onClick={() => handleOperator("*")}
          className="calcbutt"
        />
      </div>
      <div>
        <input
          type="button"
          value="4"
          onClick={() => handleNumber("4")}
          className="calcbutt"
        />
        <input
          type="button"
          value="5"
          onClick={() => handleNumber("5")}
          className="calcbutt"
        />
        <input
          type="button"
          value="6"
          onClick={() => handleNumber("6")}
          className="calcbutt"
        />
        <input
          type="button"
          value="-"
          onClick={() => handleOperator("-")}
          className="calcbutt"
        />
      </div>
      <div>
        <input
          type="button"
          value="1"
          onClick={() => handleNumber("1")}
          className="calcbutt"
        />
        <input
          type="button"
          value="2"
          onClick={() => handleNumber("2")}
          className="calcbutt"
        />
        <input
          type="button"
          value="3"
          onClick={() => handleNumber("3")}
          className="calcbutt"
        />
        <input
          type="button"
          value="+"
          onClick={() => handleOperator("+")}
          className="calcbutt"
        />
      </div>
      <div>
        <input
          type="button"
          value="00"
          onClick={() => handleNumber("00")}
          className="calcbutt"
        />
        <input
          type="button"
          value="0"
          onClick={() => handleNumber("0")}
          className="calcbutt"
        />
        <input
          type="button"
          value="="
          onClick={handleEquals}
          className="calcbutt"
          id="calcequal"
        />
      </div>
    </form>
  );
}

export default Calculathor;
