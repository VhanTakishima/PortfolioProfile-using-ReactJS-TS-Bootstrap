/* eslint-disable @typescript-eslint/no-unused-vars */
import "../styling/Mines.css";

type MinesMoralesProps = {
  isVisible: boolean;
  onClose: () => void;
};

function MinesMorales({ isVisible, onClose }: MinesMoralesProps) {
  return (
    <form className={isVisible ? "" : "hidden"}>
      <div className="minesdisplay col">
        <button
          type="button"
          value="Close"
          onClick={onClose}
          className=" btn btn-primary"
        >
          X
        </button>
      </div>
    </form>
  );
}

export default MinesMorales;
