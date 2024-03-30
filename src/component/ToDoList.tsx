import "../styling/ToDoList.css";
type ToDoListProps = {
  isVisible: boolean;
  onClose: () => void;
};

function ToDoList({ isVisible, onClose }: ToDoListProps) {
  return (
    <form className={isVisible ? "" : "hidden"}>
      <div className="tododisplay">
        <button
          type="button"
          value="Close"
          onClick={onClose}
          className="calcbutt btn btn-primary"
        >
          X
        </button>
      </div>
    </form>
  );
}

export default ToDoList;
