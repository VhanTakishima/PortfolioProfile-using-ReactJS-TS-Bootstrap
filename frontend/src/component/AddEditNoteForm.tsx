/* eslint-disable @typescript-eslint/no-unused-vars */
import { Form, Button, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Note } from "../models/note";
import { NoteInput } from "../network/notes_api";
import * as NotesApi from "../network/notes_api";
import TextInputField from "./form/TextInputField";

interface AddEditNoteProps {
  noteToEdit?: Note;
  onNoteSaved: (note: Note) => void;
  setTableSize: (_state1: boolean) => void;
  setIsBtnEnabled: (_state2: boolean) => void;
}
const AddNoteForm = ({
  onNoteSaved,
  noteToEdit,
  setTableSize,
  setIsBtnEnabled,
}: AddEditNoteProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NoteInput>({
    defaultValues: {
      title: noteToEdit?.title || "",
      text: noteToEdit?.text || "",
    },
  });

  async function onSubmit(input: NoteInput) {
    try {
      let noteResponse: Note;
      if (noteToEdit) {
        noteResponse = await NotesApi.updateNote(noteToEdit._id, input);
      } else {
        noteResponse = await NotesApi.createNote(input);
      }
      onNoteSaved(noteResponse);
      resetForm();
      setTableSize(false);
      setIsBtnEnabled(false);
    } catch (error) {
      console.error(error);
    }
  }
  const resetForm = () => {
    reset();
  };

  return (
    <div>
      <Form
        className="row g-2 mt-2"
        id="addEditNoteForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <TextInputField
          name="title"
          label="title"
          type="text"
          placeholder="title"
          register={register}
          registerOptions={{ required: "Required" }}
          error={errors.title}
        /> */}

        <FormGroup className="col-3">
          <Form.Control
            type="text"
            className="taskTitle h-100 "
            placeholder="Enter Task Title"
            isInvalid={!!errors.title}
            {...register("title", { required: "Required title" })}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.title?.message}
          </Form.Control.Feedback>
        </FormGroup>
        <FormGroup className="col-7">
          <Form.Control
            type="text"
            className="taskEntry h-100"
            placeholder="Enter Task Description"
            {...register("text")}
          ></Form.Control>
        </FormGroup>
        <FormGroup className="col-2">
          <Button
            className="w-100"
            type="submit"
            form="addEditNoteForm"
            value="task"
            disabled={isSubmitting}
            // onClick={() => {
            //   setTableSize(false);
            // }}
          >
            {noteToEdit ? "Edit Note" : "Add Note"}
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default AddNoteForm;
