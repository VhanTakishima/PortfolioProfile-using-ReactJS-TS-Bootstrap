/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectId } from "mongodb";
import { Note as NoteModels } from "../models/note";
import { formatDate } from "../util/formatDate";

interface NotesProps {
  note: NoteModels;
}

const Notes = ({ note }: NotesProps) => {
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

  return (
    <>
      <tbody>
        <tr key={_id}>
          <td>{newIDForClient}</td>
          <td>{title}</td>
          <td>{text}</td>
          <td>{createdAtUpdatedText}</td>
        </tr>
      </tbody>
    </>
  );
};

export default Notes;
