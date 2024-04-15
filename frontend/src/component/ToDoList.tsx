/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import "../styling/ToDoList.css";
import { useEffect, useState } from "react";
import { Note as NoteModels } from "../models/note";
import Notes from "./Notes";

type Task = {
  id: number;
  title: string;
  description: string;
};

type ToDoListProps = {
  isVisible: boolean;
  onClose: () => void;
};

function ToDoList({ isVisible, onClose }: ToDoListProps) {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskEntry, setTaskEntry] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskIdCounter, setTaskIdCounter] = useState<number>(1);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editTaskTitle, setEditTaskTitle] = useState<string>("");
  const [editTaskDescription, setEditTaskDescription] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [notes, setNotes] = useState<NoteModels[]>([]);
  const backendHost = "http://localhost:5000";

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const response = await fetch(backendHost + "/api/notes", {
          method: "GET",
          headers: { Accept: "application/json" },
        });
        const notes = await response.json();
        setNotes(notes);
        console.log(JSON.stringify(notes));
        if (response.status === 304) {
          // Use cached data or handle accordingly
          console.log("Using cached data for /api/notes");
        }
      } catch (error) {
        console.error(error);
        console.log(JSON.stringify(notes));
        alert(error);
      }
    };

    loadNotes();
  }, []);

  const handleTaskTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTaskTitle(event.target.value);
  };

  const handleTaskEntryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTaskEntry(event.target.value);
  };

  const addTask = () => {
    if (taskTitle.trim() !== "" && taskEntry.trim() !== "") {
      setTasks([
        ...tasks,
        {
          id: taskIdCounter,
          title: taskTitle,
          description: taskEntry,
        },
      ]);
      setTaskTitle("");
      setTaskEntry("");
      setTaskIdCounter(taskIdCounter + 1);
    }
  };

  const handleTaskDelete = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleTaskUpdate = (
    taskId: number,
    newTitle: string,
    newDescription: string
  ) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            title: newTitle,
            description: newDescription,
          };
        }
        return task;
      })
    );
    setEditTaskId(null);
    setEditTaskTitle("");
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
          <div className="col-4 h-100">
            <input
              type="text"
              className="taskTitle"
              value={taskTitle}
              placeholder="Enter Task Title"
              onChange={handleTaskTitleChange}
            />
          </div>
          <div className="col-5 h-100">
            <input
              type="text"
              className="taskEntry"
              value={taskEntry}
              placeholder="Enter Task Entry"
              onChange={handleTaskEntryChange}
            />
          </div>
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
          <div className="col mt-3 table-div">
            <table className="table">
              {/* still finds a way */}
              <thead>
                <tr className="table-width">
                  <th className="col-1">TaskID</th>
                  <th className="col-2">Task Title</th>
                  <th className="col-5">Task Description</th>
                  <th className="col-4">Modified/Created</th>
                </tr>
              </thead>
              {notes.map((note) => (
                <Notes note={note} key={note._id} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToDoList;
