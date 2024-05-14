import express from "express";
import * as UserControllers from "../controllers/users";

const router = express.Router();

router.post("/signup", UserControllers.signUp);
router.post("/login", UserControllers.login);
router.get("/", UserControllers.getAuthenticatedUser);

router.post("/logout", UserControllers.logout);

// router.get("/", AccountControllers.getNotes);

// router.get("/:noteId", AccountControllers.getNote);

// router.patch("/:noteId", AccountControllers.updateNote);

// router.delete("/:noteId", AccountControllers.deleteNote);

export default router;
