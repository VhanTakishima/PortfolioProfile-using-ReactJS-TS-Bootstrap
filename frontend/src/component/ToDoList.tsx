/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import "../styling/ToDoList.css";
import "../styling/Notes.css";
import { useDebugValue, useEffect, useState } from "react";
import { Note as NoteModels } from "../models/note";
import Notes from "./Notes";
import AddEditNoteForm from "./AddEditNoteForm";
import * as NotesApi from "../network/notes_api";

type ToDoListProps = {
  isVisible: boolean;
  onClose: () => void;
};

function ToDoList({ isVisible, onClose }: ToDoListProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [notes, setNotes] = useState<NoteModels[]>([]);
  const [noteToEdit, setNoteToEdit] = useState<NoteModels | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [tableSize, setTableSize] = useState<boolean>(false);

  useEffect(() => {
    console.log("showModal value:", showModal);
  }, [showModal]);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const notes = await NotesApi.fetchNotes();
        setNotes(notes);
      } catch (error) {
        console.error(error);
        console.log(JSON.stringify(notes));
        alert(error);
      }
    };

    loadNotes();
  }, []);

  // useEffect(() => {
  //   noteToEdit == null ? setTableSize(false) : setTableSize(true);
  // });

  useEffect(() => {});

  async function deleteNote(note: NoteModels) {
    try {
      await NotesApi.deleteNote(note._id);
      setNotes(notes.filter((existingNote) => existingNote._id !== note._id));
    } catch (error) {
      console.error;
      alert(error);
    }
  }

  return (
    <div className={isVisible ? "" : "hidden"}>
      <div className="tododisplay col">
        <div className="row g-2 mt-2">
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
              className="btn btn-primary todoclose w-100"
            >
              X
            </button>
          </div>
        </div>
        {noteToEdit && (
          <div className="row g-2 mt-2 ">
            <div className="col-6">
              <button
                className="btn btn-primary todoclose w-100 "
                data-bs-toggle="modal"
                data-bs-target="#showModal"
                onClick={() => {
                  setShowModal(true);
                  setTableSize(true);
                  console.log("showmodel is " + showModal);
                }}
              >
                Edit Data{" "}
              </button>
            </div>
            <div className="col-6">
              <button
                className="btn btn-primary todoclose w-100"
                onClick={() => {
                  setNoteToEdit(null);
                  setShowModal(false);
                  setTableSize(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
          // <AddEditNoteForm
          //   noteToEdit={noteToEdit}
          //   onNoteSaved={(updatedNote) => {
          //     setNotes(
          //       notes.map((existingNote) =>
          //         existingNote._id === updatedNote._id
          //           ? updatedNote
          //           : existingNote
          //       )
          //     );
          //     setNoteToEdit(null);
          //     !noteToEdit;
          //   }}
          // />
        )}
        {!noteToEdit && (
          <AddEditNoteForm
            onNoteSaved={(newNote) => {
              setNotes([...notes, newNote]);
              setTableSize(false);
            }}
            setTableSize={function (_state: boolean): void {
              throw new Error("Function not implemented.");
            }}
          />
        )}

        {showModal && (
          <div
            className="modalfade"
            id="showModal"
            aria-labelledby="showModalLabel"
            aria-hidden="true"
          >
            <div className="modal-body">
              {" "}
              {noteToEdit && (
                <AddEditNoteForm
                  noteToEdit={noteToEdit}
                  setTableSize={setTableSize}
                  onNoteSaved={(updatedNote) => {
                    setNotes(
                      notes.map((existingNote) =>
                        existingNote._id === updatedNote._id
                          ? updatedNote
                          : existingNote
                      )
                    );
                    setNoteToEdit(null);
                    setShowModal(false); // Close the modal after saving
                  }}
                />
              )}
            </div>
          </div>
        )}

        {/* will add state and function to hide the previous AddEditNoteForm */}
        {/* <div className="row g-2 mt-1">
          <div className="col-3">
            <input
              type="text"
              className="taskTitle h-100"
              value={taskTitle}
              placeholder="Enter Task Title"
              onChange={handleTaskTitleChange}
            />
          </div>
          <div className="col-7 ">
            <input
              type="text"
              className="taskEntry h-100"
              value={taskEntry}
              placeholder="Enter Task Entry"
              onChange={handleTaskEntryChange}
            />
          </div>
          <div className="col-2">
            <Button
              type="submit"
              form="taskForm"
              value="task"
              className=" w-100"
              // onClick={}
            >
              Add Task
            </Button>
          </div>
        </div> */}
        {/* taskrow */}
        <div className="row">
          <div
            className={
              tableSize
                ? "col mt-3 table-div-trimmed"
                : "col mt-3 table-div-default"
            }
          >
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
              {/* body component */}
              {notes.map((note) => (
                <Notes
                  note={note}
                  key={note._id}
                  onDeleteNoteClicked={deleteNote}
                  onNoteClicked={setNoteToEdit}
                />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
