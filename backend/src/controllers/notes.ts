/* eslint-disable @typescript-eslint/no-unused-vars */
import { RequestHandler } from "express";
// import sanitizeHtml from "sanitize-html";
import Notemodel from "../models/note";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import note from "../models/note";

export const getNotes: RequestHandler = async (req, res, next) => {
  try {
    // throw createHttpError(401);
    // just for testing error
    const notes = await Notemodel.find().exec();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

export const getNote: RequestHandler = async (req, res, next) => {
  const noteId = req.params.noteId;

  try {
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid note ID");
    }
    const note = await Notemodel.findById(noteId).exec();

    if (!note) {
      throw createHttpError(404, "Note not found");
    }
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

interface CreateNoteBody {
  title?: string;
  text?: string;
}

export const createNote: RequestHandler<
  unknown,
  unknown,
  CreateNoteBody,
  unknown
> = async (req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;
  try {
    if (!title) {
      throw createHttpError(400, "Note must have title");
    }
    const newNote = await Notemodel.create({
      title: title,
      text: text,
    });
    res.setHeader("Content-Type", "application/json");
    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};
interface UpdateNoteParams {
  noteId: string;
}

interface UpdateNoteBody {
  title?: string;
  text?: string;
}

export const updateNote: RequestHandler<
  UpdateNoteParams,
  unknown,
  UpdateNoteBody,
  unknown
> = async (req, res, next) => {
  const noteId = req.params.noteId;
  const newTitle = req.body.title;
  const newText = req.body.text;

  try {
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid note ID");
    }

    if (!newTitle) {
      throw createHttpError(400, "Note must have title");
    }
    const note = await Notemodel.findById(noteId).exec();
    if (!note) {
      throw createHttpError(404, "Note not found");
    }

    note.title = newTitle;
    note.text = newText;
    const updatedNote = await note.save();
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(updatedNote);
  } catch (error) {
    next(error);
  }
};

export const deleteNote: RequestHandler = async (req, res, next) => {
  const noteId = req.params.noteId;
  try {
    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid note ID");
    }

    const note = await Notemodel.findById(noteId).exec();
    if (!note) {
      throw createHttpError(404, "Note not found");
    }

    await note.deleteOne();
    res.setHeader("Content-Type", "application/json");
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
