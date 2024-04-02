import "../styling/ToDoList.css";
import { useState, useEffect } from "react";

type Task = {
  id: number;
  description: string;
};

type ToDoListProps = {
  isVisible: boolean;
  onClose: () => void;
};

function ToDoList({ isVisible, onClose }: ToDoListProps) {
  const [taskEntry, setTaskEntry] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskIdCounter, setTaskIdCounter] = useState<number>(1);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editTaskDescription, setEditTaskDescription] = useState<string>("");

  //new way to get event.target.value to useState
  // evrytime I type it set taskll entry to taskEntry
  const handleTaskEntryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTaskEntry(event.target.value);
  };

  const addTask = () => {
    if (taskEntry.trim() !== "") {
      setTasks([
        ...tasks,
        {
          id: taskIdCounter,
          description: taskEntry,
        },
      ]);
      setTaskEntry("");
      setTaskIdCounter(taskIdCounter + 1);
    }
  };

  const handleTaskDelete = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleTaskUpdate = (taskId: number, newDescription: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            description: newDescription,
          };
        }
        return task;
      })
    );
    setEditTaskId(null);
    setEditTaskDescription("");
  };

  return (
    <form className={isVisible ? "" : "hidden"}>
      <div className="tododisplay col">
        <div className="row">
          <div className="col-10">
            <h3 className="todotitle">
              <i className="bi bi-card-checklist"></i> To-Do List
            </h3>
          </div>
          <div className="col-2">
            <button
              type="button"
              value="Close"
              onClick={onClose}
              className="btn btn-primary todoclose"
            >
              X
            </button>
          </div>
        </div>
        <div className="row g-3 mt-1">
          <div className="col-8 h-100">
            <input
              type="text"
              className="taskEntry"
              value={taskEntry}
              placeholder="Start adding tasks"
              onChange={handleTaskEntryChange}
            />
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <button
              type="button"
              value="task"
              className="add-Task-btn btn btn-primary w-100"
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
        </div>
        {/* taskrow */}
        <div className="row">
          <div className="col mt-3">
            <table className="table">
              <thead>
                <tr>
                  <th className="col-1">TaskID</th>
                  <th className="col-8"> Task </th>
                  <th className="col-3"> CRUD</th>
                </tr>
              </thead>

              <tbody>
                {tasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>
                      {editTaskId === task.id ? (
                        <input
                          type="text"
                          value={editTaskDescription}
                          onChange={(e) =>
                            setEditTaskDescription(e.target.value)
                          }
                        />
                      ) : (
                        task.description
                      )}
                    </td>
                    <td>
                      {editTaskId === task.id ? (
                        <button
                          type="button"
                          onClick={() =>
                            handleTaskUpdate(task.id, editTaskDescription)
                          }
                          className="btn btn-success"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setEditTaskId(task.id);
                            setEditTaskDescription(task.description);
                          }}
                          className="btn btn-warning"
                        >
                          Edit
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => handleTaskDelete(task.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToDoList;
