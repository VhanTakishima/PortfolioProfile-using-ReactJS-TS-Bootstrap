/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Note as NoteModels } from "../models/note";
import { formatDate } from "../util/formatDate";
import { MdDelete } from "react-icons/md";
import { Button } from "react-bootstrap";
import { useEffect, useState, useMemo } from "react";

interface NotesProps {
  note: NoteModels;
  onNoteClicked: (note: NoteModels) => void;
  onDeleteNoteClicked: (note: NoteModels) => void;
  className?: string;
}

const Notes = ({
  note,
  onDeleteNoteClicked,
  onNoteClicked,
  className,
}: NotesProps) => {
  const { _id, title, text, createdAt, updatedAt } = note;
  let createdAtUpdatedText: string;
  if (updatedAt > createdAt) {
    createdAtUpdatedText = "Updated: " + formatDate(updatedAt);
  } else {
    createdAtUpdatedText = "Created: " + formatDate(updatedAt);
  }
  // Custom function to convert MongoDB ObjectId to a unique positive number
  const objectIdToUniquePositiveNumber = (objectId: string): number => {
    // Use a hash function (e.g., CRC32) to generate a unique number from the ObjectId
    const hash = crc32(objectId);
    // Take absolute value to ensure positive number
    const absHash = Math.abs(hash);
    // Take modulo with a large prime number to limit the range
    return absHash % 1000000; // Change the modulo value as needed to get the desired range
  };

  // CRC32 hash function implementation (example)
  const crc32 = (str: string): number => {
    let crc = 0xffffffff;
    for (let i = 0; i < str.length; i++) {
      crc ^= str.charCodeAt(i);
      for (let j = 0; j < 8; j++) {
        crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
      }
    }
    return crc ^ 0xffffffff;
  };

  // Convert _id to a unique positive number
  const newIDForClient = objectIdToUniquePositiveNumber(_id);
  const [highlighted, setHighlighted] = useState(false);

  const cacheHighlightHover = useMemo(
    () => ({
      onMouseEnter: () => setHighlighted(true),
      onMouseLeave: () => setHighlighted(false),
    }),
    [setHighlighted]
  );
  const tableRow: HTMLTableRowElement | null =
    document.querySelector(".selectedTable");

  const cacheAddRemoveClass = useMemo(() => {
    if (tableRow) {
      if (highlighted) {
        tableRow.classList.add("bg-secondary");
      } else {
        tableRow.classList.remove("bg-secondary");
      }
    }
  }, [highlighted]);

  useEffect(() => {
    {
      cacheAddRemoveClass;
    }
  }, [highlighted]);

  return (
    <>
      <tbody>
        <tr
          key={_id}
          onClick={() => {
            onNoteClicked(note);
          }}
          // onMouseEnter={() => setHighlighted(true)}
          // onMouseLeave={() => setHighlighted(false)}
          {...cacheHighlightHover}
        >
          <td className={highlighted ? "selectedTable bg-secondary" : ""}>
            {newIDForClient}{" "}
          </td>
          <td className={highlighted ? "selectedTable bg-secondary" : ""}>
            {title}{" "}
          </td>
          <td className={highlighted ? "selectedTable bg-secondary" : ""}>
            {text}
          </td>
          <td className={highlighted ? "selectedTable bg-secondary" : ""}>
            <Button
              className="text-white me-2"
              onClick={(e) => {
                onDeleteNoteClicked(note);
                e.stopPropagation();
                alert(
                  "Task named " +
                    "*" +
                    note.title +
                    "*" +
                    " is deleted successfully"
                );
              }}
            >
              <MdDelete></MdDelete>
            </Button>
            {createdAtUpdatedText}
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Notes;
